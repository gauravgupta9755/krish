import React from "react";

import './css/patients.css';

const Patients = (props) => {
    
    return (<>
        <div className="conainer" >

            <div className="left_container">
                <div className="profile">
                    <div className="profile_image">
                        {/* <img alt="photo"></img> */}
                    </div>
                    <div className="profile_name">
                        <h1>{props.data.name}</h1>
                    </div>
                    <div className="profile_address"><p>{props.data["e-email"] }</p></div>
                    <div className="profile_count">
                        <div className="profile_count_past"><span>{props.data.Past}</span><br></br>Past</div>
                        <div className="verticle_line"></div>
                        <div className="profile_count_upcoming"> <span>{props.data.Upcoming}</span><br></br>Upcomming</div>
                    </div>
                    <div className="profile_btn">
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
            <div className="right_container">

                <div class="grid-container">
                    <div class="grid-item"><span>Gender</span> <br></br><span className="bold600">{props.data.Gender}</span></div>
                    <div class="grid-item"><span>Birthday</span> <br></br><span className="bold600">{props.data.Birthday}</span></div>
                    <div class="grid-item"><span>Phone Number</span> <br></br><span className="bold600">{props.data["Phone Number"]}</span></div>
                    <div class="grid-item"><span>Street Address</span> <br></br><span className="bold600">{props.data["Street Address"]}</span></div>
                    <div class="grid-item"><span>City</span> <br></br><span className="bold600">{props.data.City}</span></div>
                    <div class="grid-item"><span>ZIP Code</span> <br></br><span className="bold600">{props.data["ZIP Code"]}</span></div>
                    <div class="grid-item"><span>Member Status</span> <br></br><span className="bold600">{props.data["Member Status"]}</span></div>
                    <div class="grid-item"><span>Register Date</span> <br></br><span className="bold600">{props.data["Register Date"]}</span></div>


                </div>
            </div>

        </div>
    </>)
}

export default Patients;