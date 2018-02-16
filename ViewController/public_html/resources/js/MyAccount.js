document.getElementById("pt1:glSp").style.minHeight = "800px";
document.getElementById("pt1:password1::content").type="password";
document.getElementById("pt1:password2::content").type="password";
setTimeout(function(){  document.getElementById("pt1:glSp").style.minHeight = "800px";
document.getElementById("pt1:password1::content").type="password";
document.getElementById("pt1:password2::content").type="password";
}, 1000);
document.getElementById('pt1:brLogo').innerHTML="";
var thisUser=getCurrentUserID();
var logo=document.createElement('img');
PullBackAccount(thisUser);
document.getElementById("FFNs").innerHTML=thisUser;
document.getElementById("Mileages").innerHTML=addMiles(thisUser,"0");


function format(id){
var s=document.getElementById(id);
var all=s.getElementsByTagName('*');
for(var a=0;a<all.length;a++){
if(all[a].tagName=='TR'){
all[a].className="x1u";
}else{
if(all[a].tagName!='BUTTON')all[a].className="x25";
if(all[a].tagName=='TH')all[a].className="x19";
}

}

}

function PullBackAccount(id){

if(id.length>0){
//getUser(id);
setFirstName(getUserAttribute(id,"name"));
setPassword(getUserAttribute(id,"password"));
setCPassword(getUserAttribute(id,"password"));
setLastName(getUserAttribute(id, "lastName"));
setMName(getUserAttribute(id, "middleName")); 
setPhone(getUserAttribute(id, "phone"));
setEmail(getUserAttribute(id, "email"));
setDOB(getUserAttribute(id, "dob"));
setMAddr1(getUserAttribute(id, "mailinggetr1"));
setMAddr2(getUserAttribute(id, "mailinggetr2"));
setMCity(getUserAttribute(id, "mailingCity"));
setMState(getUserAttribute(id, "mailingState"));
setMCountry(getUserAttribute(id, "mailingCountry"));
setMZip(getUserAttribute(id, "mailingZip"));
setBAddr1(getUserAttribute(id, "billinggetr1" ));
setBAddr2(getUserAttribute(id, "billinggetr2"));
setBCity(getUserAttribute(id, "billingCity" ));
setBState(getUserAttribute(id, "billingState"));
setBCountry(getUserAttribute(id, "billingCountry"));
setBZip(getUserAttribute(id, "billingZip"));
setFirstName(getUserAttribute(id,"name"));
setCurrentUserID(id);
//debug(.innerHTML='Registered';
}
}

function updateAccount(id,name,password){
if(getUser(id)){
//debug().innerHTML='Name is taken';
}
if(id.length>0){
//addUser(id,name);
updateUserAttributeNotNull(id,"name",name);
updateUserAttributeNotNull(id,"password",getPassword());
updateUserAttributeNotNull(id, "lastName", getLastName());
updateUserAttributeNotNull(id, "middleName", getMName());
updateUserAttributeNotNull(id, "phone", getPhone());
updateUserAttributeNotNull(id, "email", getEmail());
updateUserAttributeNotNull(id, "dob", getDOB());
updateUserAttributeNotNull(id, "mailingAddr1", getMAddr1());
updateUserAttributeNotNull(id, "mailingAddr2", getMAddr2());
updateUserAttributeNotNull(id, "mailingCity", getMCity());
updateUserAttributeNotNull(id, "mailingState", getMState());
updateUserAttributeNotNull(id, "mailingCountry", getMCountry());
updateUserAttributeNotNull(id, "mailingZip", getMZip());
updateUserAttributeNotNull(id, "billingAddr1", getBAddr1());
updateUserAttributeNotNull(id, "billingAddr2", getBAddr2());
updateUserAttributeNotNull(id, "billingCity", getBCity());
updateUserAttributeNotNull(id, "billingState", getBState());
updateUserAttributeNotNull(id, "billingCountry", getBCountry());
updateUserAttributeNotNull(id, "billingZip", getBZip());
setCurrentUserID(id);
if(!document.getElementById("response")){
var response=document.createElement('span');
response.id="response";
response.innerHTML="Success! Your account has been updated";
response.style.color="GREEN";
document.getElementById("pt1:update").parentNode.appendChild(document.createElement('br'));
document.getElementById("pt1:update").parentNode.appendChild(response);
}
//debug().innerHTML='Registered';
}
}



logo.src='http://localhost:7101/ViewController/images/logo.png';
logo.height='30';
logo.width='80';
document.getElementById('pt1:brLogo').innerHTML="";
document.getElementById('pt1:brLogo').appendChild(logo);
document.getElementById("pt1:glSp").style.minHeight = "1200px";
document.getElementById("pt1:password1::content").type="password";
document.getElementById("pt1:password2::content").type="password";
setTimeout(function(){  document.getElementById("pt1:glSp").style.minHeight = "1200px";
document.getElementById("pt1:password1::content").type="password";
document.getElementById("pt1:password2::content").type="password";
}, 1000);

