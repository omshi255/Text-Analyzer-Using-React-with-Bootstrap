import React from 'react'


export default function Navbar() {
  return (

    
    <nav className="navbar navbar-dark bg-darkblue">
      <div className="container-fluid">
        <a className="navbar-brand">TextUtils</a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}
