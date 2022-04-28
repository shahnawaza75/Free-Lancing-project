import React from 'react'
// import bg from '../../assets/bg-home.png'

const Hero = () => {
  return (
    <div>
        <div className="container-fluid header">
            <div className="row p-5">
                <div className="col-lg-6 col-sm-12 pt-5">
                    <h1 className="text-start">
                        Spin up
                        your engineering
                        dream team
                    </h1>
                    <p className="text-start">
                    Our AI-backed Intelligent Talent Cloud helps
                    you source, vet, match and manage the
                    world's best software developers remotely.
                    </p>
                    <button className="btn btn-primary p-3">
                        Hire Developers
                    </button>
                    <p>
                    Looking for jobs instead?<a href="#">Apply for Jobs</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero