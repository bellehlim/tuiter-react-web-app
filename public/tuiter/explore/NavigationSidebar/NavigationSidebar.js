const NavigationSidebar = () => {
  return(`
<div>
    <ul class="list-group">
      <li class="list-group-item">
        <i class="fab fa-twitter"></i>
      </li>
      <li class="list-group-item">
        <div class="row align-items-center">
          <i class="col-2 fa fa-home wd-float-left"></i>
          <div class = "col-10 d-none d-xl-inline wd-subheader-text">Home</div>
        </div>
      </li>
      <li class="list-group-item active">
        <div class="row align-items-center">
          <i class="col-2 fa fa-hashtag wd-float-left"></i>
          <div class = "col-10 d-none d-xl-inline wd-subheader-text">Explore</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row align-items-center">
          <i class="col-2 fa fa-bell wd-float-left"></i>
          <div class = "col-10 d-none d-xl-inline wd-subheader-text">Notifications</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row align-items-center">
          <i class="col-2 fa fa-envelope wd-float-left"></i>
          <div class = "col-10 d-none d-xl-inline wd-subheader-text">Messages</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row align-items-center">
          <i class="col-2 fa fa-bookmark wd-float-left"></i>
          <div class = "col-10 d-none d-xl-inline wd-subheader-text">Bookmarks</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row align-items-center">
          <i class="col-2 fa fa-list wd-float-left"></i>
          <div class = "col-10 d-none d-xl-inline wd-subheader-text">Lists</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row align-items-center">
          <i class="col-2 fa fa-user wd-float-left"></i>
          <div class = "col-10 d-none d-xl-inline wd-subheader-text">Profile</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row align-items-center">
          <i class="col-2 fas fa-ellipsis-h wd-float-left"></i>
          <div class = "col-10 d-none d-xl-inline wd-subheader-text">More</div>
        </div>
      </li>
    </ul>

    <button type="button" class="btn wd-primary-button bg-primary">Tuit</button>
  </div>
   `);
}
export default NavigationSidebar;