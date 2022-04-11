import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./css/sideNav.css";

const SideNav = (props) => {
    
    const setbackcolor=(e)=>{
        console.log(e.target.value)
        const sbbtn=document.getElementsByClassName("sbbtn");
        for(let i=0;i<sbbtn.length;i++){
           
             
                 sbbtn[i].style.backgroundColor="transparent";
               
        }
        sbbtn[e.target.value-1].style.backgroundColor="rgb(55, 122, 247)";
    
        

    }
    
    return (<>
       
      
        <ul className="pannel_list" id="sideBarList">
            <li id='head_list'>
                <img alt="logo"></img>
                <h1>Zendenta <br></br><span>Cabut gigi tanpa sakit</span></h1>
                <button>=</button>
               
            </li>
            <li className="lis">
                <button className="sbbtn" value={1} onClick={setbackcolor}>
                <img alt="logo" value={1}></img>
                <span value={1}>Overview</span>
                </button>
                
            </li>
            <li className="lis">      
             <button className="sbbtn" value={2}onClick={setbackcolor}>
             <img alt="logo" value={2} onClick={setbackcolor}></img>
                 <span value={2}>Calendar</span>
                 </button>        
                 

            </li>
            <li className="lis">    
            <button className="sbbtn" id="pl" value={3} onClick={setbackcolor}>
            <img alt="logo" value={3}></img>
                <span value={3}>Patient List</span>
                </button>          
                

            </li>
            <li  className="lis" >  
             <button className="sbbtn" value={4} onClick={setbackcolor}>
             <img alt="logo" value={4}></img>
                <span value={4}>Messages</span>
                 </button>            
                

            </li>
            <li  className="lis" >  
            <button className="sbbtn" value={5}onClick={setbackcolor}>
            <img value={5} alt="logo"></img>
                <span value={5}>Payment Information</span>
                </button>            
                

            </li>
            <li  className="lis">         
            <button className="sbbtn" value={6}onClick={setbackcolor}>
            <img value={6} alt="logo"></img>
                <span value={6}> Setting</span>
                </button>     
                

            </li>
        </ul>
        
        
        <div className="help"><img alt="help" ></img>
         <span>Help?</span>
        </div>
        <hr className="hr"></hr>
        

        <div className="docter">
        <div className="profile_logo"><img alt="logo"></img></div>
        <div className="profile_name"> 
         {
             props.data[0]?<span>{props.data[0].name}</span>:null
         }
</div>
        <div className="profile_button">
            <select>
                
            </select>
            <br></br>
            <div className="spacification">
            {
             props.data[0]?<span>{props.data[0].specification}</span>:null
         }
               
            </div>
        </div>
        </div>
    </>)


}

export default SideNav;