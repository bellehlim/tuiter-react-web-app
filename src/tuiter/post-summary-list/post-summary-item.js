import React from "react";
import "./index.css";

const PostSummaryItem = (
    {
      post = {
        "topic": "Science!",
        "userName": "Elon",
        "time": "2h",
        "title": "I am a template",
        "image": "tesla.png"
      }
    }
) => {
  return(
      <li className="list-group-item wd-tweet-container">
        <div className="row">
          <div className="col-10">
            <div className="wd-tuit-detail-text">{post.userName} . {post.time}</div>
            <div className="fw-bolder">{post.topic}</div>
            <div>{post.title}</div>
          </div>
          <div className="col-2">
            <img width={70} className="float-end rounded-3 wd-thumbnail" src={`/images/${post.image}`}/>
          </div>
        </div>
      </li>
  );
};
export default PostSummaryItem;