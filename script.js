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
