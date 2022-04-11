import React from "react";
import "./css/files.css";
const File = (props) => {
    console.log(props.data);
    return (<>
        <div className="file">
            <div className="ft">
                <div className="fthl">
                    <span>
                        Files/Documents
                    </span>
                </div>
                <div className="fthr">
                    <img alt="file_logo"></img><span>Add Files</span>
                </div>
            </div>
            <div className="fb">
                {
                    props.data.files.map((val)=>{
                        return (<>
                        <div className="fc">
                    <div className="flc mauto"><img alt="logo"></img></div>
                    <div className="fnc mauto"><span>{val}</span></div>
                    <div className="fsc mauto">
                        <div className="delete"><span>@</span></div>
                        <div className="download"><span>@</span></div>
                        <div className="size"><span>@</span></div>
                    </div>
                </div>
                        </>)
                    })
                }
                
            </div>
        </div>
    </>)
}
export default File;