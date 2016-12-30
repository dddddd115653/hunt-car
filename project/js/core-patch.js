function scrollbar(obj,type,fn){
    if(obj.attachEvent){
        obj.attachEvent('on'+type,function(){
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}
scrollbar(window,'scroll',function(){
    var scrol = document.documentElement.scrollTop || document.body.scrollTop;
    var top = document.getElementById("top");
    if(scrol>=50){
        top.style.display = "inline";
    }else {
        top.style.display = "none"
    }
});
var Fragment = document.createDocumentFragment();   //碎片
function createBox(tag){ //创建盒子
    return document.createElement(tag);
}
function apChild(option1,option2){  //子级放入父级
    return option1.appendChild(option2);
}
//forEach补丁
Array.prototype.forEach = [].forEach || function(callback){
        var a = 0,
            len = this.length;
        while(a < len){
            callback(this[a], a++, this);
        }
    };