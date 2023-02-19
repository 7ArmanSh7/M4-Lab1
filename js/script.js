
window.addEventListener("load", ()=>{
	var EmployeeID, name, extension, email, department;
	var employeeCount = 0;
	const $ = (id)=>{
		"use strict";
		return window.document.getElementById(id);
	}

	const $$ = (className)=>{
		"use strict";
		return window.document.getElementsByClassName(className);
	}
	
	var employeeCountTag = $("empCount");
	// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
	const forma = $("addForm");
	const employeeTable = $("employees");	
	
	const addEmployees = ()=>{
		// GET THE VALUES FROM THE TEXT BOXES
		// In the other words saving the element
		// getting their values when adding to the table
		EmployeeID = $("id");
		name = $("name");
		extension = $("extension");
		email = $("email");
		department = $("department");
		viewEmployees();
		// RESET THE FORM
		forma.reset();
		// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
		employeeCount++;
		// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
		employeeCountTag.innerHTML = "Total: "+employeeCount;
	    // SET FOCUS BACK TO THE ID TEXT BOX
		EmployeeID.focus();
	}
	
	const viewEmployees = ()=>{
		// INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
		let row = employeeTable.insertRow(-1);
		// INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
		let cellID = row.insertCell(0);
		// CREATE THE DELETE BUTTON
		var deleteButton= document.createElement('button');
		deleteButton.innerText= '✗';
		deleteButton.classList.add("btn");
		deleteButton.classList.add("btn-danger");
		const deleteBtn = document.body.appendChild(deleteButton);
		let newText = document.createTextNode(deleteBtn);
		cellID.appendChild(deleteButton);
		deleteRow(deleteButton);
		cellID = row.insertCell(0);
		// APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
		newText = document.createTextNode(department.value);
		cellID.appendChild(newText);
		
		cellID = row.insertCell(0);
		newText = document.createTextNode(email.value);
		cellID.appendChild(newText);

		cellID = row.insertCell(0);
		newText = document.createTextNode(extension.value);
		cellID.appendChild(newText);

		cellID = row.insertCell(0);
		newText = document.createTextNode(name.value);
		cellID.appendChild(newText);

		cellID = row.insertCell(0);
		newText = document.createTextNode(EmployeeID.value);
		cellID.appendChild(newText);
	}
	
	// ADD EMPLOYEE
	forma.addEventListener('submit', (e) => {
		// PREVENT FORM SUBMISSION
		e.preventDefault();			
		addEmployees();
	});
	const deleteRow = (deleteButton)=>{
		deleteButton.addEventListener("click", ()=>{
			const deleted = confirm("Please confirm if you want this employee to get deleted from the table!\nEither OK or Cancel.");
			if(deleted){
				var i = deleteButton.parentNode.parentNode.rowIndex;
				employeeTable.deleteRow(i);
				employeeCount--;
				// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
				employeeCountTag.innerHTML = "Total: " + employeeCount;
			}
		});
	}
	
});


// DELETE EMPLOYEE