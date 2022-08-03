import { React, useEffect, useState } from "react";
import axios  from "axios";
import Record from "./Record";


function RecordList() {
  const [records, setRecords] = useState([]);
  console.log(records);

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

    return (
      
        <div className="container">
          <h3> Records List </h3>
          <table className='table'>
                <thead>
                    <tr>
                        <th >Username</th>
                        <th >Description</th>
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