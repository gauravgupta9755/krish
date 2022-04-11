import React from "react";
import  "./css/appointment.css"
import { useState } from "react";


const Appointement=(props)=>{
   
    return (<>
        <div className="appoint">
         <div className="atop">
         <div className="atopleft"><span>Root Canal Treatment</span></div>
         <div className="atopright"><button>^ Show Previous Treatment</button></div>
         </div>
         <hr></hr>
         <div className="abuttom">
             <div className="circularline">
             <div className="blue_line"></div>
             <div className="circ"></div>
             <div className="blue_line"></div>
             <div className="circ"></div>
             <div className="blue_line"></div>

             </div>
             <div className="adetail">
                 <div className="apdetail">
                 <div className="data_time mauto"><span>{props.data.Date}</span><br></br><span>{props.data.Time}</span></div>
                 <div className="treatment mauto"><span>Treatment</span><br></br><span>{props.data.Treatment}</span></div>
                 <div className="dentist mauto"><span>Dentist</span><br></br><span>{props.data.Dentist}</span></div>
                 <div className="nurse mauto"><span>Nurse</span><br></br><span>{props.data.Nurse}</span></div>
                 <div className=" mauto"><span><a href={props.data.Doc}>Notes</a></span></div>
                 </div>
             </div>
         </div>
         </div>
    </>)
}

export default Appointement;