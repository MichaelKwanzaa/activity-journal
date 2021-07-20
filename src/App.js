import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar";
import Home from './pages/home/Home';
import Activity from "./pages/activity/Activity"
import ActivityItem from "./pages/activityItem/ActivityItem";
import NewActivity from "./pages/newactivity/NewActivity";
import CompletedItems from "./pages/completeditems/CompletedItems";
import IncompletedItems from "./pages/incompleteditems/IncompletedItems";

import "./app.css";
function App() {
  return (
    <div className="container">
    <Router>
      <Sidebar />
       <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route exact path="/activities">
          <Activity />
        </Route>
        <Route exact path="/activity/:id" component={ActivityItem} />
        <Route exact path="/addnewactivity">
          <NewActivity />
        </Route>
        <Route exact path="/completedactivities">
          <CompletedItems />
        </Route>
        <Route exact path="/incompletedactivities">
          <IncompletedItems />
        </Route>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