function setFirstName(fname){
document.getElementById("pt1:firstName::content").value=fname;
}
function getFirstName(){
return document.getElementById("pt1:firstName::content").value;
}
function setLastName(lname){
document.getElementById("pt1:lastName::content").value=lname;
}
function getLastName(){
return document.getElementById("pt1:lastName::content").value;
}
function setMName(mname){
document.getElementById("pt1:it3::content").value=mname;
}
function getMName(){
return document.getElementById("pt1:it3::content").value;
}
function setPhone(phone){
document.getElementById("pt1:phone::content").value=phone;
}
function getPhone(){
return document.getElementById("pt1:phone::content").value;
}
function setEmail(email){
document.getElementById("pt1:email::content").value=email;
}
function getEmail(){
return document.getElementById("pt1:email::content").value;
}
function setPassword(pw){
document.getElementById("pt1:password1::content").value=pw;
}
function getPassword(){
return document.getElementById("pt1:password1::content").value;
}
function setCPassword(pw){
document.getElementById("pt1:password2::content").value=pw;
}
function getCPassword(){
return document.getElementById("pt1:password2::content").value;
}
function setDOB(dob){
document.getElementById("pt1:id1::content").value=dob;
}
function getDOB(){
return document.getElementById("pt1:id1::content").value;
}

//Mailing
function setMAddr1(addr){
document.getElementById("pt1:address1::content").value=addr;
}
function getMAddr1(){
return document.getElementById("pt1:address1::content").value;
}
function setMAddr2(addr){
document.getElementById("pt1:address2::content").value=addr;
}
function getMAddr2(){
return document.getElementById("pt1:address2::content").value;
}
function setMCity(c){
document.getElementById("pt1:city::content").value=c;
}
function getMCity(){
return document.getElementById("pt1:city::content").value;
}
function setMState(s){
var ops=document.getElementById("pt1:soc1::content").options;
for(var i = 0;i<ops.length;i++){
if(ops[i].innerHTML==s)document.getElementById("pt1:soc1::content").selectedIndex=i;}
}
function getMState(){
return document.getElementById("pt1:soc1::content").options
[document.getElementById("pt1:soc1::content").selectedIndex].innerHTML.toString();
}
function setMCountry(c){
document.getElementById("pt1:it2::content").value=c;
}
function getMCountry(){
return document.getElementById("pt1:it2::content").value;
}
function setMZip(z){
document.getElementById("pt1:zip::content").value=z;
}
function getMZip(){
return document.getElementById("pt1:zip::content").value;
}

//Billing
function setBAddr1(addr){
document.getElementById("pt1:address12::content").value=addr;
}
function getBAddr1(){
return document.getElementById("pt1:address12::content").value;
}
function setBAddr2(addr){
document.getElementById("pt1:address22::content").value=addr;
}
function getBAddr2(){
return document.getElementById("pt1:address22::content").value;
}
function setBCity(c){
document.getElementById("pt1:city2::content").value=c;
}
function getBCity(){
return document.getElementById("pt1:city2::content").value;
}
function setBState(s){
var ops=document.getElementById("pt1:soc2::content").options;
for(var i = 0;i<ops.length;i++){
if(ops[i].innerHTML==s)document.getElementById("pt1:soc2::content").selectedIndex=i;}
}
function getBState(){
return document.getElementById("pt1:soc2::content").options
[document.getElementById("pt1:soc2::content").selectedIndex].innerHTML.toString();
}
function setBCountry(c){
document.getElementById("pt1:it4::content").value=c;
}
function getBCountry(){
return document.getElementById("pt1:it4::content").value;
}
function setBZip(z){
document.getElementById("pt1:zip2::content").value=z;
}
function getBZip(){
return document.getElementById("pt1:zip2::content").value;
}


function displayReservations()
{
 var table = document.getElementById("reservationsTable");

    // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3=row.insertCell(2);
var cell4=row.insertCell(3);

document.getElementById('reservationsTable').rows[1].cells[0].innerHTML="Flight678"; 
document.getElementById('reservationsTable').rows[1].cells[1].innerHTML="04/18/2017";
document.getElementById('reservationsTable').rows[1].cells[2].innerHTML="Houston";
document.getElementById('reservationsTable').rows[1].cells[3].innerHTML="Dallas";
}    

