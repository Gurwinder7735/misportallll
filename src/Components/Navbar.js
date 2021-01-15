import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Admin Panel</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link className="nav-link active" to="/action/2">Action 2</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link active" to="/action/3">Action 3</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link active" to="/action/4">Action 4</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link active" to="/action/5">Action 5</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link active" to="/action/6">Action 6</Link>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
