const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg'];

/* Declaring the alternative text for each image file */
const altText = {
  'pic1.jpeg': 'Shmutzie with her sister lulu',
  'pic2.jpeg': 'Shmutzie with her IU jersey',
  'pic3.jpeg': 'Shmutzie on a boat with my sister',
  'pic4.jpeg': 'Smutzie playing in the snow',
  'pic5.jpeg': 'Shmutzie as a puppy with a tennis ball in her mouth'
};

/* Looping through images */
for (const filename of imageFilenames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `/img/${filename}`);
  newImage.setAttribute('alt', altText[filename]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', (e) => {
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
    displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});