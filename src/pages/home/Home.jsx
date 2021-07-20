import { activityDummyData } from "../../ActivityDummyData"
import Image from "../../hero-image.png";
import "./home.css"
export default function Home() {
    return (
        <div className="home">
            <div className="homeWrapper">
                <div className="homeItems">
                    <div className="homeTop">
                        <div className="userItemWelcome">
                            <img src={Image} alt="" className="userItemImage" />
                            <p className="userItemName">{activityDummyData.map(i => i.userName)[0]}</p>
                        </div>
                        <div className="userItem Created">
                            <span className="userItemNumber">{activityDummyData.length}</span>
                            <span className="userItemTitle">Activities Created</span>
                        </div>
                    </div>
                    <div className="homeBottom">
                        <div className="userItem completedTask">
                            <span className="userItemNumber">{activityDummyData.filter(i => i.status === "completed").length}</span>
                            <span className="userItemTitle">Activities Completed</span>
                        </div>
                        <div className="userItem uncompletedTask">
                            <span className="userItemNumber">{activityDummyData.filter(i => i.status === "incomplete").length}</span>
                            <span className="userItemTitle">Activities Incomplete</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
