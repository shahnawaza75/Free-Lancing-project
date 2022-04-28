import React from 'react'
import step from "../../assets/steps.svg"
import profileCheck from "../../assets/profile_checked.svg"
import star from "../../assets/star.svg"
import income from "../../assets/income.svg"
import bolt from "../../assets/bolt.svg"
import time from "../../assets/Stopwatch.svg"
import retention from "../../assets/thumbsup.svg"

const SectionTwo = () => {
  return (
    <>
        <section className="sectionOne">
           <div className="container">
           <h1 className="text-center">
            Why businesses choose JOBLANCING
            </h1>
            <br />
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-12">
                    <div className="row justify-content-center">
                        <img src={bolt} alt="bolt" />
                        <h5>Speed</h5>
                    </div>
                    <h2 className="text-center">
                    5 days
                    </h2>
                    <h3 className="text-center">
                    to fill most roles,
sometimes same day.
                    </h3>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="row justify-content-center">
                        <img src={time} alt="time" />
                        <h5>Time Saved</h5>
                    </div>
                    <h2 className="text-center">
                    50+ hours
                    </h2>
                    <h3 className="text-center">
                    of engineering team time
saved per hire on interviewing.
                    </h3>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="row justify-content-center">
                        <img src={retention} alt="retention" />
                        <h5>Retention</h5>
                    </div>
                    <h2 className="text-center">
                    97%
                    </h2>
                    <h3 className="text-center">
                    engagement
                    success rate.
                    </h3>
                </div>
            </div>
           </div>
        </section>
        <div className="container sectionTwo">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <h1>Remote is challenging</h1>
                    <div className="col-12 row d-flex">
                        <img src={profileCheck} alt="profileCheck" />
                        <p className="mt-p col-9">
                        Building an extensive global pipeline to find great people
                        </p>
                    </div>
                    <div className="col-12 row d-flex">
                        <img src={star} alt="star" />
                        <p className="mt-p col-9">
                        Vetting remote candidates without taking up all of the engineering time
                        </p>
                    </div>
                    <div className="col-12 row d-flex">
                        <img src={income} alt="income" />
                        <p className="mt-p col-9">
                        Making remote development easy, compliant, and secure
                        </p>
                    </div>
                    <br />
                    <button className="btn btn-primary p-2">
                        Apply For Jobs
                    </button>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img src={step} alt="step" />

                </div>
            </div>
        </div>
    </>
  )
}

export default SectionTwo