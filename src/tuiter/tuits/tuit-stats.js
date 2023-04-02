import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
      tuit = {
        "_id": "123",
        "liked": true,
        "disliked": false,
        "replies": 123,
        "retuits": 456,
        "likes": 100,
        "dislikes": 100
      }
    }
) => {
  return(
        <div className="row">
          <div className="col-2 bi-chat">&nbsp;{tuit.replies}</div>
          <div className="col-2 bi-arrow-repeat">&nbsp;{tuit.retuits}</div>
          {tuit.liked ?
              <div onClick={() => updateTuitThunk({
                ...tuit,
                liked: !tuit.liked,
                likes: tuit.likes - 1
              })} className="col-2 bi-heart-fill text-danger">&nbsp;{tuit.likes}</div> :
              <div onClick={() => updateTuitThunk({
                ...tuit,
                liked: !tuit.liked,
                likes: tuit.likes + 1
              })} className="col-2 bi-heart-fill">&nbsp;{tuit.likes}</div>}
          {tuit.disliked ?
              <div onClick={() => updateTuitThunk({
                ...tuit,
                disliked: !tuit.disliked,
                dislikes: tuit.dislikes - 1
              })} className="col-2 bi-hand-thumbs-down-fill text-danger">&nbsp;{tuit.dislikes}</div> :
              <div onClick={() => updateTuitThunk({
                ...tuit,
                disliked: !tuit.disliked,
                likes: tuit.dislikes + 1
              })} className="col-2 bi-hand-thumbs-down">&nbsp;{tuit.dislikes}</div>}
          <div className="col-2 bi-share"></div>
        </div>
  );
};
export default TuitStats;