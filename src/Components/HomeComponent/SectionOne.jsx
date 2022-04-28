import React from 'react'
import wsearch from "../../assets/wsearch.svg"
import usearch from "../../assets/usearch.svg"
import sheild from "../../assets/sheild.svg"
import rowing from "../../assets/rowing.svg"
import dotsMap from "../../assets/dots-map.svg"

const SectionOne = () => {
  return (
    <>
    <div className="container containers p-5">
        <h1 className="text-center">We now live in a remote-first world</h1>
        <h2 className="text-center col-8">
        Companies are in competition to garner the benefits of remote engineering talent
        </h2>
        <div className="container mt-5">
            <div className="row justify-content-between mt-2">
                <div className="col-lg-4 d-flex">
                    <i className="fa-globes"></i>
                    <p className="mt-p">
                    Planetary pool of software developers
                    </p>
                </div>
                <div className="col-lg-4 d-flex">
                    <i className="fa-mark"></i>
                    <p className="mt-p">
                    Millions of untapped Silicon Valley caliber engineers
                    </p>
                </div>
                <div className="col-lg-4 d-flex">
                    <i className="fa-people"></i>
                    <p className="mt-p">
                    Proven success of distributed teams
                    </p>
                </div>
            </div>
        </div>
    </div>

    <section className="container-fluids containerThree">
        <div className="div">
            <div className="container-fluid">
                <div className="col-lg-4">
                    <h2 className="text-white text-start">
                        1 Million+ developers
                        from 140 countries
                        have already joined JOBLANCING
                    </h2>
                    <div className="row mt-p">
                        <div className="col-lg-4 text-center">
                            <h1>15+</h1>
                            <p>Job types</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <h1>100+</h1>
                            <p>Technologies</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <h1>7+</h1>
                            <p>Seniority levels</p>
                        </div>
                    </div>
                    <div className="row justify-content-between mt-p">
                        <button className="col-6 btn btns bg-white text-dark">
                            Hire Developers
                        </button>
                        <button className="col-6 btn btns btn-outline-light">
                            Apply for Job
                        </button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <img src={dotsMap} alt="dotsMap" />
                </div>
            </div>
        </div>
    </section>

    <div className="containerTwo container">
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <img src={rowing} alt="rowing" />
            </div>
            <div className="col-lg-6 col-sm-12">
                <h1>Remote is challenging</h1>
                <div className="col-12 row d-flex">
                    <img src={wsearch} alt="wsearch" />
                    <p className="mt-p col-9">
                    Building an extensive global pipeline to find great people
                    </p>
                </div>
                <div className="col-12 row d-flex">
                    <img src={usearch} alt="usearch" />
                    <p className="mt-p col-9">
                    Vetting remote candidates without taking up all of the engineering time
                    </p>
                </div>
                <div className="col-12 row d-flex">
                    <img src={sheild} alt="sheild" />
                    <p className="mt-p col-9">
                    Making remote development easy, compliant, and secure
                    </p>
                </div>
                <br />
                <button className="btn btn-primary p-2">
                    Hire Developers
                </button>
            </div>
        </div>
        <br />
        <br />
    </div>
    </>
  )
}

export default SectionOne