import React from 'react'
// import "./Navbar.css"
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <header>
        <div className="container-fluid mx-auto nav-style">
          <div className="row">
            <div className="col-md-10 col-11 mx-auto">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">E-commerce</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Service</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>

                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>

                  <div className="icon">
                    <i className="bi bi-cart4"></i>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export { Navbar }