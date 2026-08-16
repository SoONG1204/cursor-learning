const themeButton = document.querySelector('#toggle-theme');
const html = document.documentElement;
const THEME_KEY = 'theme';

function setTheme(theme) {
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }

  localStorage.setItem(THEME_KEY, theme);
  themeButton.textContent = theme === 'dark' ? '切换浅色模式' : '切换深色模式';
}

function getTheme() {
  return html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

const savedTheme = localStorage.getItem(THEME_KEY);
setTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeButton.addEventListener('click', function () {
  const nextTheme = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
});

const toggleButton = document.querySelector('#toggle-skills');
const skillsList = document.querySelector('#skills-list');

toggleButton.addEventListener('click', function () {
  skillsList.classList.toggle('hidden');
  if (skillsList.classList.contains('hidden')) {
    toggleButton.textContent = '显示技能';
  } else {
    toggleButton.textContent = '隐藏技能';
  }
});
