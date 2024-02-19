// Define an array to store employee data
let arrEmployees = [
    [111, "Emma Watson", 6633, "emma@gmail.com", "Sales"],
    [123, "Harry Potter", 9658, "harryp@gmail.com", "Developer"],
    [456, "Taylor Swith", 5286, "tay@yahoo.com", "HR"],
    [619, "Will Matt", 7452, "willmatt12@gmail.com", "HR"],
    [8971, "Steve Hans", 7521, "Hansste@gmail.com.com", "Testing"]
];

// Check if there's stored employee data when the page loads
// If found, retrieve it from local storage
if (localStorage.getItem('employees') !== null) {
    arrEmployees = JSON.parse(localStorage.getItem('employees'));
}

// Get DOM elements
let form = document.getElementById('addForm');
let empTable = document.getElementById('empTable');
let empCount = document.getElementById('empCount');

// Build the employees table when the page loads
buildGrid();

// Add event listener for submitting the form to add new employees
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    // Retrieve values from the form
    let empID = parseInt(document.getElementById('id').value);
    let empName = document.getElementById('name').value;
    let empExt = parseInt(document.getElementById('extension').value);
    let empEmail = document.getElementById('email').value;
    let empDept = document.getElementById('department').value;
    // Create a new array for the new employee
    let arrNewEmployee = [empID, empName, empExt, empEmail, empDept];
    // Add the new employee array to the existing array
    arrEmployees.push(arrNewEmployee);
    // Rebuild the grid
    buildGrid();
    // Reset the form
    form.reset();
    // Set focus back to the ID text box
    form.id.focus();
});

// Add event listener to handle deleting employees
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // Confirm deletion
        if (confirm('Are you sure you want to delete this employee?')) {
            // Get the index of the row to delete
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // Remove the employee from the array
            arrEmployees.splice(rowIndex - 1, 1);
            // Rebuild the grid
            buildGrid();
        }
    }
});

// Function to build the employees grid
function buildGrid() {
    // Remove existing rows by removing the entire tbody section
    empTable.lastElementChild.remove();
    // Rebuild the tbody from scratch
    let tbody = document.createElement('tbody');
    // Loop through the array of employees and rebuild the row structure
    for (let employee of arrEmployees) {
        tbody.innerHTML +=
            `
        <tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `;
    }
    // Bind the tbody to the employee table
    empTable.appendChild(tbody);
    // Update employee count
    empCount.value = `(${arrEmployees.length})`;
    // Store the array in local storage
    localStorage.setItem('employees', JSON.stringify(arrEmployees));
}
