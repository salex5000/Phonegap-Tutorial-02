function createContact(){
    window.alert("clicked");
    
    var fistName = "";
    var lastName = "";
    firstName = document.getElementById("first");
    lastName = document.getElementById("last");
    var fullName = firstName + " " + lastName;
    var noteText = "";
    noteText = document.getElementById("note").value;
    
    debugger;
    var contact = navigator.contacts.create({"displayName":fullName});
    
    contact.note = note;
    contact.save();
    
}

function onDeviceReady(){
    //Initialization tasks go here
   // document.getElementById("btnCreate").addEventListener("click",createContact(), false);
    var createBtn = document.getElementById("btnCreate");
    createBtn.onclick = function(){
        window.alert("clicked");
        
        var fistName = "";
        var lastName = "";
        firstName = document.getElementById("first");
        lastName = document.getElementById("last");
        var fullName = firstName + " " + lastName;
        var noteText = "";
        noteText = document.getElementById("note").value;
        
        //debugger;
        var contact = navigator.contacts.create({"displayName":fullName});
        
        contact.note = note;
        contact.save();
        
    };
}

window.onload=function(){
    document.addEventListerner("deviceready", onDeviceReady(), false);
}