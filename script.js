const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

const navAnimation = (direction1, direction2) => {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
};

const toggleNav = () => {
  // toggle class "change"
  menuBars.classList.toggle('change');

  // toggle menu
  overlay.classList.toggle('showNav');

  if (overlay.classList.contains('showNav')) {
    overlay.classList.add('active');
    navAnimation('out', 'in');
  } else {
    overlay.classList.remove('active');
    navAnimation('in', 'out');
  }
};

// event listeners
menuBars.addEventListener('click', toggleNav);

navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});
