import React from "react";
import "./css/main.css";
import Notes from "./notes";
import File from "./files"
import Patients from "./patients";
import SideNav from "./sideNav"
import Appointment from "./appointment"
import { useState } from "react";
import { useEffect } from "react";


const Main = () => {
    const [patientDetail, setPatientDetail] = useState([]);
    const [appointmentDetails, setAppointmentDetails] = useState([]);
    const [file, setFile] = useState([]);
    const [docter, setDocter] = useState([]);
    const [AD,setAD]=useState({});
    const fetchDEtails = async () => {
        const patient = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails");
        setPatientDetail(await patient.json())
        const appointment = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details");
        setAppointmentDetails(await appointment.json())
        const fileres = await fetch(" https://619f39821ac52a0017ba467e.mockapi.io/Files");
        setFile(await fileres.json())
        const docterres = await fetch(" https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails");
        setDocter(await docterres.json())
    }
    

    console.log(patientDetail);
    console.log(file);
    console.log(docter)
    console.log(appointmentDetails);
  
    const ApDe=(e)=>{
      const val=e.target.value;
      if(val=="past"){
          setAD(appointmentDetails[0]["Post Appointment"])
      }
      if(val=="upcoming"){
          setAD(appointmentDetails[0]["Upcoming Appointments"])
      }
      if(val=="medical"){
          setAD({})
      }
     

     const btns= document.getElementsByClassName("ab");
     for(let i=0;i<btns.length;i++){
         btns[i].style.backgroundColor="transparent";
     }
     e.target.style.backgroundColor="white";

    }
    
    useEffect(() => {
        document.getElementById("abb").click();

        fetchDEtails();
    }, []);
    

    return (<>
        <div className="main">
            <div className="slidebar">
                <SideNav data={docter}></SideNav>
            </div>
            <div className="body">
                <div className="top">
                    <div className=" top1">
                        <div className="top1left">
                            <img alt="log"></img>
                            <p className="head_name">Diane Cooper</p>

                        </div>
                        <div className="top1right">
                            <input placeholder="Search"></input>
                            <div className="plus">+</div>
                            <div className="well">
                                <img ></img>
                            </div>
                        </div>

                    </div>
                    <hr></hr>

                    <div className=" top2">
                        <div className="top2left">
                            Patient List &gt;
                            <span className="patient_name">gaurav</span>
                        </div>
                        <div className="top2right">
                            <div className="print mr2vw"> <img alt="print"></img></div>
                            <div className="edit mr2vw">
                                <img alt="logo"></img><span>Edit Patient  </span>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                </div>
                <div className="buttom">
                    <div className=" buttom_left">
                        <div className="patients">
                            {patientDetail[0]?<Patients data={patientDetail[0]}></Patients>:null}
                            
                        </div>
                        <div className="appointment">
                            <div className="appointment_top">
                                <div className="appointment_list">
                                    <button type="button" className="ab" id="abb" onClick={ApDe} value="upcoming">Upcomming Appointment</button>
                                    <button type="button" className="ab" onClick={ApDe} value="past">Past Appointment</button>
                                    <button type="button" className="ab" onClick={ApDe} value="medical">Medical Record</button>
                                </div>
                            </div>
                            <div className="appointment_buttom">
                                <div className=" appointment_buttom_top">
                                    <div className="appointment_buttom_top_left"></div>
                                    <div className="appointment_buttom_top_right"></div>
                                </div>

                                <div className=" appointment_buttom_buttom">
                                    <Appointment data={AD}></Appointment>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" buttom_right">
                        <div className="notes">
                            <Notes></Notes>
                        </div>
                        <div className="files">
                            {
                                file[0]?<File data={file[0]}></File>:null

                            }
                        </div>
                    </div>
                </div>

            </div>
        </div> 
        
    </>)
}
export default Main;