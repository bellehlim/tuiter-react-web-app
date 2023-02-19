const PostSummaryItem = (post) => {
  return(`
        <div class="row wd-tweet-container">
          <div class="col-9">
            <span class="wd-tuit-detail-text"> ${post.topic} </span>
            <p class="wd-tuit-title"> ${post.userName} <i class="fa fa-check-circle"></i>
              <span class="wd-tuit-detail-text"> - ${post.time}</span></p>
            <p class="wd-tuit-title">${post.title}</p>
          </div>
          <div class="col-3 float-end">
            <img src="../media/reactjs.png" class="card-img-top wd-thumbnail">
          </div>
        </div>
  `);
}
export default PostSummaryItem;