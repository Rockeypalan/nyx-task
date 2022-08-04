import { React, useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

function CreateRecord() {

    const navigate = useNavigate();
    const  [record, setRecord] = useState({
        username: "",
        description: "",
        imgCollection: ""

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

    ;

    const onSubmit = (e) => {
        e.preventDefault();
        const newRecord = {
            username: record.username,
            description: record.description,
            imgCollection: record.imgCollection,
        };

        axios.post("http://localhost:5000/records/add",newRecord)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));

                
    navigate("/list");
    navigate("/list");
    };

    return (
      
        <div className="container">
          <h3> Create New Record</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group" >
                <lable> Username </lable>
                <input type="text" required value={record.username} onChange={handleChange} className="form-control" name="username" />
            </div><br />
            <div className="form-group" >
                <lable> Description </lable>
                <input type="text" required value={record.description} onChange={handleChange} className="form-control" name="description" />
            </div><br />
            <div className="form-group" >
                <lable> Convert your Image to Link  </lable>
                <a type="button" href="https://postimages.org/" target="_blank" class="btn btn-outline-warning"><i class="bi bi-person-badge"></i> Convert </a>
            </div><br />
            <div className="form-group">
                <lable>  Image Direct Link  </lable>
                <input type="text" value={record.imgCollection} onChange={handleChange} name="imgCollection" className="form-control" multiple />
            </div><br />
                        
            <br />
            <div>
                <input type="submit" value= 'Create Record' className="btn btn-primary" />
            </div>
          </form>
        </div>
  
     
    );
  }
  
  export default CreateRecord;