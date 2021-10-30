const loginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim(); 
    const password = document.querySelector('#password').value.trim();
    console.log('js/login ' + username + ' ' + password)
    if (username && password) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Is this true ' + JSON.parse(response.statusText))
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('js/login failed to login '+ response.statusText);
      }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#newUsername').value.trim();
    const password = document.querySelector('#newPassword').value.trim();
    if (username && password) {
        const response = await fetch('/api/login/signup', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/login/signup');
        } else {
            alert('js/login signup ' + response.statusText);
        }
    }
};

document.querySelector('.loginSubmit').addEventListener('submit', loginFormHandler);
document.querySelector('.newUserSubmit').addEventListener('submit', signupFormHandler);