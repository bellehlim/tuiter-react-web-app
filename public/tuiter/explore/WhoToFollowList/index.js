import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
  return(`
      <ul class="list-group">
        <li class="list-group-item wd-bold-text">
          Who to follow
        </li>
         ${
      who.map(who => {
        return(WhoToFollowListItem(who));
      }).join('')
  }
      </ul>
   `);
}
export default WhoToFollowList;

$('#wd-test').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${WhoToFollowList()}
   </div>
`);