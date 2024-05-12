const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// Calculations
const currentYear = new Date().getFullYear(); // 2020
const nextYear = new Date(`August 24 ${currentYear} 00:00:00`);

// Set year
year.innerText = currentYear + 1;

/**
 * Calculates and updates countdown data in header
 * @method updateCounter
 * @returns void
 * */
function updateCounter() {
	const currentTime = new Date();
	const diff = nextYear - currentTime;

	const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
	const secondsLeft = Math.floor(diff / 1000) % 60;

	days.innerText = daysLeft;
	hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
	minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

// Run timer
setInterval(updateCounter, 1000);