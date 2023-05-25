import React, { Fragment, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

function Home() 
{
  const [employeeList, setEmployeeList] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);
  let history = useHistory();

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewAgeChange = (event) => {
    setNewAge(event.target.value);
  };
  const handleNewMobileNumberChange = (event) => {
    setNewMobileNumber(event.target.value);
  };


  const handleAddEmployee = () => {
    const newEmployee = {
      id: employeeList.length > 0 ? employeeList[employeeList.length - 1].id + 1 : 1,
      Name: newName,
      Age: newAge,
      MobileNumber: newMobileNumber,
    };
    setEmployeeList([...employeeList, newEmployee]);
    alert("Employee added successfully!");
    history.push("/");
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setNewName(employee.Name);
    setNewAge(employee.Age);
    setNewMobileNumber(employee.MobileNumber);

  };

  const handleUpdateEmployee = () => {
    const index = employeeList.findIndex((employee) => employee.id === editingEmployee.id);

    if (index !== -1) {
      const updatedEmployee = {
        id: editingEmployee.id,
        Name: newName,
        Age: newAge,
        MobileNumber: newMobileNumber,
        

      };
      const updatedEmployeeList = [...employeeList];
      updatedEmployeeList.splice(index, 1, updatedEmployee);
      setEmployeeList(updatedEmployeeList);
      setEditingEmployee(null);
      setNewName("");
      setNewAge("");
      setNewMobileNumber("");
      alert("Employee updated successfully!");
    }
  };

  const handleDeleteEmployee = (id) => {
    const index = employeeList.findIndex((employee) => employee.id === id);

    if (index !== -1) {
      const confirmed = window.confirm("Are you sure you want to delete this employee?");

      if (confirmed) {
        const updatedEmployeeList = [...employeeList];
        updatedEmployeeList.splice(index, 1);
      
setEmployeeList(updatedEmployeeList);
setEditingEmployee(null);
alert("Employee deleted successfully!");
}
}
};
// const [toggle, setToggle] = useState(true);

return (
<Fragment>
<div className="container my-4">
<h1>Employee Databasee</h1>
<Table striped bordered hover>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>MobileNumber</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{employeeList.map((employee) => (
<tr key={employee.id}>
<td>{employee.id}</td>
<td>{employee.Name}</td>
<td>{employee.Age}</td>
<td>{employee.MobileNumber}</td>

<td>
<Button variant="info" onClick={() => handleEditEmployee(employee)}>
Edit
</Button>
<Button variant="danger" onClick={() => handleDeleteEmployee(employee.id)}>
Delete
</Button>
</td>
</tr>
))}
</tbody>
</Table>
<h2>Create Employee List</h2>
<form> 
<div className="form-group">
<label>Name</label>
<input type="text" className="form-control" id="nameInput" placeholder="Enter Your Name" value={newName} onChange={handleNewNameChange} />
</div>
<div className="form-group">
<label>Age</label>
<input type="number" className="form-control" id="ageInput"  placeholder="Enter your Age" value={newAge} onChange={handleNewAgeChange} />
</div>
<div className="form-group">
<label>MobileNumber</label>
<input type="text" className="form-control" id="mnInput" placeholder="Enter your MobileNumber" value={newMobileNumber} onChange={handleNewMobileNumberChange}/>
</div>

{editingEmployee ? (
<Button variant="success" onClick={handleUpdateEmployee}>
Update
</Button>
) : (
<Button  className="text" variant="success"  onClick={handleAddEmployee}>
Add
</Button>
)}
</form>
</div>
</Fragment>
);
}

export default Home;