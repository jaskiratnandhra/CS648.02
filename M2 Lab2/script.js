// window.addEventListener("load",()=>{  
//     window.document.getElementById("empForm").addEventListener("submit", (event)=> {  
//         event.preventDefault();
//         window.console.log("Employee ID:" + window.document.getElementById("id").value);     
//         window.console.log("Name:" + window.document.getElementById("name").value);
//         window.console.log("Extension:" + window.document.getElementById("ext").value);
//         window.console.log("Email:" + window.document.getElementById("email").value);
//         window.console.log("Department:" + window.document.getElementById("department").value);     
//     });
    
//   });

  document.addEventListener("DOMContentLoaded", () => {
    const empForm = document.getElementById("empForm");

    empForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const getValueById = (id) => document.getElementById(id).value;
        
        console.log("Employee ID: " + getValueById("id"));
        console.log("Name: " + getValueById("name"));
        console.log("Extension: " + getValueById("ext"));
        console.log("Email: " + getValueById("email"));
        console.log("Department: " + getValueById("department"));
    });
});
