document.getElementById("btnSubmit").onclick=function(){showBooks();};
function getFlightAttribute(id, attr) {

    if (localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#").search("#¶" + attr + "¶#") >  - 1)
        return localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#").split("#¶" + attr + "¶#")[1];

}

function clearTable(){
if(document.getElementById("list")){
document.getElementById("list").outerHTML="";
}

}


function showBooks(){
clearTable();
var FlightList=listFlightList("master");
var div=document.createElement('div');
div.id="list";

//var table=document.getElementById('table1');
var table=document.createElement('table');
table.id="listTable";
table.innerHTML="<tr><th>Flight Number</th><th>Source</th><th>Departure Date</th><th>Departure Time</th><th>Destination</th><th>Arrival Date</th><th>Arrival Time</th><th>Status</th></tr>";
//document.body.appendChild(div);
div.appendChild(table);
for(var x =0;x<FlightList.length;x++){
if(searchFilter(FlightList[x])){
var tr=document.createElement('tr');
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



td5.innerHTML="On Time";//getFlightAttribute(FlightList[x],"Seats");
var td6=document.createElement('td');
td6.className="x25";
var selectB=document.createElement('button');
selectB.value='Select';
selectB.innerHTML='Select';
td6.appendChild(selectB);
tr.className="x1u";
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
//tr.appendChild(td6);

}
}
document.body.appendChild(div);

}



function searchFilter(flight){

var src=getFlightAttribute(flight,"source");
var dst=getFlightAttribute(flight,"destination");

var dtime=(getFlightAttribute(flight,"Departure")).split(" ")[0];
var ddate=(getFlightAttribute(flight,"Departure")).split(dtime)[1];
var atime=(getFlightAttribute(flight,"Arrival")).split(" ")[0];
var adate=(getFlightAttribute(flight,"Arrival")).split(adate)[1];


if(document.getElementById('fltNum::content')){
if(document.getElementById('fltNum::content').value){
if(document.getElementById('fltNum::content').value.trim().length>0){
if(document.getElementById('fltNum::content').value.trim()!=flight)return false;
}
}
}

if(document.getElementById('source::content')){
if(document.getElementById('source::content').value){
if(document.getElementById('source::content').value.trim().length>0){
if(document.getElementById('source::content').value.trim()!=src)return false;
}
}
}

if(document.getElementById('dest::content')){
if(document.getElementById('dest::content').value){
if(document.getElementById('dest::content').value.trim().length>0){
if(document.getElementById('dest::content').value.trim()!=dst)return false;
}
}
}

if(document.getElementById('departureDate::content')){
if(document.getElementById('departureDate::content').value){
if(document.getElementById('departureDate::content').value.trim().length>0){
if(Date.parse(document.getElementById('departureDate::content').value)!=Date.parse(ddate))return false;
}
}
}




return true;


}
