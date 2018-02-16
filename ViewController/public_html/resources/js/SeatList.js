

function createSeatList(seatListID,userID){
if(getUser(userID)){
if(!localStorage.getItem("#¶seatListID¶#"+seatListID+"#¶seatListID¶#")){
localStorage.setItem("#¶seatListID¶#"+seatListID+"#¶seatListID¶#","#¶seatListID¶#"+seatListID+"#¶seatListID¶#");
addSeatListAttribute(seatListID,"length","0");
addSeatListAttribute(seatListID,"userID",userID);
addUserAttribute(userID,"seatListID",seatListID);
return true;
}else{return false;}
}else{return false;}
}

function createMasterSeatList(){
if(!localStorage.getItem("#¶seatListID¶#master#¶seatListID¶#")){    
localStorage.setItem("#¶seatListID¶#master#¶seatListID¶#","#¶seatListID¶#master#¶seatListID¶#");
addSeatListAttribute("master","length","0");
}
}

function deleteSeatList(seatListID,userID){

if(localStorage.getItem("#¶seatListID¶#"+seatListID+"#¶seatListID¶#")){
localStorage.removeItem("#¶seatListID¶#"+seatListID+"#¶seatListID¶#");
if(getUser(userID)){removeUserAttribute(userID,"seatListID");}
return true;
}else{return false;}

}

function addSeatListAttribute(id, attr, val) {
if (localStorage.getItem("#¶seatListID¶#" + id + "#¶seatListID¶#")){
    if (localStorage.getItem("#¶seatListID¶#" + id + "#¶seatListID¶#").search("#¶" + attr + "¶#") ==  - 1){
        localStorage.setItem("#¶seatListID¶#" + id + "#¶seatListID¶#", localStorage.getItem("#¶seatListID¶#" + id + "#¶seatListID¶#") + "#¶" + attr + "¶#" + val + "#¶" + attr + "¶#");
    }
}
}

function getSeatListAttribute(id, attr) {
if (localStorage.getItem("#¶seatListID¶#" + id + "#¶seatListID¶#")){
    if (localStorage.getItem("#¶seatListID¶#" + id + "#¶seatListID¶#").search("#¶" + attr + "¶#") >  - 1){
        return localStorage.getItem("#¶seatListID¶#" + id + "#¶seatListID¶#").split("#¶" + attr + "¶#")[1];
    }else{return "";}
}else{return false}
}

function removeSeatListAttribute(id, attr) {

    if (localStorage.getItem("#¶seatListID¶#" + id + "#¶seatListID¶#").search("#¶" + attr + "¶#") >  - 1) {
        var seatList = localStorage.getItem("#¶seatListID¶#" + id + "#¶seatListID¶#") + " ";

        localStorage.setItem("#¶seatListID¶#" + id + "#¶seatListID¶#", (seatList.split("#¶" + attr + "¶#")[0] + seatList.split("#¶" + attr + "¶#")[2]).trim());
    }
}
function updateSeatListAttribute(id, attr, val) {

   removeSeatListAttribute(id,attr);
   addSeatListAttribute(id, attr, val)
}
function addSeatToList(seatListID,userID,seat){
if(localStorage.getItem("#¶seatListID¶#"+seatListID+"#¶seatListID¶#")){
var length=(getMaxSeatEntry(seatListID)+1)||getSeatListAttribute(seatListID,"length");
addSeatListAttribute(seatListID, "entry"+length, userID+","+seat);
incrementSeatListLength(seatListID);
addSeatListAttribute("master", getMaxSeatEntry("master")+1, userID+","+seat);
incrementSeatListLength("master");
return getSeatListAttribute(seatListID,"entry"+length);
}else{return false;}

}

function getMaxSeatEntry(seatListID){
var list=localStorage.getItem("#¶seatListID¶#" + seatListID + "#¶seatListID¶#");
if(list.split("entry")){
var entries=list.split("entry");
var maxEntry=entries[entries.length-1].charAt(0);
return parseInt(maxEntry);
}return -1;
}

function removeSeatFromList(seatListID,userID,seat){
if(localStorage.getItem("#¶seatListID¶#"+seatListID+"#¶seatListID¶#")){
var length=getSeatListAttribute(seatListID,"length");
for(var l=0;l<length;l++){
if(getSeatListAttribute(seatListID, "entry"+l)){
var entry=getSeatListAttribute(seatListID, "entry"+l);
if (entry.length>0){
if(entry==(userID+","+seat)){
removeSeatListAttribute(seatListID, "entry"+l);
decrementSeatListLength(seatListID);
removeSeatListAttribute("master", getSeatListAttribute("master","length"));
decrementSeatListLength("master");
return true;
}
}else{length++;}
}
return false;
}
}else{return false;}
}

function incrementSeatListLength(seatListID){
if(localStorage.getItem("#¶seatListID¶#"+seatListID+"#¶seatListID¶#")){
var length=getSeatListAttribute(seatListID,"length");
length=parseInt(length)+1;
updateSeatListAttribute(seatListID,"length", length);
return getSeatListAttribute(seatListID,"length");
}else{return -1;}
}



function decrementSeatListLength(seatListID){
if(localStorage.getItem("#¶seatListID¶#"+seatListID+"#¶seatListID¶#")){
var length=getSeatListAttribute(seatListID,"length");
if(length<1){return -1}
length=parseInt(length)-1;
updateSeatListAttribute(seatListID,"length", length);
return getSeatListAttribute(seatListID,"length");
}else{return -1;}

}


function listUserSeatList(seatListID){
if(localStorage.getItem("#¶seatListID¶#"+seatListID+"#¶seatListID¶#")){
var length=getSeatListAttribute(seatListID,"length");
var rawList="";
for(var l=0;l<length-1;l++){
var entry=getSeatListAttribute(seatListID, "entry"+l);
rawList = rawList + entry.split(",")[1]+",";
}
rawList = rawList + getSeatListAttribute(seatListID, "entry"+length).split(",")[1];
return rawList.split(",");
}else{return false;}
}

