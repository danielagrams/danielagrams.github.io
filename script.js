// Show the tab content when clicking the tab
function showTab(tabName) {
    // Hide all content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the content for the clicked tab and mark it as active
    document.getElementById(tabName).classList.add('active');
    const activeTab = Array.from(tabs).find(tab => tab.textContent.toLowerCase() === tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}
// 1. Sparkles Effect - Generate Sparkles Dynamically
const sparklesContainer = document.querySelector('.sparkles');

// Number of sparkles to generate
const numberOfSparkles = 100;

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Random position and animation timing for the sparkle
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.animationDuration = `${Math.random() * 3 + 1}s`; // Randomize animation time
    sparkle.style.animationDelay = `${Math.random() * 5}s`; // Randomize delay

    sparklesContainer.appendChild(sparkle);
}

// Create the sparkles
for (let i = 0; i < numberOfSparkles; i++) {
    createSparkle();
}

// 2. Visitor Counter Management with localStorage
// Check if it's the first time or after a refresh
if (!localStorage.getItem('hasVisited')) {
    localStorage.setItem('hasVisited', 'true');
    localStorage.setItem('visitorCount', Math.floor(Math.random() * 1000) + 1); // Set initial random count
}

// Display the visitor count
function updateVisitorCount() {
    const visitorCount = localStorage.getItem('visitorCount');
    document.getElementById('visitorCount').innerText = `Visitors: ${visitorCount}`;
}

// Popup logic for incrementing the counter on refresh
window.onbeforeunload = function () {
    if (localStorage.getItem('hasVisited') === 'true') {
        if (confirm("Do you want the visitor counter to go up again?")) {
            let newCount = parseInt(localStorage.getItem('visitorCount')) + 1;
            localStorage.setItem('visitorCount', newCount);
        }
    }
};

// Update the visitor count on page load
window.onload = function () {
    updateVisitorCount();
};
