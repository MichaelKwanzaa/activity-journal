import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { activityDummyData } from '../../ActivityDummyData';
import ActivityBox from '../../components/activityBox/ActivityBox';
import Search from '../../components/search/Search';

export default function IncompletedItems() {
    const initialFilter = activityDummyData.filter(i => i.status === "incomplete")
    const [data, setData] = useState(initialFilter)
    const [query, setQuery] = useState('');
     

    useEffect(() => {
        setData(initialFilter)

    }, [])

    const formHandler = (e) => {
        e.preventDefault();
        let dataCopy = [...data];
        let filteredData = dataCopy.filter(word => word.activity.toLowerCase().includes(query.toLowerCase()))
        if(e.target.value){
            setData(filteredData); 
        }else{
            setData(initialFilter)
        }
            
        
    }

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className="completedItems">
            <div className="completedItemsContainer">
                <div className="topbar">
                <span>Welcome, {activityDummyData.map(i => i.userName)[0]}.</span>
                        <Search formHandler = {formHandler} onChange={onChange} query={query} />
                        <Link to="/addnewactivity" style={{textDecoration: "none"}}>
                            <span className="addNewActivity">+ Add new activity</span>
                        </Link>
                </div>

                
                <div className="activities">

                    {data.map(item => {
                        return (
                            <ActivityBox
                                id={item.id}
                                title={item.title}
                                dateCreated={item.created}
                                dateDue={item.due}
                                activity={item.activity}
                                status={item.status}

                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
