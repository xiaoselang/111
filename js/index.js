/**
 * Created by Administrator on 2017\12\6 0006.
 */
$(function () {
    $.ajax({
        url:"php/receipt.json",
    }).done(function(result){
        var oUl=$('<ul></ul>');
        for(var key in result){
            var oLi=$('<li></li>');
            var oP=$('<p></p>');
            oP.addClass('add1');
            oP.html(key);
            oLi.append(oP);;

            for(var k in result[key]){
                var oSpan=$('<span></span>');
                oSpan.html(result[key][k]);
                oSpan.addClass('add2');
                oLi.append(oSpan);
            }
            oLi.addClass('add3')
            oUl.append(oLi);

        }
        oUl.css({'position':'absolute','left':'50px','top':'30px','display':'none'})
        $('.address').append(oUl)
    })
    $('.address').hover(function(){
        $(this).children('ul').show();
        $(this).css('background','#fff');
        console.log($('.add2'));
        $('.add2').on('click',function(){
            console.log($('.address').children('li').eq(1));
            console.log($(this).html());
            $('.address').children('li').eq(1).html($(this).html());
        })
    },function(){
        $(this).children('ul').hide();
        $(this).css('background','#f1f1f1')
    });
    $('.login>li>a').hover(function(){
        $(this).css({'text-decoration':'underline','color':'#157cdb'});
    },function(){
        $(this).css({'text-decoration':'none','color':'#999'});
    });
    $('#login').hover(function(){
        $(this).css('text-decoration','underline');
    },function(){
        $(this).css('text-decoration','none');
    });
    $('#login').on('click',function(){
        window.open('login.html');
    });
    $('#register').on('click',function(){
        window.open('register.html');
    })
    $('.mine').hover(function(){
        $(this).find('ul').show();
    },function(){
        $(this).find('ul').hide();
    })

})