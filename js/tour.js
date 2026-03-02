var nav=document.getElementsByTagName("aside");
var item_list=nav[0].querySelectorAll("a");
var img_list=document.querySelectorAll(".map_content");

for(let i=0;i<item_list.length;i++){
    item_list[i].onclick=function(){
        clear();
        img_list[i].classList.add("now");
    }
}
function clear(){
    for(let i=0;i<img_list.length;i++){
        img_list[i].classList.remove("now");
    }
}

const div_list=document.querySelectorAll("ctnt");
var clickTime=0;
for(let i=0;i<div_list.length;i++){
    div_list[i].onclick=function(){
        if(clickTime==0){
            clickTime=new Date().getTime();
        }else{
            if(new Date.getTime()-clickTime<500){
                document.onmousemove=function(){
                    var now_img=div_list[i].getElementsByTagName("img")[0];
                    now_img.getAttribute
                }
            }else{
                clickTime=new Date().getTime();
            }
        }
    }
}
