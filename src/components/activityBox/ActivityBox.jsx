import { Link } from "react-router-dom"
import {useState} from "react";
import "./activitybox.css"

export default function ActivityBox({title, dateCreated, dateDue, activity, id, status, setStatusHandler}) {
    const [click, setClick] = useState(false)
    const [text, setText] = useState(activity.length > 30 ? activity.substr(0, 25) + "..." : activity);
    const displayTextHandler = (e) => {
        e.preventDefault();
        if(click === false){
            setText(activity);
            setClick(true);
        } else {
            setText(activity.substr(0, 25) + "...");
            setClick(false);
        }
    }

    return (
        <div className={status==="completed" ? "activityBox completed" : "activityBox incomplete"}>
            <div className="activityItem">
                <span className="activityTitle">{title}</span>
                <span className="activityCreated">Created: {dateCreated}</span>
                <span className="activityDue">Due: {dateDue}</span>
                <span className="activityGoal">{text}</span>
                <div className="activityCheckMark">                
                {activity.length > 30 ? <button className="activityGoalFullText" onClick={displayTextHandler}>{click ? "View less" : "View more"}</button> : ""}
                <Link to={`/activity/${id}`} style={{textDecoration: "none"}}>
                    <button className="checkMark Edit">Edit</button>
                </Link>                    
                </div>
            </div>
            
        </div>
    )
}
