
function addPay(id) {
    localStorage.setItem("#¶payID¶#" + id + "#¶payID¶#", "#¶payID¶#" + id + "#¶payID¶#");

}

function getPay(id) {

    if (localStorage.getItem("#¶payID¶#" + id + "#¶payID¶#")) {
        return true;
    }
    else {
        return false;
    }

}

function deletePay(id) {
    localStorage.removeItem("#¶payID¶#" + id + "#¶payID¶#");

}

function addPayAttribute(id, attr, val) {
if (localStorage.getItem("#¶payID¶#" + id + "#¶payID¶#")){
    if (localStorage.getItem("#¶payID¶#" + id + "#¶payID¶#").search("#¶" + attr + "¶#") ==  - 1)
        localStorage.setItem("#¶payID¶#" + id + "#¶payID¶#", localStorage.getItem("#¶payID¶#" + id + "#¶payID¶#") + "#¶" + attr + "¶#" + val + "#¶" + attr + "¶#");
return getPayAttribute(id, attr);
}
return false;
}

function getPayAttribute(id, attr) {
if (localStorage.getItem("#¶payID¶#" + id + "#¶payID¶#")){
if (localStorage.getItem("#¶payID¶#" + id + "#¶payID¶#").search("#¶" + attr + "¶#") >  - 1){
        return localStorage.getItem("#¶payID¶#" + id + "#¶payID¶#").split("#¶" + attr + "¶#")[1];
    }else{return false;}
}return false;
}

function removePayAttribute(id, attr) {
if (localStorage.getItem("#¶payID¶#" + id + "#¶payID¶#")){
    if (localStorage.getItem("#¶payID¶#" + id + "#¶payID¶#").search("#¶" + attr + "¶#") >  - 1) {
        var pay = localStorage.getItem("#¶payID¶#" + id + "#¶payID¶#") + " ";
        localStorage.setItem("#¶payID¶#" + id + "#¶payID¶#", (pay.split("#¶" + attr + "¶#")[0] + pay.split("#¶" + attr + "¶#")[2]).trim());
        return true;
    }
}return false;
}
function updatePayAttribute(id, attr, val) {

   removePayAttribute(id,attr);
   addPayAttribute(id, attr, val)
}