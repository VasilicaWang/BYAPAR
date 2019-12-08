$(function () {
    // 头部下拉菜单 开始
    $('.language').hover(function() {
        $(this).find('.more_lang').show(300);
    }, () => {
        $(this).find('.more_lang').hide(300);
    })
    // 头部下拉菜单 结束

    // 导航栏购物车下拉菜单 开始
    $('.nav_cart').hover(function() {
        $(this).find('.nav_cart_in').show();
    }, () => {
        $(this).find('.nav_cart_in').hide();

    })
    // 导航栏购物车下拉菜单 结束

    // 主题颜色样式设置
    function setColor() {
        let colors = ['#f5595a', '#25d6a2', '#30b4da', '#1b67cc', '#0fb36c', '#6ba518', '#c74a73', '#9261c6', '#0b60a9', '#dfaa0a', '#987654', '#ff6b98'];
        for (let i = 0; i < 12; i++) {
            let li = $('<li></li>');
            li.css('backgroundColor', colors[i]);
            $('.set_color .colors').append(li);
            let color = colors[i];
            li.on('click', () => {
                $('a.active').css('color', color);
                $('.nav_categorys .col-menu:nth-child(3) span').css('backgroundColor', color);
                $('.nav_cart_btn button:first-child').css('backgroundColor', color);
                $('.banner ol li.active').css('backgroundColor', color);
                $('.carousel-caption a').css('backgroundColor', color);
                $('.explore a').css('backgroundColor', color);
                $('.cta_con a').css('backgroundColor', color);
                $('.subscribe_email button').css('backgroundColor', color);
                $('.ad h3').css('backgroundColor', color);
                $('.toTop').css('backgroundColor', color);
                $('.arrows').children().hover(function() {
                    $(this).css({'backgroundColor': color, color: '#fff'});
                }, function() {
                    $(this).css({'backgroundColor': '#fff', color: '#323232'});

                });
                $('.follow_btn').hover(function() {
                    $(this).css({backgroundColor: color});
                }, function() {
                    $(this).css({backgroundColor: "#fff"});
                })
            })
        }

        $('.set_button').on('click', function() {
            $(this).parents('.color_box').animate({width: 265});
            $('.set_color').on('mouseleave', function() {
                $(this).parents('.color_box').stop().animate({width: 40});
            })
        })

    }
    setColor();

    // 产品模块
    // 里面的span对话框
    $('.product_mask div.iconfont').hover(function() {
        $(this).find('span').stop().fadeToggle(200);
    })
    // 产品整体鼠标经过出现遮罩内容
    productMask($('.products li'));
    productMask($('.swiper-product .swiper-slide'));
    function productMask(ele) {
        ele.hover(function() {
            $(this).find('.product_mask>div').stop().animate({left: 25});
            $(this).find('.product_mask>button').stop().animate({bottom: 20});
        }, function() {
            $(this).find('.product_mask>div').stop().animate({left: -40});
            $(this).find('.product_mask>button').stop().animate({bottom: -40});
        })
    }

    // 更多产品
    $('.more_infor span').hover(function() {
        $(this).find('i').stop().fadeToggle(200);
    })

    // 关闭广告
    $(window).on('load', function() {
        $('.ad').show();
    })
    $('.ad i').on('click', function() {
        $(this).parent().hide();
    })

    // 返回顶部
    $('.toTop').on('click', function() {
        $('body, html').animate({scrollTop: 0});
    })
    $(window).on('scroll', function() {
        if($(this).scrollTop() >= $('.main1_shop').offset().top) {
            $('.toTop').stop().fadeIn(300);
        }else {
            $('.toTop').stop().fadeOut(300);
        }
    })
})