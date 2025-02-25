// Check for page reload using performance API
function isPageReloaded() {
    return performance.navigation.type === performance.navigation.TYPE_RELOAD;
}

// Set visitor count if not already set
if (!localStorage.getItem('visitorCount')) {
    const visitorCount = Math.floor(Math.random() * 1000) + 1; // Random count between 1 and 1000
    localStorage.setItem('visitorCount', visitorCount);
}

document.getElementById('count').textContent = localStorage.getItem('visitorCount');

// Handling the popup logic
if (isPageReloaded() && !localStorage.getItem('popupShown')) {
    // Show popup on refresh
    document.getElementById('popup').style.visibility = 'visible';

    // Mark that the popup has been shown
    localStorage.setItem('popupShown', 'true');
}

// Handle "Yes" and "No" for the popup
document.getElementById('yes-button').addEventListener('click', () => {
    // Increase the visitor count when the user clicks "Yes"
    let count = parseInt(localStorage.getItem('visitorCount')) + 1;
    localStorage.setItem('visitorCount', count);
    document.getElementById('count').textContent = count;

    // Hide the popup
    document.getElementById('popup').style.visibility = 'hidden';
});

document.getElementById('no-button').addEventListener('click', () => {
    // Just hide the popup if the user clicks "No"
    document.getElementById('popup').style.visibility = 'hidden';
});

// Reset popupShown flag if localStorage was cleared or after a period
setInterval(() => {
    localStorage.removeItem('popupShown');
}, 10000);  // Example: reset flag every 10 seconds (optional)



// Tab Switching Logic
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const activeTab = button.getAttribute('data-tab');
        document.getElementById(activeTab).classList.add('active');
    });
});

// Initialize first tab as active
document.querySelector('.tab-button').click();

// Generate sparkles in random positions
function generateSparkles() {
    const sparkleContainer = document.querySelector('.sparkles');
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.animationDuration = Math.random() * 3 + 1 + 's'; // Randomize sparkle speed
        sparkleContainer.appendChild(sparkle);
    }
}

// Call the sparkle function when the page loads
window.onload = function() {
    generateSparkles();
};
