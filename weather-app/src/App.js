import "./App.css";
import Line from './component/Line'
import Table from './component/Table'
function App() {
  return (
    <>
      <div className="container-fluid text-white px-4 main">
        <div className="row gx-5">
          <div className="col-12  col-md-6 order-2 order-md-1 left_img">
            <div className="left_Side row">
              <div className="row">
                <h2 className="display-2 text-end text_shadow pt-5">
                  Display 1
                </h2>
              </div>
              <div className="row align-items-end pb-5">
                <div className="col">
                  <h4 className="display-4 text-start text_shadow ">Time</h4>
                  <h6 className="display-6 text-start text_shadow">Date</h6>
                </div>
                <div className="col">
                  <h1 className="display-1 text-end text_shadow">32</h1>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-md-6  order-1 order-md-2  right_img  text-center">
            <div className="icon_right">
              
              <i className="bi bi-cloud-moon text_shadow"></i>
            </div>
          <Line/>
            <input
              type="text"
              id="exampleFormControlInput1"
              placeholder="Search"
            ></input>
            <i className="bi bi-search search_icon text_shadow"></i>
            <Line/>

<Table/>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;