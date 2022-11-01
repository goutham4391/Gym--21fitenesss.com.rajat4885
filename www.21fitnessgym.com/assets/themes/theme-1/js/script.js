  $(function(){
            var lastScrollTop = 0, delta = 15;
            $(window).on('load scroll', function(event){
            var st = $(this).scrollTop();
            // console.log(window.innerHeight)
            
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
                if ((st > lastScrollTop) && (lastScrollTop>150)) {
                    // downscroll code
                    $("header").addClass('scrolling-down')
                    $("header").removeClass('scrolling-up')
                } else if((st > lastScrollTop) && (lastScrollTop>1) && (window.innerWidth <= 767)){
                  $("header").addClass('scrolling-down')
                    $("header").removeClass('scrolling-up')
                }else {
                    // upscroll code
                    $("header").addClass('scrolling-up')
                    $("header").removeClass('scrolling-down')
                }
            lastScrollTop = st;


            if(st>150){
                $('header').addClass('sml-header')
            }else if((st>10) && (window.innerWidth <= 767)){
              $('header').addClass('sml-header')
            }else{
                $('header').removeClass('sml-header')
            }
            });
        });



$(function(){
var current = location.pathname;
    $('.top-menu>li>a').each(function(){
        var $this = $(this);
        const lastItem = current.split('/').slice(-1)[0]
        const linktxt = $this.attr('href').match(/([^\/]*)\/*$/)[1]
        if(linktxt == lastItem){
            $this.parent().addClass('active');
        }
    })
})




$(window).on('resize', function(){
    if(window.innerWidth <= 1260){
        if($('header').find('.sidemenu-box').length == 0){
            $('.menu-top-menu-container').show();
            // $('.social-icons').css('display', 'flex');
            $('.top-menu, .top-header-btns').wrapAll( "<div class='sidemenu-box'></div>" );
            $(`
            <div class="header-backdroap"></div>
            <div class="phone-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            `).insertBefore('.sidemenu-box');
            $('body').addClass('menu-closed');
            $('body').removeClass('menu-opened');
            $('.phone-menu').click(function(){
            if($('body').hasClass('menu-closed')){
                $('body').addClass('menu-opened');
                $('body').removeClass('menu-closed');
            }else{
                $('body').addClass('menu-closed');
                $('body').removeClass('menu-opened');
            }
            });
            $('.header-backdroap').click(function(){
            $('body').addClass('menu-closed');
                $('body').removeClass('menu-opened');
            });
            $('.sub-menu').each(function(){
                $(this).hide();
                $('<span class="dd-click"></span>').insertBefore($(this));
            });
        }
    }else{
        if($('header').find('.sidemenu-box').length > 0){
            $('.top-menu, .top-header-btns').unwrap();
            $('.header-backdroap, .phone-menu, .dd-click').remove();
        }
        $('.sub-menu').show();
    }
    
}).resize();

$(document).click(function(e){
    if(e.target.classList.contains('dd-click')){
        if($(e.target).parents('.sub-menu').length == 0){
            $('.sub-menu').slideUp()
            $('.dd-click').removeClass('slideOpened')
        }
        if($(e.target).siblings('.sub-menu').css('display') == "none"){
            $(e.target).siblings('.sub-menu').slideDown()
            $(e.target).addClass('slideOpened')
        }else{
            $(e.target).siblings('.sub-menu').slideUp()
            $(e.target).removeClass('slideOpened')
        }
    }
})