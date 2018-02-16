var rb=document.getElementById('pt1:sbr1::content');
var b="";
var clone=rb.parentNode.parentNode.innerHTML.toString();
clone=clone.replace("Credit Card","Miles");
clone=clone.replace("sbr1","Miles");
clone=clone.replace("sbr1","Miles");
clone=clone.replace("sbr1","Miles");
rb.parentNode.parentNode.innerHTML=rb.parentNode.parentNode.innerHTML.toString().replace("onclick","title")+clone.replace("onclick","title");
rb=document.getElementById('pt1:sbr1::content');
var milez=document.getElementById('pt1:Miles::content');
milez.parentNode.onclick="";
milez.parentNode.onclick=function(){mileCheck();};
milez.onclick="";
milez.onclick=function(){mileCheck();};
var mileages=document.createElement('input');
mileages.type="text";
mileages.id="mileages";
mileages.className="x25";
milez.parentNode.parentNode.getElementsByTagName('label')[1].appendChild(mileages);
function mileCheck(){
	milez.checked=true;
	rb.checked=false;
        if(document.getElementById('mileages'))
        document.getElementById('mileages').disabled=false;
        b="m";
}
rb.parentNode.onclick="";
rb.parentNode.onclick=function(){cardCheck();};
rb.onclick="";
rb.onclick=function(){cardCheck();};
function cardCheck(){
	rb.checked=true;
	milez.checked=false;
        if(document.getElementById('mileages'))
        document.getElementById('mileages').disabled=true;
        b="c"
}


rb.click();
milez.click();
milez.checked=false;
rb.checked=false;

setInterval(function(){ 
if(b=="c"){cardCheck();}else{
if(b=="m")mileCheck();}
}, 100);



var sub=document.getElementById("pt1:submit");
sub.onclick=function(){success();};
function success(){
if(!document.getElementById('msg')){
var msg=document.createElement('span');
msg.style.color='GREEN';
msg.id="msg";
msg.innerHTML="Success! Your flight is booked. You can view you bookings on the account page.";
document.getElementById("pt1:submit").parentNode.appendChild(document.createElement('br'));
document.getElementById("pt1:submit").parentNode.appendChild(document.createElement('br'));
document.getElementById("pt1:submit").parentNode.appendChild(msg);
}
}
