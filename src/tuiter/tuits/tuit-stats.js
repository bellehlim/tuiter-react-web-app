import React from "react";
import {updateTuitLikes} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
      tuit = {
        "_id": "123",
        "liked": true,
        "replies": 123,
        "retuits": 456,
        "likes": 100
      }
    }
) => {
  const dispatch = useDispatch();
  const updateLikeHandler = (id) => {
    dispatch(updateTuitLikes(id))
  }
  return(
        <div className="row">
          <div className="col-3 bi-chat">&nbsp;{tuit.replies}</div>
          <div className="col-3 bi-arrow-repeat">&nbsp;{tuit.retuits}</div>
          {tuit.liked ?
              <div onClick={() => updateLikeHandler(tuit._id)} className="col-3 bi-heart-fill" style={{ color: "red" }}>&nbsp;{tuit.likes}</div> :
              <div onClick={() => updateLikeHandler(tuit._id)} className="col-3 bi-heart">&nbsp;{tuit.likes}</div>}
          <div className="col-3 bi-share"></div>
        </div>
  );
};
export default TuitStats;