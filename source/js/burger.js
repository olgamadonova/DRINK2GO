const burgerBtn = document.querySelector('.burger-wrapper');
console.log(burgerBtn);
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav');
const userNavigation = document.querySelector('.user-nav');
const headerOverlay = document.querySelector('.header-overlay');

navigation.classList.remove('nav--no-js');

const onWindowClickHideMobileMenu = (evt) => {
  if(!evt.target.closest('.nav.nav__js-open') && !burgerBtn.contains(evt.target)) {
    navigation.classList.remove('nav--js-open');
    burgerBtn.classList.remove('burger--open');
    burger.classList.remove('burger--open');
    userNavigation.classList.toggle('nav--js-open', false);
    headerOverlay.classList.remove('header-overlay--active');
  }
}

function onMobileMenuExitEsc (evt) {
  evt.preventDefault();
  if (evt.key === 'Escape' && burgerBtn.classList.contains('burger--open') && navigation.classList.contains('nav--js-open')) {
    navigation.classList.remove('nav--js-open');
    burgerBtn.classList.remove('burger--open');
    burger.classList.remove('burger--open');
    userNavigation.classList.toggle('nav--js-open', false);
    headerOverlay.classList.remove('header-overlay--active');
  }
  document.removeEventListener('keydown', onMobileMenuExitEsc);
}

function toggleMobileMenu (evt)  {
  const element = evt.target.closest('.burger-wrapper');
  if (!element) {
    return;
  }
  if (burgerBtn.classList.contains('burger--open') && navigation.classList.contains('nav--js-open')) {
    navigation.classList.remove('nav--js-open');
    burgerBtn.classList.remove('burger--open');
    burger.classList.remove('burger--open');
    userNavigation.classList.toggle('nav--js-open', false);
    headerOverlay.classList.remove('header-overlay--active');
    window.removeEventListener('keydown', onMobileMenuExitEsc);
    window.removeEventListener('click', onWindowClickHideMobileMenu);
  } else {
    navigation.classList.add('nav--js-open');
    burgerBtn.classList.add('burger--open');
    burger.classList.add('burger--open');
    userNavigation.classList.toggle('nav--js-open', true);
    headerOverlay.classList.add('header-overlay--active');
    window.addEventListener('keydown', onMobileMenuExitEsc);
    window.addEventListener('click', onWindowClickHideMobileMenu);
  }
}

burgerBtn.addEventListener('click', toggleMobileMenu);
