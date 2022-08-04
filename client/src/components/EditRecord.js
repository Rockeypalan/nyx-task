import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";



const EditUser = () => {

    const navigate = useNavigate();
    //  console.log(useParams);
  const { id } = useParams(); // { id: '' }
  const [record, setRecord] = useState({
        username:'',
        description:'',
        imgCollection: "",
        
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/records/${id}`)
      .then((res) => {
        setRecord((prevPost) => {
          return {
            ...prevPost,
            username: res.data.record.username,
            description: res.data.record.description,
            imgCollection: res.data.record.imgCollection,
            
          };
        });
      })
      .catch((err) => console.log(err));

  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setRecord((prevData) => {
      // console.log(prevData);
      return {
        ...prevData,
        [name]: value,
        
      };
    });
  };

  
  const onSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
        username: record.username,
        description: record.description,
        imgCollection: record.imgCollection,
        
    };

    axios
      .put(`http://localhost:5000/records/${id}`, newRecord)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    navigate("/list");
    navigate("/list");
  };


    return (
        <div>
            <div className='d-flex my-5'>
            <h3>Edit Record</h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a type="button" href="/list" class="btn btn-outline-danger px-4"><i class="bi bi-arrow-90deg-left"></i></a>
            </div>
            <form className="row g-3" onSubmit={onSubmit} >
                <div className='form-group col-md-4'>
                    <label>Username</label>
                    <input required type='text' value={record.username} onChange={handleChange} className='form-control' name='username'></input>
                </div><br />
                <div className='form-group col-md-4'>
                    <label>Description</label>
                    <input required type='text' value={record.description} onChange={handleChange} className='form-control' name='description'></input>
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
                    <input type="submit" className="btn btn-primary " value='Update Record' ></input>
                </div>
                <br /><br />
            </form>
        </div>
        
    )
};

export default EditUser;