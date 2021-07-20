import {useState} from "react"
import ActivityBox from "../../components/activityBox/ActivityBox";
import {activityDummyData} from "../../ActivityDummyData";
import Search from "../../components/search/Search";
import "./activity.css"
import { Link } from "react-router-dom";

export default function Activity() {
    const [data, setData] = useState(activityDummyData);
    const [query, setQuery] = useState('');

    const formHandler = (e) => {
        e.preventDefault();
        let dataCopy = [...data];
        let filteredData = dataCopy.filter(word => word.activity.toLowerCase().includes(query.toLowerCase()))
        if(e.target.value){
            setData(filteredData); 
        }else{
            setData(activityDummyData);
        }
    }

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const setStatusHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="activity">
            <div className="activityWrapper">
                <div className="topbar">
                    <span>Welcome, {activityDummyData.map(i => i.userName)[0]}.</span>
                    <Search formHandler = {formHandler} onChange={onChange} query={query} />
                    <Link to="/addnewactivity" style={{textDecoration: "none"}}>
                        <span className="addNewActivity">+ Add new activity</span>
                    </Link>
                </div>
                <div className="activities">
                {
                    data.map(activity => {
                        return(
                            <ActivityBox key={activity.id} 
                            title={activity.title} 
                            dateCreated={activity.created} 
                            dateDue={activity.due} 
                            activity={activity.activity}
                            id={activity.id}
                            status={activity.status}
                            setStatusHandler = {setStatusHandler}
                            />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
