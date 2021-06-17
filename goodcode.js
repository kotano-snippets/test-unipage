function ServiceUser(service, username, password) {
  this.username = username;
  // Make password changeable but not observable from outside
  let pass = password;
  Object.defineProperty(this, 'password', {
    get() { throw new Error('You are not allowed to get password'); },
    set(value) { pass = value; },
  });
  this.authenticate = () => service.authenticate(
    username, pass,
  );
}

class UserService {
  static authenticate(username, password) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData,
      },
    );
  }

  // Make it a getter to be able to call it without parentheses
  static get User() {
    // Bind this service to ServiceUser
    return ServiceUser.bind({}, UserService);
  }
}

const formElem = document.forms[0];

formElem.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(formElem);
  const username = formData.get('username');
  const password = formData.get('password');
  // const errors = validate({username, password})
  // do smth
  const user = new UserService.User(username, password);
  try {
    console.log(user.password);
  } catch (error) {
    console.log(error);
  }
  user.password = 'Changed password';
  const response = await user.authenticate();
  if (response.ok) {
    setTimeout(() => { window.location.href = '/home.html'; }, 1000);
  } else {
    alert(response.statusText);
  }
});
