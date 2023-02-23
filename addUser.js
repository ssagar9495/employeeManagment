import React from "react";
import { useFormik } from "formik";
import "./addUser.css";

const Adduser = ({ closeDialog, onSubmitFun }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      salary: ""
    },
    onSubmit: (values) => {
      onSubmitFun(values);
    }
  });

  return (
    <div className="modalContainer">
      <form onSubmit={formik.handleSubmit} className="formContainer">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          name="salary"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.salary}
        />
        <div className="btnContainer">
          <button className="btn" type="button" onClick={closeDialog}>
            Cancel
          </button>
          <button type="submit" className="btn">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
