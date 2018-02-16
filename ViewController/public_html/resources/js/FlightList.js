

function createFlightList(flightListID,userID){
if(getUser(userID)){
if(!localStorage.getItem("#¶flightListID¶#"+flightListID+"#¶flightListID¶#")){
localStorage.setItem("#¶flightListID¶#"+flightListID+"#¶flightListID¶#","#¶flightListID¶#"+flightListID+"#¶flightListID¶#");
addFlightListAttribute(flightListID,"length","0");
addFlightListAttribute(flightListID,"userID",userID);
addUserAttribute(userID,"flightListID",flightListID);
return true;
}else{return false;}
}else{return false;}
}

function createMasterFlightList(){
if(!localStorage.getItem("#¶flightListID¶#master#¶flightListID¶#")){    
localStorage.setItem("#¶flightListID¶#master#¶flightListID¶#","#¶flightListID¶#master#¶flightListID¶#");
addFlightListAttribute("master","length","0");
}
}

function deleteFlightList(flightListID,userID){

if(localStorage.getItem("#¶flightListID¶#"+flightListID+"#¶flightListID¶#")){
localStorage.removeItem("#¶flightListID¶#"+flightListID+"#¶flightListID¶#");
if(getUser(userID)){
if(getUserAttribute(userID,"flightListID")){
removeUserAttribute(userID,"flightListID");
}
}
return true;
}else{return false;}

}

function addFlightListAttribute(id, attr, val) {
if (localStorage.getItem("#¶flightListID¶#" + id + "#¶flightListID¶#")){
    if (localStorage.getItem("#¶flightListID¶#" + id + "#¶flightListID¶#").search("#¶" + attr + "¶#") ==  - 1){
        localStorage.setItem("#¶flightListID¶#" + id + "#¶flightListID¶#", localStorage.getItem("#¶flightListID¶#" + id + "#¶flightListID¶#") + "#¶" + attr + "¶#" + val + "#¶" + attr + "¶#");
    }
}
}

function getFlightListAttribute(id, attr) {
if (localStorage.getItem("#¶flightListID¶#" + id + "#¶flightListID¶#")){
    if (localStorage.getItem("#¶flightListID¶#" + id + "#¶flightListID¶#").search("#¶" + attr + "¶#") >  - 1){
        return localStorage.getItem("#¶flightListID¶#" + id + "#¶flightListID¶#").split("#¶" + attr + "¶#")[1];
    }else{return "";}
}else{return false}
}

function removeFlightListAttribute(id, attr) {

    if (localStorage.getItem("#¶flightListID¶#" + id + "#¶flightListID¶#").search("#¶" + attr + "¶#") >  - 1) {
        var flightList = localStorage.getItem("#¶flightListID¶#" + id + "#¶flightListID¶#") + " ";

        localStorage.setItem("#¶flightListID¶#" + id + "#¶flightListID¶#", (flightList.split("#¶" + attr + "¶#")[0] + flightList.split("#¶" + attr + "¶#")[2]).trim());
    }
}
function updateFlightListAttribute(id, attr, val) {

   removeFlightListAttribute(id,attr);
   addFlightListAttribute(id, attr, val)
}

function addFlightToList(flightListID,userID,flight){
if(localStorage.getItem("#¶flightListID¶#"+flightListID+"#¶flightListID¶#")){
var length=(getMaxFlightEntry(flightListID)+1)||getFlightListAttribute(flightListID,"length");
addFlightListAttribute(flightListID, "entry"+length, userID+","+flight);
incrementFlightListLength(flightListID);
if(!(flightListID=="master"))addFlightToList("master", userID,flight);

return getFlightListAttribute(flightListID,"entry"+length);
}else{return false;}

}

function getMaxFlightEntry(flightListID){

var list=localStorage.getItem("#¶flightListID¶#" + flightListID + "#¶flightListID¶#");
if(list.split("entry")){
var entries=list.split("entry");
var maxEntry=entries[entries.length-1].charAt(0);
return parseInt(maxEntry);
}return false;
}

function removeFlightFromList(flightListID,userID,flight){
if(localStorage.getItem("#¶flightListID¶#"+flightListID+"#¶flightListID¶#")){
var length=getFlightListAttribute(flightListID,"length");
for(var l=0;l<length;l++){
if(getFlightListAttribute(flightListID, "entry"+l)){
var entry=getFlightListAttribute(flightListID, "entry"+l);
if (entry.length>0){
if(entry==(userID+","+flight)){
removeFlightListAttribute(flightListID, "entry"+l);
decrementFlightListLength(flightListID);
if(!flightListID=="master")removeFlightFromList("master",userID,flight);

return true;
}
}else{length++;}
}
return false;
}
}else{return false;}
}

function incrementFlightListLength(flightListID){
if(localStorage.getItem("#¶flightListID¶#"+flightListID+"#¶flightListID¶#")){
var length=getFlightListAttribute(flightListID,"length");
length=parseInt(length)+1;
updateFlightListAttribute(flightListID,"length", length);
return getFlightListAttribute(flightListID,"length");
}else{return -1;}
}



function decrementFlightListLength(flightListID){
if(localStorage.getItem("#¶flightListID¶#"+flightListID+"#¶flightListID¶#")){
var length=getFlightListAttribute(flightListID,"length");
if(length<1){return -1}
length=parseInt(length)-1;
updateFlightListAttribute(flightListID,"length", length);
return getFlightListAttribute(flightListID,"length");
}else{return -1;}

}


function listFlightList(flightListID){
if(localStorage.getItem("#¶flightListID¶#"+flightListID+"#¶flightListID¶#")){
var length=(getMaxFlightEntry(flightListID)+1)||getFlightListAttribute(flightListID,"length");
var rawList="";
for(var l=0;l<length;l++){
var entry=getFlightListAttribute(flightListID, "entry"+l);
var nextEntry=entry.split(",")[1];
if(nextEntry.length>0)
rawList = rawList + nextEntry+",";
}
rawList=rawList.substring(0,rawList.length-1);
//rawList = rawList + getFlightListAttribute(flightListID, "entry"+length).split(",")[1];
return rawList.split(",");
}else{return false;}
}

