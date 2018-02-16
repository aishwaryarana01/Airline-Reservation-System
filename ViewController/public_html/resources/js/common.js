////////////////////////////////////////////////////User////////////////////////////////////////////////
function setCurrentUserID(id) {
    localStorage.setItem("currentUser", id);
}

function getCurrentUserID() {
    return localStorage.getItem("currentUser");
}

function addUser(id, name) {
    localStorage.setItem("#¶userID¶#" + id + "#¶userID¶#", "#¶userID¶#" + id + "#¶userID¶#");
    addUserAttribute(id, "name", name);
}

function getUser(id) {

    if (localStorage.getItem("#¶userID¶#" + id + "#¶userID¶#")) {
        return true;
    }
    else {
        return false;
    }

}

function deleteUser(id) {
    localStorage.removeItem("#¶userID¶#" + id + "#¶userID¶#");

}

function addUserAttribute(id, attr, val) {

    if (localStorage.getItem("#¶userID¶#" + id + "#¶userID¶#").search("#¶" + attr + "¶#") ==  - 1)
        localStorage.setItem("#¶userID¶#" + id + "#¶userID¶#", localStorage.getItem("#¶userID¶#" + id + "#¶userID¶#") + "#¶" + attr + "¶#" + val + "#¶" + attr + "¶#");

}

function addUserAttributeNotNull(id, attr, val){
if(val.length>0)addUserAttribute(id, attr, val);
}

function removeUserAttributeNotNull(id, attr,val){
if(val.length>0){removeUserAttribute(id, attr);return true;}
else{return false}
}

function updateUserAttributeNotNull(id, attr, val) {

   if(removeUserAttributeNotNull(id,attr,val))
   addUserAttribute(id, attr, val);
}
function getUserAttribute(id, attr) {
 if (localStorage.getItem("#¶userID¶#" + id + "#¶userID¶#")){
 if (localStorage.getItem("#¶userID¶#" + id + "#¶userID¶#").search("#¶" + attr + "¶#") >  - 1){
        return localStorage.getItem("#¶userID¶#" + id + "#¶userID¶#").split("#¶" + attr + "¶#")[1];
    }else{return "";}
 }
}

function removeUserAttribute(id, attr) {

    if (localStorage.getItem("#¶userID¶#" + id + "#¶userID¶#").search("#¶" + attr + "¶#") >  - 1) {
        var user = localStorage.getItem("#¶userID¶#" + id + "#¶userID¶#") + " ";

        localStorage.setItem("#¶userID¶#" + id + "#¶userID¶#", (user.split("#¶" + attr + "¶#")[0] + user.split("#¶" + attr + "¶#")[2]).trim());
    }
}
function updateUserAttribute(id, attr, val) {

   removeUserAttribute(id,attr);
   addUserAttribute(id, attr, val)
}

////////////////////////////////////////////////////////////////User/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////Flight///////////////////////////////////////////////////////////////////////////
/*function addFlight(id) {
    localStorage.setItem("#¶flightID¶#" + id + "#¶flightID¶#", "#¶flightID¶#" + id + "#¶flightID¶#");

}

function deleteFlight(id) {
    localStorage.removeItem("#¶flightID¶#" + id + "#¶flightID¶#");

}

function addFlightAttribute(id, attr, val) {

    if (localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#").search("#¶" + attr + "¶#") ==  - 1)
        localStorage.setItem("#¶flightID¶#" + id + "#¶flightID¶#", localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#") + "#¶" + attr + "¶#" + val + "#¶" + attr + "¶#");

}

function getFlightAttribute(id, attr) {

    if (localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#").search("#¶" + attr + "¶#") >  - 1)
        return localStorage.getItem("#¶flightID¶#" + id + "#¶flightID¶#").split("#¶" + attr + "¶#")[1];

}

////////////////////////////////////////////////////////////////Flight///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////Flight List///////////////////////////////////////////////////////////////////////////
function addFlightList(id) {
    localStorage.setItem("#¶flightListID¶#" + id + "#¶flightListID¶#", "#¶flightListID¶#" + id + "#¶flightListID¶#");

}

/*function deleteFlightList(id) {
    localStorage.removeItem("#¶flightListID¶#" + id + "#¶flightIDList¶#");

}

function addToFlightList(listID, flightID) {

    if (localStorage.getItem("#¶flightListID¶#" + listID + "#¶flightListID¶#").search("#¶" + flightID + "¶#") ==  - 1)
        localStorage.setItem("#¶flightListID¶#" + listID + "#¶flightListID¶#", localStorage.getItem("#¶flightListID¶#" + listID + "#¶flightListID¶#") + "#¶" + flightID + "¶#");

}

function deleteFromFlightList(listID, flightID) {

    if (localStorage.getItem("#¶flightListID¶#" + listID + "#¶flightListID¶#").search("#¶" + flightID + "¶#") >  - 1) {
        var flight = localStorage.getItem("#¶flightListID¶#" + listID + "#¶flightListID¶#") + " ";

        localStorage.setItem("#¶flightListID¶#" + listID + "#¶flightListIDD¶#", (flight.split("#¶" + flightID + "¶#")[0] + flight.split("#¶" + flightID + "¶#")[1]).trim());
    }

}

function getFlightList(userID) {

    if (getUserAttribute(userID, "flightListID")) {
        return localStorage.getItem("#¶flightListID¶#" + getUserAttribute(userID, "flightListID") + "#¶flightListID¶#");
    }

}

////////////////////////////////////////////////////////////////Flight List///////////////////////////////////////////////////////////////////////////
function bookFlight(userID, flightID) {
    var attr = "flightListID";
    if (localStorage.getItem("#¶userID¶#" + userID + "#¶userID¶#").search("#¶" + attr + "¶#") ==  - 1) {
        addUserAttribute(userID, attr, (new Date()).valueOf());
        addFlightList(getUserAttribute(userID, attr));
    }

    addToFlightList(getUserAttribute(userID, attr), flightID);

}

*/
function addMiles(id,num){
var miles=0;
if(getUserAttribute(id, "miles"))miles=getUserAttribute(id, "miles");
//alert(parseInt(miles) + parseInt(num));
updateUserAttribute(id, "miles",parseInt(miles) + parseInt(num));
return getUserAttribute(id, "miles");
}