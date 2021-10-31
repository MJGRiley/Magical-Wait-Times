const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (name && password) {
      const response = await fetch(`/api/`, {
        method: 'GET',
        body: JSON.stringify({ name, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/user');
      } else {
        alert('Failed to create project');
      }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/ride/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.replace('/user');
      } else {
        alert('Failed to delete project');
      }
    }
};