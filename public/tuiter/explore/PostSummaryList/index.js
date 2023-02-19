import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
  return(`
      <ul>
         ${
      posts.map(posts => {
        return(PostSummaryItem(posts));
      }).join('')
  }
      </ul>
   `);
}
export default PostSummaryList;

$('#wd-test').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${PostSummaryList()}
   </div>
`);