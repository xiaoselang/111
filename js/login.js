/**
 * Created by Administrator on 2017\12\6 0006.
 */
$(function(){
    $('.tab').find('li').eq(0).css({'color':'#2C9EE1','border-bottom':'2px solid #2C9EE1'});
    $('.tab li').on('click',function(){
        $(this).css({'color':'#2C9EE1','border-bottom':'2px solid #2C9EE1'}).siblings('li').css({'color':'#333','border-bottom':'0'});
        $('.tab').siblings('div').eq($(this).index()).show().siblings('div').hide();
    });
    function Normal() {

    };
})