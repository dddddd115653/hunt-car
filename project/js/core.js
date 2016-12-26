
function effhngdhfgjdkk(obj,type,fn){
    if(obj.attachEvent){
        obj.attachEvent('on'+type,function(){
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}
effhngdhfgjdkk(window,'scroll',function(){
    var scrol = document.documentElement.scrollTop || document.body.scrollTop;
    var top = document.getElementById("top");
    if(scrol>=50){
        top.style.display = "inline";
    }else {
        top.style.display = "none"
    }

});

