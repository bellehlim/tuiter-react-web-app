import NavigationSidebar from "./NavigationSidebar.js";

function init() {
       $(`#wd-test`).append(`
          <div class="container">
              ${NavigationSidebar()}
          </div>
  `);
}
$(init);
