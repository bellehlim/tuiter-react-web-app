import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = (
    {
      tuit =   {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img className="float-end rounded-circle border"
                 src={`/images/${tuit.image}`} width={50}/>
          </div>
          <div className="col-10">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}>
            </i>
            <h className="fw-bolder">{tuit.userName}</h>
            &nbsp;
            <h className="bi-check-circle-fill" style={{ color: "blue" }}></h>
            &nbsp;
            <h className="wd-tuit-detail-text">{tuit.handle} . {tuit.time}</h>

            <div>{tuit.title}</div>
          </div>
        </div>
        <TuitStats key={tuit._id} tuit={tuit}/>
      </li>
  );
};
export default TuitItem;