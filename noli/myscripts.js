 $(document).ready(function(){
                $('#slider').cycle({
                    fx: 'fade',
                    speed: 1000,
                    timeout: 4000,
                    pause: true,
                    prev:'#prev',
                    next:'#next',
                    pager: '#pager' 
                })
                $('#pager a').html('');
				var pager;
				//var leftotst = ($('#slider').width() - pager.width())/2;$('#pager').css({'left':leftotst+'px'}); 
				//menuInLine($('#horMenu'),$('#horMenu>ul>li>a,#horMenu>ul>li>span'), 0);
                /*
				var npbuts = $('.next,.prev');
			    npbuts.html('');
				var cla;
				var pre;
				var next;
			    $('.fredslider').each(function(){
				 cla = 'fred'+$('.fredslider').index($(this));
				 $(this).parents('.list_carousel').addClass(cla);
				 pre = '.'+cla+' .prev';
				 next = '.'+cla+' .next';
				
					$(this).carouFredSel({
						auto: false,
						prev: pre,
						next: next,
						mousewheel: true,
						swipe: {
							onMouse: true,
							onTouch: true
						},
						scroll: 1
				    });
                })
				*/
				 
})



function menuInLine(wrap,elems,px,lrb){
    if(!px)px=0;
	if(!lrb)lrb=0;
    function linkOuterWidth(links){
        lwidth=0
        links.each(function(){
            lwidth+=$(this).outerWidth();          
        })
        return lwidth;
    }
    
    function linkWidth(links){
        lwidth=0
        links.each(function(){
            lwidth+=$(this).width();          
        })
        return lwidth;
    }
    var elsize = elems.size();
	
	if(lrb)elsize =  elems.size()-1;
	
    firststep = Math.floor(((wrap.width()-2*lrb- linkWidth(elems)-((elsize-1)*px))/elsize)/2);
    elems.css({'paddingLeft':firststep+'px','paddingRight':firststep+'px'});
	
	if(lrb){
		elems.eq(0).css({'paddingLeft':lrb+'px'})
		elems.eq(-1).css({'paddingRight':lrb+'px'})
	}
	
    var i = 1;
    var j = 0;    
    elemswidth = linkOuterWidth(elems);
    var razn = wrap.width()-elemswidth-((elems.size()-1)*px);
        for(z=0;z<razn;z++){
			if((!lrb || j!=0) && (!lrb || j!=elems.size()-1)){
               var pleft = parseInt($(elems.get(j)).css('padding-left'));
               var pright = parseInt($(elems.get(j)).css('padding-right'));
               if(i%2)$(elems.get(j)).css({'padding-left': pleft+1});
               else $(elems.get(j)).css({'padding-right': pright+1});
			}else{
			   z--;
			}
            j++;
            if(j==elems.size()){
                j=0;
                i++;
            }
        }
}


/////////////////////////////////////////////

/*
$( document ).ready(function() {
  var x = $( '#vertMenu li' );
  $(x).has('ul').addClass('spec'); // добавить класс
 

  //$("#horMenu li:lasts-child:hover").css("border-radius", 10);

 $("#vertMenu > ul li").mouseover(function(){
    
      var y=$(this).find('a').addClass('borda');//parent();//.addClass('borda'); // y получает указатель на li

    //  $(y).find('a').addClass('borda');

   });

   $("#vertMenu > ul li").mouseout(function(){
    
      var y=$(this).find('a').removeClass("borda")


   });


});



*/
   




   