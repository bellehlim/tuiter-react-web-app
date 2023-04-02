import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {useParams} from "react-router";
import React from "react";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer}});
function Tuiter() {
  const {page} = useParams()
  return (
      <Provider store={store}>
        <div>
          <Nav/>
          <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
              <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
              { page === 'explore' ? <ExploreComponent/> : <HomeComponent/> }
            </div>
            <div
                className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <WhoToFollowList/>
            </div>
          </div>
        </div>
      </Provider>
  )
}
export default Tuiter