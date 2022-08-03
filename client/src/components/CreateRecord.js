import { React, useState } from "react";
import axios from "axios";


function CreateRecord() {

    const  [record, setRecord] = useState({
        username: "",
        description: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRecord((prevData) => {
            return {
                ...prevData,
                [name] : value,
            };
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newRecord = {
            username: record.username,
            description: record.description,
        };

        axios.post("http://localhost:5000/records/add",newRecord)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
    };

    return (
      
        <div className="container">
          <h3> Create New Record</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group" >
                <lable> Username </lable>
                <input type="text" required value={record.username} onChange={handleChange} className="form-control" name="username" />
            </div>
            <div className="form-group" >
                <lable> Description </lable>
                <input type="text" required value={record.description} onChange={handleChange} className="form-control" name="description" />
            </div>
            <br />
            <div>
                <input type="submit" value= 'Create Record' className="btn btn-primary" />
            </div>
          </form>
        </div>
  
     
    );
  }
  
  export default CreateRecord;