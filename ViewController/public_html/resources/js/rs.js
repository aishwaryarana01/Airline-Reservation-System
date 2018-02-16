function format(id){
var s=document.getElementById(id);
var all=s.getElementsByTagName('*');
for(var a=0;a<all.length;a++){
if(all[a].tagName=='TR'){
all[a].className="x1u";
}else{
if(all[a].tagName=='TD'){

all[a].className="x25";
if(!document.getElementById('td'+a))all[a].id='td'+a;
}
if(all[a].tagName=='TH')all[a].className="x19";
}

}

}

format('f1');

function turnRed(id){
if(!document.getElementById(id))return false;
var i=document.getElementById(id);
i.style.backgroundColor = "red";
i.parentNode.style.backgroundColor = "red";
i.parentNode.parentNode.style.backgroundColor = "red";
i.checked=true;
}
 
 
function turnGreen(id){
if(!document.getElementById(id))return false;
var i=document.getElementById(id);
i.style.backgroundColor = "green";
i.parentNode.style.backgroundColor = "green";
i.parentNode.parentNode.style.backgroundColor = "green";
i.checked=true;
}

function turnClear(id){
if(!document.getElementById(id))return false;
var i=document.getElementById(id);
i.style.backgroundColor = "";
i.parentNode.style.backgroundColor = "";
i.parentNode.parentNode.style.backgroundColor = "";
i.checked=false;
}

turnRed('sbc2::content');
turnGreen('sbc3::content');

function choose(id){
var choice=document.getElementById(id);
var inputs=document.getElementById('f1').getElementsByTagName('input');
if(choice.style.backgroundColor == "green"){turnClear(id);return true;}else{
for(var l=0;l<inputs.length;l++){
turnClear(inputs[l].id);
}
//alert(choice.outerHTML);
turnGreen(id);
}
turnRed('sbc2::content');
turnGreen('sbc3::content');

}


var inputss=document.getElementById('f1').getElementsByTagName('input');

for(var ls=0;ls<inputss.length;ls++){
if(inputss[ls].type=="checkbox"){
localStorage.setItem("tempSeat",inputss[ls].id);
inputss[ls].onclick=function(){choose(this.id);};
//alert(inputss[ls].id);
}
}

