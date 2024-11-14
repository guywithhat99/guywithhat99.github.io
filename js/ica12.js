const apiEndpoint = 'https://catfact.ninja/fact';

document.getElementById('getFactBtn').addEventListener('click', getFact);

// Fetch a fact when the page loads
document.addEventListener('DOMContentLoaded', getFact);

function getFact() {
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data.fact);
            displayRes(data.fact);
        })
        .catch(error => {
            console.error('Error fetching the cat fact:', error);
            alert('Failed to fetch cat fact.');
        });
}

function displayRes(fact) {
    document.getElementById('fact').innerText = fact;
}