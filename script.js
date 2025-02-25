// Check if there is already a counter in local storage, if not generate a random one
let visitorCount = localStorage.getItem('visitorCount');

if (!visitorCount) {
    // Generate a random number between 1000 and 10000 if no count exists
    visitorCount = Math.floor(Math.random() * (1000 - 1 + 1)) + 1000;
    localStorage.setItem('visitorCount', visitorCount);
}

// Display the visitor count
document.getElementById('count').textContent = visitorCount;

// Popup logic to increment the counter
window.onload = function () {
    // Check if the popup has been shown before
    if (!localStorage.getItem('popupShown')) {
        localStorage.setItem('popupShown', 'true'); // Mark popup as shown
    } else {
        // Display the popup
        document.getElementById('popup').style.visibility = 'visible';
    }

    // Event listener for 'Yes' button to increment the counter
    document.getElementById('yes-button').addEventListener('click', function () {
        visitorCount++;
        localStorage.setItem('visitorCount', visitorCount);
        document.getElementById('count').textContent = visitorCount;
        document.getElementById('popup').style.visibility = 'hidden';
    });

    // Event listener for 'No' button to close the popup without changing the counter
    document.getElementById('no-button').addEventListener('click', function () {
        document.getElementById('popup').style.visibility = 'hidden';
    });
};


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