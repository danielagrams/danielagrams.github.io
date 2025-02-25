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

// Handling visitor counter popup for first refresh only
if (!sessionStorage.getItem('visited')) {
    sessionStorage.setItem('visited', 'true');
    document.getElementById('popup').style.visibility = 'visible';
}

document.getElementById('yesButton').addEventListener('click', () => {
    let counter = localStorage.getItem('visitorCount') || 0;
    counter++;
    localStorage.setItem('visitorCount', counter);
    document.getElementById('visitorCount').textContent = `Visitors: ${counter}`;
    document.getElementById('popup').style.visibility = 'hidden';
});

document.getElementById('noButton').addEventListener('click', () => {
    document.getElementById('popup').style.visibility = 'hidden';
});
