import React from 'react'

const Navbar = () => {
  return (
    <div className="pt-5" id="navber">
        <div className="container">
            <nav className="navbar navbar-expand-md text-white fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle text-secondary border" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <b>JOBLANCING</b>
                    </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"> Apply For Jobs</a></li>
                            <li><a href="#"> Hire Developers</a></li>
                            <li><a href="#"> Login <span className="glyphicon glyphicon-log-in"></span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar