var NP=window.NP||{};NP.app=function(){return $(".b-slider__item").first().addClass("current"),$(".b-slider__items").slick({dots:!1,infinite:!0,arrows:!1,speed:600,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1e3,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,infinite:!0,arrows:!1}}]}),$(".b-slider__nav__item--prev--js").on("click",function(){$(".b-slider__items").slickPrev()}),$(".b-slider__nav__item--next--js").on("click",function(){$(".b-slider__items").slickNext()}),$(".b-slider__item").on("click",function(){$(".b-slider__item").removeClass("current"),$(this).addClass("current");var i=$(this).data("format");$(".b-sample__format").fadeOut(function(){$(this).html("");var t=$("<img />");t.attr("src",i),$(this).append(t),$(this).fadeIn()})}),$(".b-follow").on("click",function(){$("body,html").animate({scrollTop:$(".b-slider").offset().top-40+"px"})}),this},NP.popup=function(i){this.$trigger=$(i),this.$popup=$($(i).data("popup")),this.hidePopup=function(i){i&&i.preventDefault(),this.$popup.fadeOut()},this.hideAll=function(i){i&&i.preventDefault(),this.hidePopup()},this.showPopup=function(i){i.preventDefault(),$(".b-popup").fadeOut(),this.$popup.fadeIn()},this.$trigger.on("touchstart, click",$.proxy(this.showPopup,this)),this.$popup.find(".b-popup__close--js").on("touchstart, click",$.proxy(this.hideAll,this)),this.hidePopup()},$(function(){FastClick.attach(document.body),NP.app=NP.app(),$(".popup-trigger--js").each($.proxy(function(i,t){new NP.popup(t)},this))});