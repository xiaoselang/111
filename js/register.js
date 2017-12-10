/**
 * Created by Administrator on 2017\12\6 0006.
 */
$(function () {
    function Register() {
        this.bstop = [false, false, false, false, true]
    }

    Register.prototype.init = function () {
        this.blur();
        this.code();
        this.keycode='';
        for(var i=0;i<4;i++){
            this.keycode+=this.code();
        }
        $('.keycode span').html(this.keycode);
        this.chagecode();
        this.pay();
        this.tijiao()
    }
    Register.prototype.tel = function () {

    }
    Register.prototype.blur = function () {
        var self = this;
        $('.res-list input[type!=checkbox][type!=button]').on('focus', function () {
            $(this).parent('div').css({'border': '1px solid #0C6796', 'background': '#fff'});
            $(this).parent('div').find('.hide').hide();
        })
        $('.res-list input[type!=checkbox][type!=button]').eq(0).on('blur', function () {
            if ($(this).val() == '') {
                $(this).parent('div').css({'border': '1px solid #ffaa00'});
                $(this).siblings('span').show();
            } else if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test($(this).val()))) {
                $(this).parent('div').css({'border': '1px solid red'});
                $(this).siblings('i').show();

            } else {
                $(this).parent('div').css({'border': '1px solid #e6e6e6'});
                $(this).siblings('em').show();
                self.bstop[0] = true;
            }
        })
        $('.res-list input[type!=checkbox][type!=button]').eq(1).on('blur', function () {
            if ($(this).val() == '') {
                $(this).parent('div').css({'border': '1px solid red'});
                $(this).siblings('span').eq(0).show().siblings('span').hide();
            } else if (!(/[0-9a-zA-Z]{6,20}/.test($(this).val()))) {
                $(this).parent('div').css({'border': '1px solid red'});
                $(this).siblings('span').eq(1).show();

            } else if (!(/[a-zA-Z]/).test($(this).val())) {
                $(this).parent('div').css({'border': '1px solid red'});
                $(this).siblings('span').eq(2).show();
            } else {
                $(this).parent('div').css({'border': '1px solid #e6e6e6'});
                $(this).siblings('em').show();
                self.bstop[1] = true;
            }
        })
        $('.res-list input[type!=checkbox][type!=button]').eq(2).on('blur', function () {
            console.log($('.pwd input').val());
            if ($(this).val() == '') {
                $(this).siblings('.hide').eq(0).show();
                $(this).parent('div').css({'border': '1px solid red'});
            }else if($(this).val()!=$('.pwd input').val()){
                $(this).siblings('.hide').eq(1).show();
                $(this).parent('div').css({'border':'1px solid red'});
            }else{
                $(this).parent('div').css({'border':'1px solid #e6e6e6'});
                $(this).siblings('em').show()
                self.bstop[2]=true;
            }
        })
        $('.res-list input[type!=checkbox][type!=button]').eq(3).on('blur', function () {
            console.log($('.pwd input').val());
            if ($(this).val() == '') {
                $(this).siblings('.hide').eq(0).show();
                $(this).parent('div').css({'border': '1px solid red'});
            }else if($(this).val().toLowerCase()!=$(this).siblings('span').html().toLowerCase()){
                $(this).siblings('.hide').eq(1).show();
                $(this).parent('div').css({'border':'1px solid red'});
            }else{
                $(this).parent('div').css({'border':'1px solid #e6e6e6'});
                $(this).siblings('em').show()
                self.bstop[3]=true;
                console.log(self.bstop);
            }
        })
    }
    Register.prototype.code=function(){
        var code=parseInt(Math.random()*62);
        if(code<10){
            code=code;
        }else if(code>9&&code<36){
           code= String.fromCharCode(55+ code);
        }else{
            code=String.fromCharCode(61+code);
        }
        return code;
    }
    Register.prototype.chagecode=function(){
        var self=this;
        $('.keycode span').on('click',function(){
            self.keycode='';
            for(var i=0;i<4;i++){
                self.keycode+=self.code();
            }
            $('.keycode span').html(self.keycode);
        });
        $('.keycode a').on('click',function(){
            self.keycode='';
            for(var i=0;i<4;i++){
                self.keycode+=self.code();
            }
            $('.keycode span').html(self.keycode);
        })
    }
    Register.prototype.pay=function(){
        $('#pay li').hover(function(){
            $(this).find('a').css('background-position-y','-51px');
        },function(){
            $(this).find('a').css('background-position-y','0');
        })
    }
    Register.prototype.connect=function(){
        console.log(1);
        var tel=$('.tel').find('input').val();
        var pwd=$('.pwd').find('input').val();
        console.log(tel);
        console.log(pwd);
        $.ajax({
            url:"php/register.php",
            type:'post',
            data:{
                tel:tel
            }
        }).done(function(e){
            console.log(e);
        }).fail(function(){
            console.log('数据库连接失败');
        })
    }
    Register.prototype.tijiao=function(){
        var self=this;
        //this.tijiao=true;
        $('.btn input').on('click',function(){
            if(self.bstop[0]&&self.bstop[1]&&self.bstop[2]&&self.bstop[3]&&self.bstop[4]){
                self.connect();
            }
        })
        //$('form').on('submit',function(){
        //    if(bstop){
        //        return false;//阻止按钮跳转。
        //    }
        //});
    }
    new Register().init();
})