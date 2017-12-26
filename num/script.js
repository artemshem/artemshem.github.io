function fn() {
	var number = document.getElementById('input').value; // работает
	var answer = document.getElementById('answer');
	number.split();
	var count=0;
	var result = true;

	for(let i=0;i<number.length;i++) {				// считает цифры
		if(number[i]>=0&&number[i]<=9&&number[i]!=' ') {
			count++;
		} else if(number[i]!=' '&&number[i]!='-'&&number[i]!='('&&number[i]!=')'&&number[i]!='+') {
			result = false;
		} else if(number[i]=='+'&&i>0) {
			result = false;
		}
	}
	if(count!=7&&count!=11) {
		result=false;
	} else if((count==11)&&(number[0]=='+')) {
		if(number[1]!='7') { result = false; }
	} else if((count==11)&&(number[0]!='+')&&(number[0]!='8')) {
		result = false;
	}

	answer.innerHTML=('Номер: ' + number + ' <br> Число цифр: ' + count + ' <br> Правильность: ' + result + 
		' <br> Первый и второй символы : ' + number[0] + number[1]);

}