/***************************************  Отделение тысяч   ************************************/
/*   Передаем элемент(ы) - текст в нем(них) разделяется по три символа от конца   */
function priceFormat(prices){
    prices.each(function(){
        if($(this).text().length>4){
            var str='';
            var j=0;
            for(var i=$(this).text().length-1; i>=0; i--){
                j++;
                if(j%3 == 0){
                    str=' '+$(this).text()[i] + str;
                }else{
                    str=$(this).text()[i] + str;
                }
            }
            $(this).text(str)
        }
    })
}
/***************************************   Отделение тысяч   ************************************/

/*********************************   Уменьшение паддингов в меню   ******************************/
/*   Передаем элемент под размер которого будет меню, съезжающие элементы и высоту меню   */
function menuInLine(wrap,menu,elems){
    function linkWidth(links){
        lwidth=0
        links.each(function(){
            lwidth+=$(this).outerWidth();          
        })
        return lwidth;
    }
    var i = 1;
    var j = 0;
    var pads = parseInt(elems.css('padding-left'));
    elems.css({'padding-left': pads, 'padding-right':pads})
    while(menu.height()>elems.outerHeight()){
        if(pads<1){
            menu.css({'width':linkWidth(elems)+'px'});
            break;}
        menu.css({'width':'auto'});
        elems.css({'padding-left': pads=pads-1, 'padding-right':pads=pads-1})
    }
    
    if(linkWidth(elems)>wrap.width()){
        var razn = linkWidth(elems)-wrap.width();
        for(z=0;z<razn;z++){
               var pleft = parseInt($(elems.get(j)).css('padding-left'));
               var pright = parseInt($(elems.get(j)).css('padding-right'));
               if(i%2)$(elems.get(j)).css({'padding-left': pleft-1});
                else $(elems.get(j)).css({'padding-right': pright-1});
            j++;
            if(j==elems.size()){
                j=0;
                i++;
            }
        }
    }else{
        var razn = wrap.width()-linkWidth(elems)-1;
        for(z=0;z<razn;z++){
               var pleft = parseInt($(elems.get(j)).css('padding-left'));
               var pright = parseInt($(elems.get(j)).css('padding-right'));
               if(i%2)$(elems.get(j)).css({'padding-left': pleft+1});
               else $(elems.get(j)).css({'padding-right': pright+1});
            j++;
            if(j==elems.size()){
                j=0;
                i++;
            }
        }
        
    }
}
/*********************************   Уменьшение паддингов в меню    *****************************/

/********************************* Числовые инпуты *******************************/
               function intInput(input){
                    var val = parseInt(input.val());
                    if(!val)val=1;
                    val = Math.abs(val);
                    input.val(val);
               }
/********************************* Числовые инпуты *******************************/