import { useEffect, useState } from "react"
import { useHistory, useParams  } from "react-router-dom"
import { activityDummyData } from "../../ActivityDummyData"

import "./activityitem.css"

export default function ActivityItem() {

    let history = useHistory();

    let { id } = useParams()
    const userId = id;
    const data = activityDummyData.find(i => i.id === Number(userId));

    const [title, setTitle] = useState(data.title);
    const [activity, setActivity] = useState(data.activity);
    const [due, setDue] = useState(data.due);
    const [activityStatus, setActivityStatus] = useState(data.status)
    const [pushActivity, setPushActivity] = useState("activities");
    
    useEffect(() => {
        if(activityStatus === "completed"){
            setPushActivity("completedactivities");
        }else if(activityStatus === "incomplete"){
            setPushActivity("incompletedactivities");
        }
    }, [activityStatus]) 

    const updateInformationHandler = (e) => {
        e.preventDefault();
        activityDummyData[userId - 1].title = title;
        activityDummyData[userId - 1].activity = activity;
        activityDummyData[userId - 1].due = due;
        activityDummyData[userId - 1].status = activityStatus;

        

        history.push(`/${pushActivity}`)
    }

    return (
        <div classItem="editActivityItem">
            <div className="editActivityItem">
                <h1 className="editTitle">Editing, {data.title}</h1>
                <form onSubmit={updateInformationHandler} className="editForm">
                    <div className="edit Title">
                        <label>Title</label>
                        <input 
                        placeholder={data.title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="edit Activity">
                        <label>Activity</label>
                        <input 
                        placeholder={data.activity}
                        onChange={(e) => setActivity(e.target.value)}
                        />
                    </div>
                    <div className="edit Date">
                        <label>Date Due</label>
                        <input 
                        placeholder={data.due}
                        onChange={(e) => setDue(e.target.value)}
                        />
                    </div>
                    <div className="edit Status">
                        <label>Status</label>
                        <select onChange={(e) => setActivityStatus(e.target.value)} value={activityStatus}>
                            <option value="completed">completed</option>
                            <option value="incomplete">incomplete</option>
                        </select>
                    </div>
                        <button type="submit">Update Information</button>
                </form>
            </div>
        </div>
    )

}
