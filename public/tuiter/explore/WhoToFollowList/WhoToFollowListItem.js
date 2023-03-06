const WhoToFollowListItem = (who) => {
  return(`
        <li class="list-group-item">
        <div class="row align-items-center">
          <div class="col-2">
            <img class = "wd-user-icon" src='../../images/${who.avatarIcon}'"/>
          </div>
          <div class="col-8">
            <p class = "wd-bold-text small wd-no-bottom-border">
              ${who.userName} <i class="fa fa-check-circle"></i></p>
            <p class = "small wd-no-bottom-border">
              ${who.handle}</p>
          </div>
          <div class="col-2">
            <button class="btn wd-primary-button bg-primary">Follow</button>
          </div>
        </div>
      </li>
  `);
}
export default WhoToFollowListItem;