import { React, useEffect, useState } from "react";
import axios  from "axios";
import Record from "./Record";


function RecordList() {
  const [records, setRecords] = useState([]);
  // console.log(records);

  useEffect(() => {
      axios.get("http://localhost:5000/records")
            .then((res) => setRecords(res.data.records))
            .catch((err) => console.log(err));
  }, [])

    const deleteRecord = (id) => {
      setRecords(records.filter((record) => record._id !== id));
      axios.delete(`http://localhost:5000/records:${id}`)
            
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };
    // const deleteRecord = async id => {
    //   setRecords(records.filter((record) => record._id !== id));
    //   await axios.delete(`http://localhost:5000/records:${id}`);
      
    // };

    return (
      
        <div className="container">
          <br />
          <div className='d-flex my-5'>
            <h3>Records List</h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a type="button" href="/" class="btn btn-outline-danger px-4"><i class="bi bi-arrow-90deg-left"></i></a>
            </div>
          <table className='table'>
                <thead>
                    <tr>
                        <th >Username</th>
                        <th >Description</th>
                        <th>imgCollection</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      records.map((currentRecord) => {
                        return (
                          <Record record={currentRecord}
                                  deleteRecord= {deleteRecord}
                                  key ={currentRecord._id} />
                        )
                      })
                    }
                </tbody>
            </table>
        </div>
  
     
    );
  }
  
  export default RecordList;