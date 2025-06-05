const btn = document.getElementById('generate');
const userDisplay = document.querySelector('#user');
function generateUser() {
  showSpinner();
  fetch('https://randomuser.me/api/')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Request Failed');
      }
      return res.json();
    })
    .then((data) => {
      hideSpinner();
      displayUser(data.results[0]);
    })
    .catch((error) => {
      hideSpinner();
      userDisplay.innerHTML = `<p class = "text-xl text-center text-red-500 mb-5">${error}</p>`;
    });
}

function displayUser(user) {
  console.log(user);

  const container = document.createElement('div');
  container.className = 'flex justify-center';
  const imgContainer = document.createElement('div');
  imgContainer.className = 'flex';
  const img = document.createElement('img');
  img.className = 'w-48 h-48 rounded-full mr-8';
  img.setAttribute('src', `${user.picture.large}`);
  const txtContainer = document.createElement('div');
  txtContainer.className = 'space-y-3 text-xl';
  const name = document.createElement('p');
  name.innerHTML = `<span class="font-bold">Name: </span>${user.name.first} ${user.name.last}`;
  const email = document.createElement('p');
  email.innerHTML = `<span class="font-bold">Email: </span> ${user.email}`;
  const phone = document.createElement('p');
  phone.innerHTML = `<span class="font-bold">Phone: </span> ${user.phone}`;
  const location = document.createElement('p');
  location.innerHTML = `  <span class="font-bold">Location: </span> ${user.location.city} ${user.location.state}`;
  const dob = document.createElement('p');
  dob.innerHTML = `<span class="font-bold">Age: </span> ${user.dob.age}`;
  txtContainer.appendChild(name);
  txtContainer.appendChild(email);
  txtContainer.appendChild(phone);
  txtContainer.appendChild(location);
  txtContainer.appendChild(dob);
  imgContainer.appendChild(img);
  container.appendChild(imgContainer);
  container.appendChild(txtContainer);
  userDisplay.innerHTML = null;
  userDisplay.appendChild(container);
  user.gender === 'female'
    ? (document.body.style.background = 'rebeccapurple')
    : (document.body.style.background = 'steelblue');
}

function showSpinner() {
  document.querySelector('#spinner').style.display = 'block';
}

function hideSpinner() {
  document.querySelector('#spinner').style.display = 'none';
}
btn.addEventListener('click', generateUser);
