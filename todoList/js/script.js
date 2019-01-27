$(document).ready(function() {
  var temp=-1; // Служебная переменная для учета добавления элементов на страницу

  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

  if(!window.indexedDB) // Оповещаем о невозможности открытия БД
  {
      console.log("Your Browser does not support IndexedDB");
  }
  var request = window.indexedDB.open("testDB", 2); // Открываем БД
  var db; // Это БД
  request.onerror = function(event){ // Оповещаем об ошибке
      console.log("Error opening DB", event);
  }
  request.onupgradeneeded   = function(event){
      console.log("Upgrading");
      db = event.target.result;
      var objectStore = db.createObjectStore("tasks");
  };
  request.onsuccess  = function(e){ // При успешном подключении
      console.log("Success opening DB");
      db = e.target.result;
      // console.log(db);
      readTask(); // читаем БД сразу по подключению
  }

  function addPerson(e,number,text,done) { // Добавляет запись в БД
    var transaction = db.transaction(["tasks"],"readwrite"); // Создаем транзакцию
    var objectStore = transaction.objectStore("tasks");
    var item = { // В таком виде задача записывается в БД
      text:text, // Текст задачи
      number: number, // Номер задачи, для ее идентификации
      done:done
    };
    var request = objectStore.add(item,number); // Записываем задачу в БД
    request.onerror = function(e) {
        console.log("Error adding",e.target.error.name); // Оповещаем об ошибке
    }
    request.onsuccess = function(e) {
        console.log("Запись осуществлена");  // Оповещаем об успешной записи
    }
  }

  function readTask() { // Читает БД
    let request = db.transaction(["tasks"],"readwrite").objectStore("tasks").getAll(); // Получает все записи
    request.onsuccess = function(event){ // В случае успеха
      for(let i=0;i<request.result.length;i++) { // От 0 до конца БД
        let text = request.result[i].text; // Получаем текст задачи
        let number = request.result[i].number; // Получаем номер задачи
        let done = request.result[i].done; // Получаем статус
        createTask(text,number,done); // Создаем задачу с таким текстом и номером
        if(temp < number) { // Этот блок позволяет избежать дублируемых id
          temp = number;
        }
      }
      temp++;
    };
  };

  function createTask(text,number,done) {  // Создает задачу на экране
    $(".todo").append("<li class='task' data-id="+number+"> <span class='doned'> Выполнено </span> <span class='text'> "+ text +"</span></li>");
    if(done) {
      $(".task").last().addClass('done');
    }
    $(".task").last().append("<div><div class='click'>Выполнить</div> <div class='delete'>Удалить</div></div>");
  };

  function deleteTask(id) { // Удаляет задачу из БД
    let num = parseInt(id, 10); // Получаем номер задачи, парсим в int
    db.transaction(["tasks"],"readwrite").objectStore("tasks").delete(num); // Удаляем запись с таким ключом
  };

  function updateDB() { // Обновляет базу данных
    // Удалить все записи из БД, а потом записать в нее все задачи в новом порядке
    let dbLen;
    let request = db.transaction(["tasks"],"readwrite").objectStore("tasks").getAll(); // Получаем все данные из БД
    request.onsuccess = function(event){ // В случае успеха
      dbLen = request.result.length; // Записываем длину БД
      for(let i=0;i<dbLen;i++) { // Во всей БД
        let key = request.result[i].number; // number соответстует ключу, это позволяет знать ключ каждого элемента
        deleteTask(key); // Удаляем записи с таким ключом
      }
      let len = $('.task').length; // Количество задач
      for(let i=0;i<len;i++) {
        let text = $('.todo .task:eq('+i+')').children('.text').text(); // Текст задачи
        let done;
        if($('.todo .task:eq('+i+')').hasClass('done')) {
          done = true;
        } else {
          done = false;
        }
        addPerson(false,i,text,done); // Пишем в БД задачу с таким номером и текстом
        $('.todo .task:eq('+i+')').attr('data-id',i); // Присваиваем данной задаче новый порядковый номер
      }
    }
  };

  // основной код
  $('.todo').sortable({ // Делает задачи перетаскиваемыми
    update: function(event, ui){ // При изменении порядка
      updateDB(); // обновить БД
    }
  });
  $('.todo').on('click', '.task .click', function() { // При клике на "выполнить"
    $(this).parents('.task').addClass('done'); // Присвоить задаче статус "выполнена"
    updateDB(); // обновить БД
  });
  $('.todo').on('click', '.task .delete', function() { // При клике на "удалить"
    let id = $(this).parents('.task').attr('data-id'); // Получаем id удаляемой записи
    $(this).parents('.task').slideUp();  // Скрываем задачу анимацией
    deleteTask(id); // Вызываем функцию удаления этой записи из БД
    let ar = this;
    setTimeout(function() {
      $(ar).parents('.task').remove();   // Удаляем ее со страницы
    }, 1000);
  });
  $('.interface').on('click', '.add', function() { // При клике "добавить задачу"
    let text = $('.textarea').val();
    if(text!='') { // Если введен текст задачи
      createTask(text,temp); // Вызываем функцию создания задачи, с текстом и порядковым номером
      let done = false;
      addPerson(false,temp,text,done); // Вызываем функцию записи задачи в БД
      $('.textarea').val(null); // Очищаем форму ввода
      temp++; // Инкрементируем служебную переменную
    } else { // Если текст задачи не введен
      $('.error').show(); // Демонстрируем сообщение об ошибке
      setTimeout(function() {
        $('.error').slideUp();   // Скрываем его через секунду
      }, 1000);
    }
  });
});
