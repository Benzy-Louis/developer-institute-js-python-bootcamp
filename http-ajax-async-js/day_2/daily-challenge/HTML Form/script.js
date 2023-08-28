/* eslint-disable require-jsdoc */
const form = document.getElementById('loginForm');
form.addEventListener('submit', ((event) => {
  event.preventDefault(); // Crucial to override the default reload of the page
  const formData = new FormData(form);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);

  const dataString = JSON.stringify(data);
  const p = document.createElement('p');
  p.innerText = dataString;
  document.body.appendChild(p);
}));
