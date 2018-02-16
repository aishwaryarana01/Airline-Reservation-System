

function createUserList(userListID,userID){
if(getUser(userID)){
if(!localStorage.getItem("#¶userListID¶#"+userListID+"#¶userListID¶#")){
localStorage.setItem("#¶userListID¶#"+userListID+"#¶userListID¶#","#¶userListID¶#"+userListID+"#¶userListID¶#");
addUserListAttribute(userListID,"length","0");
addUserListAttribute(userListID,"userID",userID);
addUserAttribute(userID,"userListID",userListID);
return true;
}else{return false;}
}else{return false;}
}

function createMasterUserList(){
if(!localStorage.getItem("#¶userListID¶#master#¶userListID¶#")){    
localStorage.setItem("#¶userListID¶#master#¶userListID¶#","#¶userListID¶#master#¶userListID¶#");
addUserListAttribute("master","length","0");
}
}

function deleteUserList(userListID,userID){

if(localStorage.getItem("#¶userListID¶#"+userListID+"#¶userListID¶#")){
localStorage.removeItem("#¶userListID¶#"+userListID+"#¶userListID¶#");
if(getUser(userID)){removeUserAttribute(userID,"userListID");}
return true;
}else{return false;}

}

function addUserListAttribute(id, attr, val) {
if (localStorage.getItem("#¶userListID¶#" + id + "#¶userListID¶#")){
    if (localStorage.getItem("#¶userListID¶#" + id + "#¶userListID¶#").search("#¶" + attr + "¶#") ==  - 1){
        localStorage.setItem("#¶userListID¶#" + id + "#¶userListID¶#", localStorage.getItem("#¶userListID¶#" + id + "#¶userListID¶#") + "#¶" + attr + "¶#" + val + "#¶" + attr + "¶#");
    }
}
}

function getUserListAttribute(id, attr) {
if (localStorage.getItem("#¶userListID¶#" + id + "#¶userListID¶#")){
    if (localStorage.getItem("#¶userListID¶#" + id + "#¶userListID¶#").search("#¶" + attr + "¶#") >  - 1){
        return localStorage.getItem("#¶userListID¶#" + id + "#¶userListID¶#").split("#¶" + attr + "¶#")[1];
    }else{return "";}
}else{return false}
}

function removeUserListAttribute(id, attr) {

    if (localStorage.getItem("#¶userListID¶#" + id + "#¶userListID¶#").search("#¶" + attr + "¶#") >  - 1) {
        var userList = localStorage.getItem("#¶userListID¶#" + id + "#¶userListID¶#") + " ";

        localStorage.setItem("#¶userListID¶#" + id + "#¶userListID¶#", (userList.split("#¶" + attr + "¶#")[0] + userList.split("#¶" + attr + "¶#")[2]).trim());
    }
}
function updateUserListAttribute(id, attr, val) {

   removeUserListAttribute(id,attr);
   addUserListAttribute(id, attr, val)
}
function addUserToList(userListID,userID,user){
if(localStorage.getItem("#¶userListID¶#"+userListID+"#¶userListID¶#")){
var length=(getMaxUserEntry(userListID)+1)||getUserListAttribute(userListID,"length");
addUserListAttribute(userListID, "entry"+length, userID+","+user);
incrementUserListLength(userListID);
addUserListAttribute("master", getMaxUserEntry("master")+1, userID+","+user);
incrementUserListLength("master");
return getUserListAttribute(userListID,"entry"+length);
}else{return false;}

}

function getMaxUserEntry(userListID){
var list=localStorage.getItem("#¶userListID¶#" + userListID + "#¶userListID¶#");
if(list.split("entry")){
var entries=list.split("entry");
var maxEntry=entries[entries.length-1].charAt(0);
return parseInt(maxEntry);
}return -1;
}

function removeUserFromList(userListID,userID,user){
if(localStorage.getItem("#¶userListID¶#"+userListID+"#¶userListID¶#")){
var length=getUserListAttribute(userListID,"length");
for(var l=0;l<length;l++){
if(getUserListAttribute(userListID, "entry"+l)){
var entry=getUserListAttribute(userListID, "entry"+l);
if (entry.length>0){
if(entry==(userID+","+user)){
removeUserListAttribute(userListID, "entry"+l);
decrementUserListLength(userListID);
removeUserListAttribute("master", getUserListAttribute("master","length"));
decrementUserListLength("master");
return true;
}
}else{length++;}
}
return false;
}
}else{return false;}
}

function incrementUserListLength(userListID){
if(localStorage.getItem("#¶userListID¶#"+userListID+"#¶userListID¶#")){
var length=getUserListAttribute(userListID,"length");
length=parseInt(length)+1;
updateUserListAttribute(userListID,"length", length);
return getUserListAttribute(userListID,"length");
}else{return -1;}
}



function decrementUserListLength(userListID){
if(localStorage.getItem("#¶userListID¶#"+userListID+"#¶userListID¶#")){
var length=getUserListAttribute(userListID,"length");
if(length<1){return -1}
length=parseInt(length)-1;
updateUserListAttribute(userListID,"length", length);
return getUserListAttribute(userListID,"length");
}else{return -1;}

}


function listUserUserList(userListID){
if(localStorage.getItem("#¶userListID¶#"+userListID+"#¶userListID¶#")){
var length=getUserListAttribute(userListID,"length");
var rawList="";
for(var l=0;l<length-1;l++){
var entry=getUserListAttribute(userListID, "entry"+l);
rawList = rawList + entry.split(",")[1]+",";
}
rawList = rawList + getUserListAttribute(userListID, "entry"+length).split(",")[1];
return rawList.split(",");
}else{return false;}
}

