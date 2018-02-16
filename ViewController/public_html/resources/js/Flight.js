
function addFlight(id) {
    localStorage.setItem("#¶flightID¶#" + id + "#¶flightID¶#", "#¶flightID¶#" + id + "#¶flightID¶#");

}

function getFlight(id) {

    if (localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#")) {
        return true;
    }
    else {
        return false;
    }

}

function deleteFlight(id) {
if(localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#"))
    localStorage.removeItem("#¶flightID¶#" + id + "#¶flightID¶#");

}

function addFlightAttribute(id, attr, val) {
if (localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#")){
    if (localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#").search("#¶" + attr + "¶#") ==  - 1)
        localStorage.setItem("#¶flightID¶#" + id + "#¶flightID¶#", localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#") + "#¶" + attr + "¶#" + val + "#¶" + attr + "¶#");
return getFlightAttribute(id, attr);
}
return false;
}

function getFlightAttribute(id, attr) {
if (localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#")){
if (localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#").search("#¶" + attr + "¶#") >  - 1){
        return localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#").split("#¶" + attr + "¶#")[1];
    }else{return false;}
}return false;
}

function removeFlightAttribute(id, attr) {
if (localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#")){
    if (localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#").search("#¶" + attr + "¶#") >  - 1) {
        var flight = localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#") + " ";
        localStorage.setItem("#¶flightID¶#" + id + "#¶flightID¶#", (flight.split("#¶" + attr + "¶#")[0] + flight.split("#¶" + attr + "¶#")[2]).trim());
        return true;
    }
}return false;
}
function updateFlightAttribute(id, attr, val) {

   removeFlightAttribute(id,attr);
   addFlightAttribute(id, attr, val)
}