// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
empForm=window.document.getElementById("addForm");
empTable=window.document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count=0;

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
        
    var empID=window.document.getElementById("id").value;
    var empName=window.document.getElementById("name").value;
    var empExt=window.document.getElementById("extension").value;
    var empEmail=window.document.getElementById("email").value;
    var empDept=window.document.getElementById("department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cID=row.insertCell(0);
    let cName=row.insertCell(1);
    let cExt=row.insertCell(2);
    let cEmail=row.insertCell(3);
    let cDept=row.insertCell(4);
    let cDelete=row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let tID = document.createTextNode(empID);
    cID.appendChild(tID);

    let tName = document.createTextNode(empName);
    cName.appendChild(tName);
 
    let tExt = document.createTextNode(empExt);
    cExt.appendChild(tExt);

    let tEmail = document.createTextNode(empEmail);
    cEmail.appendChild(tEmail);

    let tDept = document.createTextNode(empDept);
    cDept.appendChild(tDept);

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm del";
    let tDel = document.createTextNode("X");
    deleteButton.appendChild(tDel);
    cDelete.appendChild(deleteButton);

    // RESET THE FORM
    empForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    window.document.getElementById("id").focus();

    count+=1;
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    window.document.getElementById("empCount").innerText="("+count+")";

});

// DELETE EMPLOYEE
empTable.addEventListener("click",(event)=>{
    
        if(confirm("Do you want to delete this row?")) {
            empTable.deleteRow(event.target.parentNode.parentNode.rowIndex);
            window.document.getElementById("empCount").innerText = "(" + --count + ")";
            window.document.getElementById('id').focus();
        };
    

});