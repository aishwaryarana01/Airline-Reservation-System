function buildSeat(seatID,seatListID,flightID,seatNumber,availability){
if(seatID){
if(!getSeat(seatID)){
addSeat(seat);
getSeatAttribute(seatID, "seatListID",seatListID);
getSeatAttribute(seatID, "flightID",flightID);
getSeatAttribute(seatID, "seatNumber",seatNumber);
getSeatAttribute(seatID, "availability",availability);
}else{return false;}
}else{return false;}


}

function addSeat(id) {
    localStorage.setItem("#¶seatID¶#" + id + "#¶seatID¶#", "#¶seatID¶#" + id + "#¶seatID¶#");

}

function getSeat(id) {

    if (localStorage.getItem("#¶seatID¶#" + id + "#¶seatID¶#")) {
        return true;
    }
    else {
        return false;
    }

}

function deleteSeat(id) {
    localStorage.removeItem("#¶seatID¶#" + id + "#¶seatID¶#");

}

function addSeatAttribute(id, attr, val) {
if (localStorage.getItem("#¶seatID¶#" + id + "#¶seatID¶#")){
    if (localStorage.getItem("#¶seatID¶#" + id + "#¶seatID¶#").search("#¶" + attr + "¶#") ==  - 1)
        localStorage.setItem("#¶seatID¶#" + id + "#¶seatID¶#", localStorage.getItem("#¶seatID¶#" + id + "#¶seatID¶#") + "#¶" + attr + "¶#" + val + "#¶" + attr + "¶#");
return getSeatAttribute(id, attr);
}
return false;
}

function getSeatAttribute(id, attr) {
if (localStorage.getItem("#¶seatID¶#" + id + "#¶seatID¶#")){
if (localStorage.getItem("#¶seatID¶#" + id + "#¶seatID¶#").search("#¶" + attr + "¶#") >  - 1){
        return localStorage.getItem("#¶seatID¶#" + id + "#¶seatID¶#").split("#¶" + attr + "¶#")[1];
    }else{return false;}
}return false;
}

function removeSeatAttribute(id, attr) {
if (localStorage.getItem("#¶seatID¶#" + id + "#¶seatID¶#")){
    if (localStorage.getItem("#¶seatID¶#" + id + "#¶seatID¶#").search("#¶" + attr + "¶#") >  - 1) {
        var seat = localStorage.getItem("#¶seatID¶#" + id + "#¶seatID¶#") + " ";
        localStorage.setItem("#¶seatID¶#" + id + "#¶seatID¶#", (seat.split("#¶" + attr + "¶#")[0] + seat.split("#¶" + attr + "¶#")[2]).trim());
        return true;
    }
}return false;
}
function updateSeatAttribute(id, attr, val) {

   removeSeatAttribute(id,attr);
   addSeatAttribute(id, attr, val)
}