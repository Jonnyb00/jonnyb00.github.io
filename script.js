// Personal greeting based on time of day
const homeSection = document.getElementById('home');
const currentHour = new Date().getHours();

let greeting = 'Hello';
if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning';
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Good Afternoon';
} else if (currentHour >= 17 && currentHour < 21) {
    greeting = 'Good Evening';
} else {
    greeting = 'Hello, Night Owl';
}

homeSection.querySelector('h1').textContent = `${greeting}, I'm Flora`;
