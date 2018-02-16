var logo=document.createElement('img');
logo.src='logo.png';
logo.height='50';
logo.width='80';

document.getElementById('pt1:pt_brLogo').innerHTML="";
document.getElementById('pt1:pt_brLogo').appendChild(logo);
var buttons=document.getElementById('pt1:pt_db9::c').getElementsByClassName('xr8')[0].getElementsByTagName('div');

for(var i=0;i<buttons.length;i++){
buttons[i].style.width="100%";
buttons[i].outerHTML=buttons[i].outerHTML.toString()+'<br>';
}

var main=document.getElementById('pt1:pt_psl5::c');

var asdf=document.createElement('iframe');
asdf.style.width="100%";
asdf.style.height="100%";
asdf.src="http://localhost:7101/Application2-ViewController-context-root/login.html";
main.innerHTML="";
main.appendChild(asdf);
document.getElementById('pt1:pt_titleWrp').getElementsByTagName('span')[0].innerHTML="Fly High";
document.getElementById('pt1:b1').onclick=function(){asdf.src="http://localhost:7101/Application2-ViewController-context-root/login.html";};
document.getElementById('pt1:b2').onclick=function(){asdf.src="http://localhost:7101/Application2-ViewController-context-root/faces/Enrollment.jsf";};
document.getElementById('pt1:b3').onclick=function(){asdf.src="http://localhost:7101/Application2-ViewController-context-root/faces/MyAccount.jsf";};
document.getElementById('pt1:b4').onclick=function(){asdf.src="http://localhost:7101/Application2-ViewController-context-root/faces/FlightSchedule.jsf";};
document.getElementById('pt1:b5').onclick=function(){asdf.src="http://localhost:7101/Application2-ViewController-context-root/faces/flightstatus.jsf";};
document.getElementById('pt1:b6').onclick=function(){asdf.src="http://localhost:7101/Application2-ViewController-context-root/contactUs.html";};
document.getElementById('pt1:b7').onclick=function(){asdf.src="http://localhost:7101/Application2-ViewController-context-root/faces/Logout.jsf";};
document.getElementById('pt1:bb').onclick=function(){asdf.src="http://localhost:7101/Application2-ViewController-context-root/faces/reserve_seat.jsf";};

setInterval(function(){ 
if(localStorage.getItem("loggedIN")){

if(localStorage.getItem("loggedIN")=="false"){
document.getElementById('pt1:b1').style.display="block";
document.getElementById('pt1:b2').style.display="block";
//document.getElementById('pt1:b6').style.display="block";
document.getElementById('pt1:b7').style.display="none";
document.getElementById('pt1:b3').style.display="none";
document.getElementById('pt1:b4').style.display="none";
document.getElementById('pt1:bb').style.display="none";
//document.getElementById('pt1:b5').style.display="none";
}else{
document.getElementById('pt1:b1').style.display="none";
document.getElementById('pt1:b2').style.display="none";
//document.getElementById('pt1:b6').style.display="none";
document.getElementById('pt1:b7').style.display="block";
document.getElementById('pt1:b3').style.display="block";
document.getElementById('pt1:b4').style.display="block";
//document.getElementById('pt1:b5').style.display="block";
document.getElementById('pt1:bb').style.display="block";


}

}else{
document.getElementById('pt1:b1').style.display="block";
document.getElementById('pt1:b2').style.display="block";
//document.getElementById('pt1:b6').style.display="block";
document.getElementById('pt1:bb').style.display="none";
document.getElementById('pt1:b7').style.display="none";
document.getElementById('pt1:b3').style.display="none";
document.getElementById('pt1:b4').style.display="none";
//document.getElementById('pt1:b5').style.display="none";
}


}, 100);










