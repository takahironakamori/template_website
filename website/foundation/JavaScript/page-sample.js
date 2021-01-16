"use strict";

var nd = {};


/* NdPage ----------- */

var NdPage = function(){

}

NdPage.prototype.showPage = function(){
  nd.common.showPage();
}


/* Start ----------- */

(function($) {

  var win = $(window);
  nd.page = new NdPage();
  nd.common = new NdCommon();

  win.on("load", function(){
    nd.common.init();
    nd.common.addEvent();
    nd.page.showPage();
  });

  win.on("resize", function(){

  });

  win.scroll(function(){

  });

  win.on("focus",function(){
    
  })

  win.on("blur",function(){
    
  });


})(jQuery);