var pass=document.getElementById("pt1:password1::content");
var pass2=document.getElementById("pt1:password2::content");
pass.onblur=function(){validatePassword()};
pass2.onblur=function(){validatePassword()};
function validatePassword(){
pass=document.getElementById("pt1:password1::content");
//pass.type="text";
pass2=document.getElementById("pt1:password2::content");
//pass2.type="text";
if(!(pass.value.toString()==pass2.value.toString())){
passwordMessage("Passwords must match");return false;
}else {if(pass.value.length<6){
passwordMessage("Passwords must have at least 6 characters");return false
}else {if(passwordNum()){
passwordMessage("Passwords must have at least one number");return false;
}else{ passwordMessage("");return true;}

}}
pass.type="password";
pass2.type="password";
}

function passwordNum(){
    pass=document.getElementById("pt1:password1::content");
    if(pass.value.search("0")>-1)return false;
    if(pass.value.search("1")>-1)return false;
    if(pass.value.search("2")>-1)return false;
    if(pass.value.search("3")>-1)return false;
    if(pass.value.search("4")>-1)return false;
    if(pass.value.search("5")>-1)return false;
    if(pass.value.search("6")>-1)return false;
    if(pass.value.search("7")>-1)return false;
    if(pass.value.search("8")>-1)return false;
    if(pass.value.search("9")>-1)return false;
    return true;
    
}

function passwordMessage(s){
if(!document.getElementById("pmessage")){
var pm=document.createElement("span");

pm.type="button";
pm.id="pmessage";
pm.style.color="RED";

pass.parentNode.appendChild(pm);
}
document.getElementById("pmessage").innerHTML=" "+s;

}


function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomCaptcha(){
var num=getRandomArbitrary(1, 5);
var captcha=document.getElementById("captcha");
if (num==1){captcha.src="3043-Captcha-smwm.svg.png";localStorage.setItem("vcode","smwm");}
if (num==2){captcha.src="3a6.gif";localStorage.setItem("vcode","CAPTCHA");}
if (num==3){captcha.src="CoolCAPTCHA.png";localStorage.setItem("vcode","apple");}
if (num==4){captcha.src="google.jpg";localStorage.setItem("vcode","Google");}
if (num==5){captcha.src="input-black.gif";localStorage.setItem("vcode","W68HP");}
}
document.getElementById("pt1:vcode::content").onblur=function(){validateVcode();};

function validateVcode(){
    if(document.getElementById("pt1:vcode::content").value==localStorage.getItem("vcode")){codeMessage("");return true;}
    else{codeMessage("Incorrect Verification Code");return false;}
}

function codeMessage(s){
if(!document.getElementById("vcode")){
var pm=document.createElement("span");

pm.type="button";
pm.id="vcode";
pm.style.color="RED";

document.getElementById("pt1:vcode::content").parentNode.appendChild(pm);
}
if(document.getElementById("vcode"))
document.getElementById("vcode").innerHTML=" "+s;

}
function validateRequired(){
if(!notEmpty("pt1:firstName::content"))return false;
if(!notEmpty("pt1:lastName::content"))return false;
if(!notEmpty("pt1:phone::content"))return false;
if(!notEmpty("pt1:email::content"))return false;
if(!notEmpty("pt1:id1::content"))return false;
return true;
}

function notEmpty(id){
if(!document.getElementById(id))return false;
if(!document.getElementById(id).value)return false;
if (document.getElementById(id).value.length<1)return false;
return true;
}

function hideDate(){
if(document.getElementById("pt1:it1::pop::dlg::cd::cg"))document.getElementById("pt1:it1::pop::dlg::cd::cg").style.display="none";
if(document.getElementById("pt1:it1::pop::dlg::cd"))document.getElementById("pt1:it1::pop::dlg::cd").getElementsByClassName("xo2")[0].style.display="none";
if(document.getElementById("pt1:it1::pop::dlg::_ttxt"))document.getElementById("pt1:it1::pop::dlg::_ttxt").innerHTML="Select Time";
if(document.getElementById("pt1:it1::pop::dlg::ok"))document.getElementById("pt1:it1::pop::dlg::ok").onclick=function(){stopHide()};
}

var timer="";
if(document.getElementById("pt1:it1::glyph")){
document.getElementById("pt1:it1::glyph").onmouseover=function(){
timer=setInterval(function(){hideDate();},100);
}
}
function stopHide(){
clearInterval(timer);
return false;
}
getRandomCaptcha();

var upd=document.getElementById("pt1:update")
upd.onclick=function(){updateAccount(thisUser,getFirstName(),getPassword());};




showBooks();
function showBooks(){
var FlightList=listFlightList(getUserAttribute(thisUser,"flightListID"));
var div=document.createElement('div');
div.id="list";
var table=document.createElement('table');
table.id="listTable";
//document.body.appendChild(div);
div.appendChild(table);
table.innerHTML="<tr><th>Flight Number</th><th>Source</th><th>Destination</th><th>Departure</th><th>Arrival</th></tr>";
for(var x =0;x<FlightList.length;x++){
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


}
document.getElementById("reservationsTable").innerHTML=(div.innerHTML);
format("reservationsTable");
}

//;