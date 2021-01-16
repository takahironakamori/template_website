// 指定したdomを表示する
NdCommon.prototype.showContent = function(node) {
    var nd_ = nd;
    node.addClass("show");
    setTimeout(function(){
        node.addClass("on");
    }, 10);
}


// 指定したdomを隠す
NdCommon.hideContent = function(node) {
    var nd_ = nd;
    node.removeClass("on");
    node.removeClass("show");
}