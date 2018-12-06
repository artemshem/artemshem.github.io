 $(document).ready(function(){
                                


    function timer() {
        var nowDate = new Date();
        var achiveDate = new Date(2019,12,5,0,0,0); 
        var result = (achiveDate - nowDate)+1000;
        if (result < 0) {
            var elmnt = $('.timer-out');
            $('.timer').HTML(' - : - - : - - : - - ');
            return undefined;
        }
        var seconds = Math.floor((result/1000)%60);
        var minutes = Math.floor((result/1000/60)%60);
        var hours = Math.floor((result/1000/60/60)%24);
        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours;
        $('.timer .timer-hours').html(hours);
        $('.timer .timer-min').html(minutes);
        $('.timer .timer-sec').html(seconds);
        setTimeout(timer, 1000);
        
    }
    

    timer();


    $("#phone").mask("+7 (999) 999-99-99");


});