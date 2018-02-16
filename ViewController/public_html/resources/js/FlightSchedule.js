    document.getElementById("search").onclick=function(){showFlightTable();};  // Search button click for hiding and showing the table
    
function selectFlight(f){
localStorage.setItem("SelectedFlight",f);
window.location.href="http://localhost:7101/Application2-ViewController-context-root/faces/Booking.jsf";
}

function showFlightTable()  // To hide and show the table
{ 
    document.getElementById('grid').style.display='block';
    displayFlightData();
}

function clearTable(){
var rows = document.getElementById("table1").getElementsByTagName('tr');
for (var x = 0;x < rows.length;x++){

if(rows[x].innerHTML.search('</td>')>-1){
rows[x].parentNode.removeChild(rows[x]);
if(rows[x])
rows[x].outerHTML="";
clearTable();
}


}


}

function displayFlightData()
{
clearTable();
 var table = document.getElementById("table1");

    // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3=row.insertCell(2);
var cell4=row.insertCell(3);
var cell5=row.insertCell(4);
var cell6=row.insertCell(5);
var cell7=row.insertCell(6);
var b=createButton();

document.getElementById('table1').rows[1].cells[0].innerHTML="Flight678"; 
document.getElementById('table1').rows[1].cells[1].innerHTML=getDepartureCity();
document.getElementById('table1').rows[1].cells[2].innerHTML=getDepartureDate();
document.getElementById('table1').rows[1].cells[3].innerHTML=getTime();
document.getElementById('table1').rows[1].cells[4].innerHTML=getArrivalCity();
document.getElementById('table1').rows[1].cells[5].innerHTML="4";
document.getElementById("table1").rows[1].cells[6].appendChild(b);
clearTable();
showBooks();
}    
   
    
    function createButton()
{
    var button = document.createElement('input'); // create a button
    button.setAttribute('type','button'); // set attributes ...
    button.setAttribute('name','javaSubmit');
    button.setAttribute('value','Select');
    return button;
 }
 
 
//SET
function setDepartureCity(dCity){
document.getElementById("departureCity::content").value=dCity;
}
function setArrivalCity(aCity){
document.getElementById("arrivalCity::content").value=aCity;
}
function setDepartureDate(dDate){
document.getElementById("departureDate::content").value=dDate;
}
function setReturnDate(rDate){
document.getElementById("returnDate::content").value=rDate;
}
function setTime(time) {
    document.getElementById("it1::content").value=time;
}

//GET
function getDepartureCity(){
return document.getElementById("departureCity::content").value;
}
function getArrivalCity(){
return document.getElementById("arrivalCity::content").value;
}
function getDepartureDate(){
return document.getElementById("departureDate::content").value;
}
function getReturnDate(){
return document.getElementById("returnDate::content").value;
}
function getTime() {
   return document.getElementById("it1::content").value;
}


function format(id){
var s=document.getElementById(id);
var all=s.getElementsByTagName('*');
for(var a=0;a<all.length;a++){
if(all[a].tagName=='TR'){
all[a].className="x1u";
}else{
if(all[a].tagName!='BUTTON')all[a].className="x25";
}

}




}
//showBooks();
function showBooks(){
var FlightList=listFlightList("master");
var div=document.createElement('div');
div.id="list";

var table=document.getElementById('table1');
//var table=document.createElement('table');
//table.id="listTable";
//document.body.appendChild(div);
//div.appendChild(table);
for(var x =0;x<FlightList.length;x++){
if(searchFilter(FlightList[x])){
var tr=document.createElement('tr');
tr.className="x1u";
var td=document.createElement('td');
td.innerHTML=FlightList[x];
var td1=document.createElement('td');
td1.innerHTML=getFlightAttribute(FlightList[x],"source");
var td2=document.createElement('td');
var timeF=(getFlightAttribute(FlightList[x],"Departure")).split(" ")[0];
var dateF=(getFlightAttribute(FlightList[x],"Departure")).split(timeF)[1];
td2.innerHTML=dateF;
var td3=document.createElement('td');
td3.innerHTML=timeF;
var td4=document.createElement('td');
td4.innerHTML=getFlightAttribute(FlightList[x],"destination");
var td5=document.createElement('td');

var tda=document.createElement('td');
var timeFa=(getFlightAttribute(FlightList[x],"Arrival")).split(" ")[0];
var dateFa=(getFlightAttribute(FlightList[x],"Arrival")).split(timeFa)[1];
tda.innerHTML=dateFa;
var tdb=document.createElement('td');
tdb.innerHTML=timeFa;



td5.innerHTML=getFlightAttribute(FlightList[x],"Seats");
var td6=document.createElement('td');
var selectB=document.createElement('button');
selectB.value='Select';
selectB.innerHTML='Select';
localStorage.setItem("tempB",FlightList[x]);
selectB.onclick=function(){selectFlight(localStorage.getItem("tempB"));};
selectB.type='button';
td6.appendChild(selectB);
table.appendChild(tr);
td.className="x25";
tr.appendChild(td);
td1.className="x25";
tr.appendChild(td1);
td2.className="x25";
tr.appendChild(td2);
td3.className="x25";
tr.appendChild(td3);
td4.className="x25";
tr.appendChild(td4);
tda.className="x25";
tr.appendChild(tda);
tdb.className="x25";
tr.appendChild(tdb);
td5.className="x25";
tr.appendChild(td5);
td6.className="x25";
tr.appendChild(td6);
format('grid');
}
}
//document.getElementById("reservationsTable").innerHTML=(div.innerHTML);
format('grid');
}


function searchFilter(flight){

var src=getFlightAttribute(flight,"source");
var dst=getFlightAttribute(flight,"destination");

var dtime=(getFlightAttribute(flight,"Departure")).split(" ")[0];
var ddate=(getFlightAttribute(flight,"Departure")).split(dtime)[1];
var atime=(getFlightAttribute(flight,"Arrival")).split(" ")[0];
var ardate=(getFlightAttribute(flight,"Arrival")).split(atime)[1];

if(document.getElementById('departureCity::content')){
if(document.getElementById('departureCity::content').value){
if(document.getElementById('departureCity::content').value.trim().length>0){
if(document.getElementById('departureCity::content').value.trim()!=src)return false;
}
}
}

if(document.getElementById('arrivalCity::content')){
if(document.getElementById('arrivalCity::content').value){
if(document.getElementById('arrivalCity::content').value.trim().length>0){
if(document.getElementById('arrivalCity::content').value.trim()!=dst)return false;
}
}
}

if(document.getElementById('departureDate::content')){
if(document.getElementById('departureDate::content').value){
if(document.getElementById('departureDate::content').value.trim().length>0){
if(Date.parse(document.getElementById('departureDate::content').value.trim())!=Date.parse(ddate))return false;
}
}
}

if(document.getElementById('returnDate::content')){
if(document.getElementById('returnDate::content').value){
if(document.getElementById('returnDate::content').value.trim().length>0){
//alert(Date.parse(document.getElementById('returnDate::content').value.trim()));
//alert(Date.parse(ardate));
if(Date.parse(document.getElementById('returnDate::content').value.trim())!=Date.parse(ardate))return false;
}
}
}

if(document.getElementById('it1::content')){
if(document.getElementById('it1::content').value){
if(document.getElementById('it1::content').value.trim().length>0){
if(document.getElementById('it1::content').value.replace(" ","")!=dtime)return false;
}
}
}


return true;


}
