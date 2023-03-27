import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useParams} from "react-router";

function NavigationSidebar() {
  const page = useParams().page
  const active = page == null ? "home" : page
  console.log(active);
  return (
      <div className="list-group">
        <li className="list-group-item">
          <i className="col-2 bi-twitter wd-float-left"></i>
        </li>
        <a className={`list-group-item
                    ${active === 'home' ?'active':''}`}
           href='/tuiter-deprecated'>
          <i className="col-2 bi-house-door-fill wd-float-left"></i>
          <div className="col-10 d-none d-xl-inline wd-subheader-text"> Home </div>
        </a>
        <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}
          href='/tuiter-deprecated/explore'>
          <i className="col-2 bi-hash wd-float-left"></i>
          <div className="col-10 d-none d-xl-inline wd-subheader-text"> Explore </div>
        </a>
        <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
          <i className="col-2 bi-bell-fill wd-float-left"></i>
          <div className="col-10 d-none d-xl-inline wd-subheader-text"> Notifications </div>
        </a>
        <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
          <i className="col-2 bi-envelope-fill wd-float-left"></i>
          <div className="col-10 d-none d-xl-inline wd-subheader-text"> Messages </div>
        </a>
        <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
          <i className="col-2 bi-bookmark-fill wd-float-left"></i>
          <div className="col-10 d-none d-xl-inline wd-subheader-text"> Bookmarks </div>
        </a>
        <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
          <i className="col-2 bi-list-ul wd-float-left"></i>
          <div className="col-10 d-none d-xl-inline wd-subheader-text"> Lists </div>
        </a>
        <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
          <i className="col-2 bi-person-fill wd-float-left"></i>
          <div className="col-10 d-none d-xl-inline wd-subheader-text"> Profile </div>
        </a>
        <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          <i className="col-2 bi-three-dots wd-float-left"></i>
          <div className="col-10 d-none d-xl-inline wd-subheader-text"> More </div>
        </a>
      </div>
  )
}
export default NavigationSidebar;