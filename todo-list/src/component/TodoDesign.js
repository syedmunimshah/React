import React, { useState } from "react";

const TodoDesign = () => {
  const [text, SetText] = useState("");
  const [store, SetStore] = useState([]);
  const submit = () => {
    SetStore([...store, { text }]);
    console.log(store);
    SetText("");
  };
  const h1 = (
    <div className="alert alert-danger text-center" role="alert">
      Data Empty
    </div>
  );

  const deletehandeler = (e) => {
    console.log(e);
    var a = [...store];
    a.splice(e, 1);
    SetStore(a);
  };

  return (
    <>
      <div className="container mt-5 w-50 mx-auto alert alert-primary">
        <h3 className="text-center">TodoList</h3>
        <div className="mb-1">
          <div className="input-group ">
            <span className="input-group-text alert bg-light text-black font-weight-bold">
              Name
            </span>
            <input
              type="text"
              className="form-control alert bg-light text-black"
              value={text}
              onChange={(e) => {
                SetText(e.target.value);
              }}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary mt-4 mb-4 "
              onClick={submit}
            >
              Primary
            </button>
          </div>
        </div>
        {store.length > 0
          ? store.map((x, index) => {
              return (
                <div className="alert alert-primary" role="alert">
                  <table className="table" key={index}>
                    <thead>
                      <tr>
                        <th scope="col">S No</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">{index}</th>
                        <td>{x.text}</td>
                        <td>
                          <button
                            className="bi bi-x-circle text-danger border border-danger"
                            onClick={() => {
                              deletehandeler(index);
                            }}
                          ></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })
          : h1}
      </div>
    </>
  );
};

export default TodoDesign;
