

function createBookingList(bookingListID,userID){
if(getUser(userID)){
if(!localStorage.getItem("#¶bookingListID¶#"+bookingListID+"#¶bookingListID¶#")){
localStorage.setItem("#¶bookingListID¶#"+bookingListID+"#¶bookingListID¶#","#¶bookingListID¶#"+bookingListID+"#¶bookingListID¶#");
addBookingListAttribute(bookingListID,"length","0");
addBookingListAttribute(bookingListID,"userID",userID);
addUserAttribute(userID,"bookingListID",bookingListID);
return true;
}else{return false;}
}else{return false;}
}

function createMasterBookingList(){
if(!localStorage.getItem("#¶bookingListID¶#master#¶bookingListID¶#")){    
localStorage.getItem("#¶bookingListID¶#master#¶bookingListID¶#","#¶bookingListID¶#master#¶bookingListID¶#");
addBookingListAttribute("master","length","0");
}
}

function deleteBookingList(bookingListID,userID){

if(localStorage.getItem("#¶bookingListID¶#"+bookingListID+"#¶bookingListID¶#")){
localStorage.removeItem("#¶bookingListID¶#"+bookingListID+"#¶bookingListID¶#");
if(getUser(userID)){removeUserAttribute(userID,"bookingListID");}
return true;
}else{return false;}

}

function addBookingListAttribute(id, attr, val) {
if (localStorage.getItem("#¶bookingListID¶#" + id + "#¶bookingListID¶#")){
    if (localStorage.getItem("#¶bookingListID¶#" + id + "#¶bookingListID¶#").search("#¶" + attr + "¶#") ==  - 1){
        localStorage.setItem("#¶bookingListID¶#" + id + "#¶bookingListID¶#", localStorage.getItem("#¶bookingListID¶#" + id + "#¶bookingListID¶#") + "#¶" + attr + "¶#" + val + "#¶" + attr + "¶#");
    }
}
}

function getBookingListAttribute(id, attr) {
if (localStorage.getItem("#¶bookingListID¶#" + id + "#¶bookingListID¶#")){
    if (localStorage.getItem("#¶bookingListID¶#" + id + "#¶bookingListID¶#").search("#¶" + attr + "¶#") >  - 1){
        return localStorage.getItem("#¶bookingListID¶#" + id + "#¶bookingListID¶#").split("#¶" + attr + "¶#")[1];
    }else{return "";}
}else{return false}
}

function removeBookingListAttribute(id, attr) {

    if (localStorage.getItem("#¶bookingListID¶#" + id + "#¶bookingListID¶#").search("#¶" + attr + "¶#") >  - 1) {
        var bookingList = localStorage.getItem("#¶bookingListID¶#" + id + "#¶bookingListID¶#") + " ";

        localStorage.setItem("#¶bookingListID¶#" + id + "#¶bookingListID¶#", (bookingList.split("#¶" + attr + "¶#")[0] + bookingList.split("#¶" + attr + "¶#")[2]).trim());
    }
}
function updateBookingListAttribute(id, attr, val) {

   removeBookingListAttribute(id,attr);
   addBookingListAttribute(id, attr, val)
}
function addUserBookingToList(bookingListID,userID,userBookingID){
if(localStorage.getItem("#¶bookingListID¶#"+bookingListID+"#¶bookingListID¶#")){
var length=getMaxEntry(bookingListID)+1;
addBookingListAttribute(bookingListID, "entry"+length, userID+","+userBookingID);
incrementBookingListLength(bookingListID);
addBookingListAttribute("master", getMaxEntry("master")+1, userID+","+userBookingID);
incrementBookingListLength("master");
return getBookingListAttribute(bookingListID,"entry"+length);
}else{return false;}

}

function getMaxEntry(bookingListID){
var list=localStorage.getItem("#¶bookingListID¶#" + bookingListID + "#¶bookingListID¶#");
var entries=list.split("entry");
var maxEntry=entries[entries.length-1].charAt(0);
return parseInt(maxEntry);
}

function removeUserBookingFromList(bookingListID,userID,userBookingID){
if(localStorage.getItem("#¶bookingListID¶#"+bookingListID+"#¶bookingListID¶#")){
var length=getBookingListAttribute(bookingListID,"length");
for(var l=0;l<length;l++){
if(getBookingListAttribute(bookingListID, "entry"+l)){
var entry=getBookingListAttribute(bookingListID, "entry"+l);
if (entry.length>0){
if(entry==(userID+","+userBookingID)){
removeBookingListAttribute(bookingListID, "entry"+l);
decrementBookingListLength(bookingListID);
removeBookingListAttribute("master", getBookingListAttribute("master","length"));
decrementBookingListLength("master");
return true;
}
}else{length++;}
}
return false;
}
}else{return false;}
}

function incrementBookingListLength(bookingListID){
if(localStorage.getItem("#¶bookingListID¶#"+bookingListID+"#¶bookingListID¶#")){
var length=getBookingListAttribute(bookingListID,"length");
length=parseInt(length)+1;
updateBookingListAttribute(bookingListID,"length", length);
return getBookingListAttribute(bookingListID,"length");
}else{return -1;}
}



function decrementBookingListLength(bookingListID){
if(localStorage.getItem("#¶bookingListID¶#"+bookingListID+"#¶bookingListID¶#")){
var length=getBookingListAttribute(bookingListID,"length");
if(length<1){return -1}
length=parseInt(length)-1;
updateBookingListAttribute(bookingListID,"length", length);
return getBookingListAttribute(bookingListID,"length");
}else{return -1;}

}


function listUserBookingList(bookingListID){
if(localStorage.getItem("#¶bookingListID¶#"+bookingListID+"#¶bookingListID¶#")){
var length=getBookingListAttribute(bookingListID,"length");
var rawList="";
for(var l=0;l<length-1;l++){
var entry=getBookingListAttribute(bookingListID, "entry"+l);
rawList = rawList + entry.split(",")[1]+",";
}
rawList = rawList + getBookingListAttribute(bookingListID, "entry"+length).split(",")[1];
return rawList.split(",");
}else{return false;}
}

