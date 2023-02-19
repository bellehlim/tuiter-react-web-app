const WhoToFollowListItem = (who) => {
  return(`
        <li class="list-group-item">
        <div class="row align-items-center">
          <div class="col-2 wd-no-side-padding">
            <img class = "wd-user-icon" src="${who.avatarIcon}"/>
          </div>
          <div class="col-6 wd-no-side-padding">
            <p class = "wd-bold-text small wd-no-bottom-border">
              ${who.name} <i class="fa fa-check-circle"></i></p>
            <p class = "small wd-no-bottom-border">
              ${who.userName}</p>
          </div>
          <div class="col-4 wd-no-side-padding">
            <button class="btn wd-primary-button bg-primary">Follow</button>
          </div>
        </div>
      </li>
  `);
}
export default WhoToFollowListItem;