"use strict";

var NdCommon = function(){
    this.mask = $("#page-mask");
    this.drawer = $("#page-drawer");
    this.loading = $("#page-loading");
}


NdCommon.prototype.init = function(){

    var body_ = $("body");

    // Androidか（true）否か（false）
    if (navigator.userAgent.match(/Android/i)) {
        this.isAndroid = true;
        body_.addClass('isAndroid');
    } else {
        this.isAndroid = false;
    }

    // iPhoneか（true）否か（false）
    if (navigator.userAgent.match(/iPhone/i)) {
        this.isiPhone = true;
        body_.addClass('isiPhone');
    } else {
        this.isiPhone = false;
    }

    // スマホか（true）否か（false）
    if (this.isAndroid == true || this.isiPhone == true ) {
        this.isSP = true;
    } else {
        body_.addClass('isPC');
        this.isSP = false;
    }

    // iPadか（true）否か（false）
    if (navigator.userAgent.match(/iPad/i)) {
        this.isiPad = true;
        body_.addClass('isiPad');
    } else {
        this.isiPad = false;
    }

}


NdCommon.prototype.addEvent = function(){

    var this_ = this;

    //PC用
    $(".header-global-nav").on("mouseleave", function(e){
        if(navTarget != ""){
            $("#" + navTarget + "-sub").removeClass("active");
            $("#" + navTarget).removeClass("active");
            navTarget = "";
        }
    });

    $(".header-global-nav-item").on("mouseenter", function(e){
        var target = this;
        navEnterTimer = setTimeout(function(){
            if(navTarget != ""){
                $("#" + navTarget + "-sub").removeClass("active");
                $("#" + navTarget).removeClass("active");
            }
            navTarget = $("a", target).data('target');
            if (navTarget == undefined) {
                navTarget = "";
            } else {
                $("#" + navTarget + "-sub").addClass("active");
                $("#" + navTarget).addClass("active");
            }
        },300);
    });

    $(".header-global-nav-item").on("mouseleave", function(e){
        clearTimeout(navEnterTimer);
    });

    $("#drawer-open-button").on('click', function(e){
        e.preventDefault();
        drawer.addClass('on');
        mask.addClass('on');
        body.addClass('open-drawer');
        isDrawerOpen = true;
        drawerOpenTimer = setTimeout(function(){
            $('.drawer-close-menu').addClass("show");
            drawer.addClass('show');
            mask.addClass('show');
            drawerOpenTimer = "";
            $('#drawer-close-button').addClass("show");
            $('#drawer-close-button').removeClass("hide");
        },10);
    });

    $('#drawer-close-button').on('click',function(e){
        e.preventDefault();
        drawer.removeClass('show');
        mask.removeClass('show');
        body.removeClass('open-drawer');
        isDrawerOpen = false;
        drawerOpenTimer = setTimeout(function(){
            drawer.removeClass('on');
            mask.removeClass('on');
            $('.drawer-close-menu').removeClass("show");
            drawerOpenTimer = "";
        },500);
    });

}


NdCommon.prototype.showLoading = function(){
    this.loading.removeClass("hide");
}


NdCommon.prototype.hideLoader = function() {
    this.loading.addClass("hide");
}


NdCommon.prototype.showPage = function() {
    this.hideLoader();
    $("#app").removeClass("hide");
    $("#aside").removeClass("hide");
    $("#contents-slider").removeClass("hide");
    $("#backtotop").removeClass("hide");
    $("#footer").removeClass("hide");
}


NdCommon.prototype.showContent = function(node) {
    node.addClass("show");
    setTimeout(function(){
        node.addClass("on");
    }, 10);
}


NdCommon.prototype.hideContent = function(node) {
    node.removeClass("on");
    node.removeClass("show");
}