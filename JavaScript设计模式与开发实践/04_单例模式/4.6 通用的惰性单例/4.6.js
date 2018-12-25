var getSingle = function( fn ){
    var result;// result 变量因为身在闭包中，它永远不会被销毁。
    return function(){
        return result || ( result = fn .apply(this, arguments ) );//未被赋值则调用fn
    }
};


var createLoginLayer = function(){
    var div = document.createElement( 'div' );
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.body.appendChild( div );
    return div;
};
var createSingleLoginLayer = getSingle( createLoginLayer );
document.getElementById( 'loginBtn' ).onclick = function(){
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
};