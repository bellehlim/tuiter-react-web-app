const ExploreComponent = () => {
  return (`
      <div class="wd-search-bar-section row">
      <div class="wd-search-bar col-11">
        <div class="input-group wd-search-input">
          <i class="input-group-text fa fa-search"></i>
          <input type="text" class="form-control" placeholder="Search Twitter">
        </div>
      </div>
      <a class = "wd-gear-icon col-1" href="explore-settings.html"><i class="fa fa-cog fa-2x"></i></a>
    </div>
    
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">For You</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sports</a>
      </li>
      <li class="nav-item d-none d-md-block">
        <a class="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
    
    <div class="container-fluid">
        <img src="../media/starship.jpeg" class="card-img-top">
        <p class="bottom-right">SpaceX's Starship</p>
     </div>
  `)
}
export default ExploreComponent;