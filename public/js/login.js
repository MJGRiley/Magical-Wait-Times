const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim(); 
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('youre here')
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('failed to login');
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
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.loginSubmit').addEventListener('submit', loginFormHandler);
document.querySelector('.newUserSubmit').addEventListener('submit', signupFormHandler);
