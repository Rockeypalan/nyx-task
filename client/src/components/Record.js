import { React} from "react";
import {Link} from 'react-router-dom';


const Record = ({record, deleteRecord, key }) => {
    return (
      
        
          <tr>
            <td> {record.username}</td>
            <td> {record.description}</td>
            <td>
                <Link to = {`/${record._id}`}> <i class="bi bi-pencil-square" /> </Link> | <a href="#" onClick={() => {
                    deleteRecord(record._id);
                }}>
                 <i class="bi bi-trash3" />
                </a>
            </td>
          </tr>
        
  
     
    );
  }
  
  export default Record;