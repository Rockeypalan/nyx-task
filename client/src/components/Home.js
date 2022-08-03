import { React } from "react";


const Home = () => {
  return (
      <div>
          <br /><br /><br /><br />
          <h3>Records</h3>
          <br />
          <p>This is a React Records CRUD Application....</p>
          <a type="button" href="/create" class="btn btn-outline-primary"><i class="bi bi-pen"></i> Create Record </a> <i class="bi bi-signpost-split-fill"></i> &nbsp;
          <a type="button" href="/list" class="btn btn-outline-warning"><i class="bi bi-person-badge"></i> Login </a>
      </div>
  )
};
  
  export default Home;