import React, { useState } from "react";
import "./App.css";
import { EmployeeData } from "./employeeData";
import Adduser from "./addUser.js";

function App() {
  const [employees, setEmployees] = useState(EmployeeData);
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [openDialog, setOpenDialog] = useState(true);
  const userHandler = (employee) => {
    setSelectedEmployee({
      id: employee.id,
      name: employee.name,
      age: employee.age,
      salary: employee.salary
    });
  };

  const deleteHandler = (event, employeeId) => {
    event.stopPropagation();
    let updateEmployeeList = employees?.filter(
      (employee, index, arr) => employee?.id !== employeeId
    );
    setEmployees(updateEmployeeList);
  };

  const openDialogHandler = () => {
    setOpenDialog(true);
  };
  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const onSubmitFunHandler = (values) => {
    let newId = Math.random() * 100;
    let id = newId.toFixed(0);

    let newRecord = { ...values, id };
    employees.push(newRecord);
    closeDialogHandler();
  };
  console.log(employees);
  return (
    <>
      {openDialog ? (
        <Adduser
          onSubmitFun={onSubmitFunHandler}
          closeDialog={closeDialogHandler}
        />
      ) : (
        <div className="mainContainer">
          <div className="topHeading">
            <div></div>
            <div>EMPLOYMENT MANAGMENT</div>
            <button className="submitbtn" onClick={openDialogHandler}>
              Add{" "}
            </button>
          </div>
          <div className="middleContaner">
            <div className="leftInfoBox">
              {employees?.map((employee, index, arr) => {
                return (
                  <div
                    className="dataRow"
                    onClick={() => userHandler(employee)}
                  >
                    <div className="record">{employee.name}</div>
                    <div
                      className="deleteIcon"
                      onClick={(event) => deleteHandler(event, employee?.id)}
                    >
                      X
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rightInfoBox">
              {selectedEmployee?.id && (
                <div className="inforCenterDiv">
                  <div>{`NAME: ${selectedEmployee?.name}`}</div>
                  <div>{`AGE: ${selectedEmployee?.age}`}</div>
                  <div>{`SALARY: ${selectedEmployee?.salary}`}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
