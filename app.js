const get = (dom) => document.querySelector(dom);

const NAVIGAGTION_ACTIVE_KEY = 'navigation-active-key';

class Navigation {
  constructor(target, trigger) {
    this.target = target;
    this.trigger = trigger;
    this.active = null;
  }

  setActivity() {
    const isActive = localStorage.getItem(NAVIGAGTION_ACTIVE_KEY);

    this.active = isActive === 'true';
  }

  toggleNavigation = () => {
    this.target.classList.toggle('active');
    this.active = !this.active;
    console.log(this.active);
    localStorage.setItem(NAVIGAGTION_ACTIVE_KEY, this.active);
  };

  init = () => {
    this.setActivity();

    this.trigger.addEventListener('click', this.toggleNavigation);

    if (this.active) {
      this.target.classList.add('active');
    }
  };
}

const finishPreload = () => {
  const body = get('body');

  body.classList.remove('preload');
  body.style.visibility = 'visible';
};

const init = () => {
  const toggleNavButtonDOM = get('.toggle');
  const navigationDOM = get('nav');

  const navigation = new Navigation(navigationDOM, toggleNavButtonDOM);

  navigation.init();

  window.addEventListener('load', finishPreload);
};

init();
