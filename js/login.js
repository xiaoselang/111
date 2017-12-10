/**
 * Created by Administrator on 2017\12\6 0006.
 */
$(function(){
    function Login(){
        this.bstop=[false,false,false];
    }
    Login.prototype.init=function(){
        console.log($('.hide'));

        $('.hide').hide();
        $('.tab').find('li').eq(0).css({'color':'#2C9EE1','border-bottom':'2px solid #2C9EE1'});
        this.tab();
        this.keycode='';
        for(var i=0;i<4;i++){
            this.keycode+=this.code();
        }
        console.log(this.keycode);
        console.log($('.keycode span'));
        $('.keycode span').html(this.keycode);
        this.chagecode();
        this.pay();
        this.blur();
        this.login();
    };
    Login.prototype.blur=function(){
        $('form input[type!=checkbox][type!=button]').on('focus',function(){
            $(this).parent('div').css('border','1px solid #0083ce')
        }).on('blur',function(){
            $(this).parent('div').css('border','1px solid #e6e6e6')
        })

    }
    Login.prototype.tab=function(){
        $('.tab li').on('click',function(){
            $(this).css({'color':'#2C9EE1','border-bottom':'2px solid #2C9EE1'}).siblings('li').css({'color':'#333','border-bottom':'0'});
            $('.tab').siblings('div').eq($(this).index()).show().siblings('div').hide();
        });
    }
    Login.prototype.code=function(){
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
    Login.prototype.chagecode=function(){
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
    Login.prototype.pay=function(){
        $('.pay>span').hover(function(){
            $(this).find('em').css('background-position','-35px -6px');
            $(this).find('.more').show();
        },function(){
            $(this).find('em').css('background-position','-5px -6px');
            $(this).find('.more').hide()
        })
        $('.pay li').hover(function(){
            $(this).find('a').css('background-position-y','-51px');
        },function(){
            $(this).find('a').css('background-position-y','0');
        })
    }
    Login.prototype.login=function(){
        $('.btn').on('click',function(){
            console.log(1);
            var tel=$('.tel').find('input').val();
            var pwd=$('.pwd').find('input').val();
            $.ajax({
                url:"php/log.php",
                type:'post',
                data:{
                    tel:tel,
                    pwd:pwd
                }
            }).done(function(e){
                console.log(e);
            }).fail(function(){
                console.log('连接失败');
            })
        })

    }
    new Login().init();
})