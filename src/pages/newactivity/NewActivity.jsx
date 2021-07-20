import {useState} from "react"
import { activityDummyData } from "../../ActivityDummyData";
import {useHistory} from "react-router-dom";
import "./newactivity.css"
export default function NewActivity() {

    let history = useHistory();

    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    
    today = dd + "-" + mm + "-" + yyyy;
    const dateCreated = today;
    
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [dateDue, setDateDue] = useState(today)

    let id = activityDummyData.length;

    const formHandler = (e) => {
        e.preventDefault();
        const newActivity = {
            id: id + 1, title, activity: desc, created: dateCreated, due: dateDue, status: "incomplete", userName: "Michael" 
        }
        activityDummyData.push(newActivity);
        setTitle("");
        setDesc("");
        setDateDue(today);
        history.push("/activities")
    }

    return (
        <div className="newActivity">
            <div className="newActivityContainer">
                <h1 className="newActivityTitle">New Activity</h1>
                <form onSubmit={formHandler} className="form">
                    <input type="text" 
                    className="newTitle"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" 
                    className="newDesc"
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)} />
                    <label for="DateDue">Date Due</label>
                    <input type="date" 
                    className="newDate"
                    placeholder="Due Date"
                    name="DateDue"
                    value={dateDue}
                    onChange={(e) => setDateDue(e.target.value)} />

                    <button type="submit">Add New Activity</button>
                </form>
            </div>
        </div>
    )
}
