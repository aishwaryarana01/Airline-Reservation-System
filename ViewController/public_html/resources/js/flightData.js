
if(!getUser()){
localStorage.setItem("loggedIN","false");
deleteBookingList("PatrickBookingList","Patrick");
deleteBookingList("master","Patrick");
deleteFlightList("PatrickFlightList","Patrick");
deleteFlightList("master","Patrick");
deleteFlight("FlightBanana","Patrick");
deleteFlight("FlightTaco","Patrick");
deleteFlight("Flight111111","Patrick");
deleteFlight("Flight222222","Patrick");
deleteFlight("Flight","Patrick");
deleteUser("Patrick");


createMasterBookingList();
createMasterFlightList();
addUser("Patrick","Pat","rick");
addUserAttribute("Patrick","password","123456");
createBookingList("PatrickBookingList","Patrick");
addUserBookingToList("PatrickBookingList","Patrick","PatrickBooking");
addUserBookingToList("PatrickBookingList","Patrick","Banana");
addUserBookingToList("PatrickBookingList","Patrick","Tacos");
listUserBookingList("PatrickBookingList");

createFlightList("PatrickFlightList","Patrick");

addFlight("Flight111111");
addFlightAttribute("Flight111111","source","Austin");
addFlightAttribute("Flight111111","destination","Dallas");
addFlightAttribute("Flight111111","Departure","10:00AM March 10, 2017");
addFlightAttribute("Flight111111","Arrival","12:00PM March 10, 2017");
addFlightAttribute("Flight111111","Seats","55");
addFlightToList("PatrickFlightList","Patrick","Flight111111");

addFlight("Flight222222");
addFlightAttribute("Flight222222","source","Austin");
addFlightAttribute("Flight222222","destination","San Fransico");
addFlightAttribute("Flight222222","Departure","10:00AM March 10, 2017");
addFlightAttribute("Flight222222","Arrival","12:00PM March 10, 2017");
addFlightAttribute("Flight222222","Seats","55");
addFlightToList("PatrickFlightList","Patrick","Flight222222");

addFlight("Flight333333");
addFlightAttribute("Flight333333","source","Austin");
addFlightAttribute("Flight333333","destination","New York");
addFlightAttribute("Flight333333","Departure","10:00AM March 25, 2017");
addFlightAttribute("Flight333333","Arrival","12:00PM March 25, 2017");
addFlightAttribute("Flight333333","Seats","55");
addFlightToList("PatrickFlightList","Patrick","Flight333333");


var FlightList=listFlightList("PatrickFlightList");
var div=document.createElement('div');
div.id="list";
var table=document.createElement('table');
table.id="listTable";
//document.body.appendChild(div);
div.appendChild(table);
table.innerHTML="<tr><td>Flight Number</td><td>Source</td><td>Destination</td><td>Departure</td><td>Arrival</td><td>Seats Available</td></tr>";
for(var x =0;x<FlightList.length;x++){
if("Dallas"==getFlightAttribute(listFlightList("master")[x],"destination")){
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

}
//document.write(div.innerHTML);



//getFlightAttribute(listFlightList("PatrickFlightList")[0],"source");