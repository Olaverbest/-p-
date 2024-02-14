var sectionsOrder = ['QuestUp', 'Profile', 'Quests', 'Friends', 'Settings'];

var navbarLinks = document.querySelectorAll('.navbar a');

const indicator = document.querySelector(".indicator");

navbarLinks.forEach(function(link, index) {
	link.addEventListener('click', function(e) {
		e.preventDefault();

		var currentActiveSection = document.querySelector('.content-item.active');
		var currentActiveLink = document.querySelector('.navbar .active');

		var newActiveSection = document.getElementById(this.dataset.name);
		var newActiveLink = this.parentNode;

		var currentIndex = sectionsOrder.indexOf(currentActiveSection.id);
		var newIndex = sectionsOrder.indexOf(newActiveSection.id);

		var direction = newIndex > currentIndex ? 'left' : 'right';

		currentActiveSection.style.left = direction === 'left' ? '-125%' : '125%';
		newActiveSection.style.left = '15%';

		currentActiveSection.classList.remove('active');
		newActiveSection.classList.add('active');
		currentActiveLink.classList.remove('active');
		newActiveLink.classList.add('active');

		document.getElementById('optionName').textContent = this.dataset.name;

		var linkWidth = this.offsetWidth;
		var indicatorPosition = index * linkWidth;
		indicator.style.transform = `translateX(${indicatorPosition}px)`;
	});
});
