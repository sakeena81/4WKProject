
function addRecord() {
   var newperson = { 
    "ninumber":document.getElementById("addNI").value, 
   "fullname":document.getElementById("addFullName").value, 
   "phone": document.getElementById("addPhone").value, 
   "address": document.getElementById("addAdd").value,  
   "department":document.getElementById("addDep").value, }
//var newRecords = records; 
records.push(newperson);
   
    show(records);
     }

function deleteRecord(button){
    // var result = records.find(obj => {
    //     return obj.ninumber === button.id
    // })
    var buttonIndex = parseInt(button.dataset.index);
    
    let choice = confirm("do you want to delete this record?");
    if(choice == true){
        for (let index = 0; index < records.length; index++) {
           if  (index == buttonIndex) {
            records.splice(index, 1);
               
           } 
            
        }
 
    show(records);
}

}
function save(button){
    document.getElementById("editperson").setAttribute("hidden","hidden");
}
function editrecord(button) { 
    //unhide the form, 
    //get the record from the button we clicked
    //populate the form, 

    document.getElementById("editperson").removeAttribute("hidden");
var test = button.id;

for (var i = 0; i < records.length; i++){

if (records[i].ninumber = button.id){
    document.getElementById("editNI").value = records[i].ninumber;
    document.getElementById("editName").value =records[i].fullname;
    document.getElementById("editPhone").value =records[i].phone;
    document.getElementById("editAddress").value =records[i].address;
    document.getElementById("editDept").value =records[i].department;
}
}

    // //saveChanges = document.createElement("input");
    // saveChanges.type="button";
    // saveChanges.id = "save";
    // saveChanges.value = "Save Changes";
    // saveChanges.onclick=()=> confirmEdit(id);
    // let newButton = document.getElementById("editButt");
    // newButton.innerHTML = "";
    // newButton.appendChild(saveChanges);

    //document.getElementById("addNI").value = records[id].ninumber;
    //document.getElementById("addFullName").value = records[id].fullname;
    //document.getElementById("addPhone").value = records[id].phone;
    //document.getElementById("addAdd").value = records[id].address;
    //document.getElementById("addDep").value = records[id].department;
    
}

function confirmEdit(id) {
    
    records.push(
    
    {"ninumber": document.getElementById("addNI").value,
    "fullname": document.getElementById("addFullName").value,
    "phone": document.getElementById("addPhone").value,
    "address": document.getElementById("addAdd").value,
    "department": document.getElementById("addDep").value});

    records.splice(id, 1);
    show(records);

    document.getElementById("addNI").style.visibility="hidden";
    document.getElementById("addFullName").style.visibility="hidden";
    document.getElementById("addPhone").style.visibility="hidden";
    document.getElementById("addAdd").style.visibility="hidden";
    document.getElementById("addDep").style.visibility="hidden";
    document.getElementById("save").style.visibility="hidden";
    }

    
//delete record, to find which button I pressed, 
//find that person on the array
//remove person from array
//rebuild table 

