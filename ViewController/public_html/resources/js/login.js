document.getElementById('SignUp').onclick=function(){window.location.href="http://localhost:7101/Application2-ViewController-context-root/faces/Enrollment.jsf";};

function logMeIn(){
var ffn=document.getElementsByName('j_username')[0].value;
var pw=document.getElementsByName('j_password')[0].value;

if(getUser(ffn)){
if(getUserAttribute(ffn,"password")){
if(getUserAttribute(ffn,"password")==pw){
return true;
}
}else{return false;}

}else{return false;}

}
document.getElementsByName('submit')[0].type="button";
document.getElementsByName('submit')[0].onclick=function(){logged();};
function output(aa){

var sub=document.getElementsByName('submit')[0];
if(!document.getElementById('oo')){
var oo=document.createElement('span');
oo.id="oo";
sub.parentNode.appendChild(document.createElement('br'));
sub.parentNode.appendChild(document.createElement('br'));
sub.parentNode.appendChild(oo);
}
document.getElementById("oo").innerHTML=aa;
}


function logged(){
if(logMeIn()){
setCurrentUserID(document.getElementsByName('j_username')[0].value);
localStorage.setItem("loggedIN","true");
output(document.getElementsByName('j_username')[0].value+" logged in. Proceed to view your "+'<a href="http://localhost:7101/Application2-ViewController-context-root/faces/MyAccount.jsf">account</a>');
document.getElementById("oo").style.color=("green");
}else{

output("Username/password mismatch");
document.getElementById("oo").style.color=("red");
}

}


function searchFlights(){  
var FlightList=listFlightList("master");
var div=document.createElement('div');
div.id="list";
var table=document.createElement('table');
table.id="listTable";
//document.body.appendChild(div);
div.appendChild(table);
table.innerHTML="<tr><td>Flight Number</td><td>Source</td><td>Destination</td><td>Departure</td><td>Arrival</td><td>Seats Available</td></tr>";
for(var x =0;x<FlightList.length;x++){
if(document.getElementById('To').value==getFlightAttribute(listFlightList("master")[x],"FLightID")){
var tr=document.createElement('tr');
var td=document.createElement('td');
td.innerHTML=FlightList[x];
var td1=document.createElement('td');
td1.innerHTML=getFlightAttribute(FlightList[x],"source");
var td2=document.createElement('td');
td2.innerHTML=getFlightAttribute(FlightList[x],"destination");
var td3=document.createElement('td');
td3.innerHTML=getFlightAttribute(FlightList[x],"Departure");
var td4=document.createElement('td');
td4.innerHTML=getFlightAttribute(FlightList[x],"Arrival");
var td5=document.createElement('td');
td5.innerHTML=getFlightAttribute(FlightList[x],"Seats");
var td6=document.createElement('td');
td6.appendChild(document.createElement('button'));
table.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);
tr.appendChild(td6);
}
}
document.write(div.innerHTML);
}
document.getElementById("ForgotPassword").onclick=function(){success();};
function success(){
if(!document.getElementById("response")){
var response=document.createElement('span');
response.id="response";
response.innerHTML="New password has been sent to your email";
response.style.color="GREEN";
document.getElementById("ForgotPassword").outerHTML=document.getElementById("ForgotPassword").outerHTML.toString()+response.outerHTML.toString();
}
}

document.getElementById("SignUp").onclick=function(){window.location.href="http://localhost:7101/Application2-ViewController-context-root/faces/Enrollment.jsf";};

document.getElementById("searchFlights").onclick=function(){searchFlights();};