
const nav_links = document.querySelectorAll(".nav__item-link");
const sub_links = document.querySelectorAll(".sub_link");

function collapse_nav(head, toggler, sidenav) {
  const header = document.getElementById(head);
  const nav_toggler = document.getElementById(toggler);
  const nav = document.getElementById(sidenav);

  nav_toggler.addEventListener("click", function () {
    // alert(24);
    this.classList.toggle("fa-times");
    nav.classList.toggle("collapse");
    document.getElementById('profile').classList.toggle("page-custom");
    document.getElementById('container').classList.toggle("container-custom");
    document.getElementById('container-custom-form').classList.toggle("container-custom");
    document.getElementById("logo-text").classList.toggle("hide-next");
    header.classList.toggle("collapse-header");
  });
}

collapse_nav("header", "nav-toggler", "nav");

nav_links.forEach((link) => {
  link.addEventListener("click", function () {
    nav_links.forEach((l) => {
      if (l.classList.contains("active")) {
        l.classList.remove("active");
      }
    });

    this.classList.toggle("active");
    const sub_menu = this.nextElementSibling;
    if (sub_menu) {
      sub_menu.classList.toggle("d-none");
    }
  });
});

sub_links.forEach((link) => {
  link.addEventListener("click", () => {
    sub_links.forEach((l) => l.classList.remove("active-sub-link"));
    link.classList.toggle("active-sub-link");
  });
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function DropdownFunc() {
  document.getElementById("TopDropdown").classList.toggle("show");
  document.getElementById("dropdownDiv").classList.toggle("border-none");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var topDropdown = document.getElementById("TopDropdown");
    if (topDropdown.classList.contains('show')) {
      topDropdown.classList.remove('show');
    }
  }
}