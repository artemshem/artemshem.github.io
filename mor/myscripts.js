 $(document).ready(function(){
                $('#slider').cycle({
                    fx: 'fade',
                    speed: 1000,
                    timeout: 4000000,
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


$( document ).ready(function() {
  


  var marquee = $("#marquee"); 
  marquee.css({"overflow": "hidden", "width": "100%"});

  // оболочка для текста ввиде span (IE не любит дивы с inline-block)
  marquee.wrapInner("<span>");
  marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
  marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом

  marquee.wrapInner("<div>");
  marquee.find("div").css("width", "200%");

  var reset = function() {
    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
  };

  reset.call(marquee.find("div"));






});




   




   