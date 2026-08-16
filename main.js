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

