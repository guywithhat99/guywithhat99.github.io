document.getElementById('fetch-comic').addEventListener('click', function() {
    // Generate a random comic number between 1 and 3000
    const comicNumber = Math.floor(Math.random() * 3000) + 1;

    // Build the API URL with the proxy
    const apiUrl = `https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`;

    // Fetch the comic data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Comic not found');
            }
            return response.json();
        })
        .then(data => {
            // Update the title
            document.getElementById('comic-title').innerText = data.title;

            // Update the image and alt text
            const imgElement = document.getElementById('comic-image');
            imgElement.src = data.img;
            imgElement.alt = data.alt;

            // Update the publication date
            const date = `${data.month}/${data.day}/${data.year}`;
            document.getElementById('comic-date').innerText = `Published on: ${date}`;
        })
        .catch(error => {
            console.error(error);
            alert(`Failed to load comic number ${comicNumber}. Please try again.`);
        });
});