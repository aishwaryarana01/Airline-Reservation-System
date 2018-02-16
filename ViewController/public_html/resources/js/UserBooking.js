function buildUserBooking(userBookingID,ffn,seatListID,flightID){
if(userBookingID){
if(!getUserBooking(userBookingID)){
addUserBooking(userBooking);
getUserBookingAttribute(userBookingID, "ffn",ffn);
getUserBookingAttribute(userBookingID, "seatListID",seatListID);
getUserBookingAttribute(userBookingID, "flightID",flightID);
}else{return false;}
}else{return false;}


}

function addUserBooking(id) {
    localStorage.setItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#", "#¶userBookingID¶#" + id + "#¶userBookingID¶#");

}

function getUserBooking(id) {

    if (localStorage.getItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#")) {
        return true;
    }
    else {
        return false;
    }

}

function deleteUserBooking(id) {
    localStorage.removeItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#");

}

function addUserBookingAttribute(id, attr, val) {
if (localStorage.getItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#")){
    if (localStorage.getItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#").search("#¶" + attr + "¶#") ==  - 1)
        localStorage.setItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#", localStorage.getItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#") + "#¶" + attr + "¶#" + val + "#¶" + attr + "¶#");
return getUserBookingAttribute(id, attr);
}
return false;
}

function getUserBookingAttribute(id, attr) {
if (localStorage.getItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#")){
if (localStorage.getItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#").search("#¶" + attr + "¶#") >  - 1){
        return localStorage.getItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#").split("#¶" + attr + "¶#")[1];
    }else{return false;}
}return false;
}

function removeUserBookingAttribute(id, attr) {
if (localStorage.getItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#")){
    if (localStorage.getItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#").search("#¶" + attr + "¶#") >  - 1) {
        var userBooking = localStorage.getItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#") + " ";
        localStorage.setItem("#¶userBookingID¶#" + id + "#¶userBookingID¶#", (userBooking.split("#¶" + attr + "¶#")[0] + userBooking.split("#¶" + attr + "¶#")[2]).trim());
        return true;
    }
}return false;
}
function updateUserBookingAttribute(id, attr, val) {

   removeUserBookingAttribute(id,attr);
   addUserBookingAttribute(id, attr, val)
}