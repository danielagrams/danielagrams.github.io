let visitorCount = localStorage.getItem('visitorCount') || 0;
const visitorCounterElement = document.getElementById('count');
visitorCounterElement.textContent = visitorCount;

window.onload = function () {
    if (localStorage.getItem('hasRefreshed')) {
        localStorage.removeItem('hasRefreshed');
        const increase = confirm("Do you want the visitor counter to go up again?");
        if (increase) {
            visitorCount++;
            localStorage.setItem('visitorCount', visitorCount);
            visitorCounterElement.textContent = visitorCount;
        }
    } else {
        localStorage.setItem('hasRefreshed', true);
    }
};
