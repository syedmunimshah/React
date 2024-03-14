import React, { useState } from "react";

const TodoList2 = () => {
  const [email, Setemail] = useState("");
  const [store, SetStore] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    SetStore([...store, { email }]);
    console.log(store)
  };
  return (
    <>
      <form onSubmit={submit}>
        <div className="container mt-5 w-50 mx-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                Setemail(e.target.value);

              }}
            />
            <button type="submit" className="btn btn-primary mt-5">
              Primary
            </button>
          </div>

          {store.map((x,index) => 
              <div className="alert alert-primary" role="alert" >
               {console.log(x)}
              <table className="table" key={index}>
                <thead>
                  <tr>
                    <th scope="col">S No</th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{x.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        
          )}
        </div>
      </form>
    </>
  );
};

export default TodoList2;
