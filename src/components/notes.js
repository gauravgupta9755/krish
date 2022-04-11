import React from "react";
import "./css/note.css"
const Notes=()=>{
    return (<>
    <div className="note">
    <div className="nt">
    <div className="nthalfleft"><span>Notes</span></div>
    <div className="nthalfright"><span>See all</span></div>
    </div>
    <div className="nm">
        <ul>
        <li>kdief dfkdie kder</li>
        <li>kdief dfkdie kder</li>
        <li>kdief dfkdie kder</li>
        </ul>
        <button>Save Note</button>
    </div>
    <div className="nb">
    <div className="nbhalfleft">
        <p>kfff iekisdfsd kdfd</p>
        <div>
            <img alt="logo"></img><span>Dr. neha pal</span>
        </div>
    </div>
    <div className="nbhalfright"><span>20 Nov 19</span></div>
    </div>
    </div>
    </>)
}

export default Notes;