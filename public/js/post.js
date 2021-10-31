const postFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('.form-input').value.trim();
    const ride_id = document.querySelector('#ride_id').textContent
    const land_id = document.querySelector('#land_id').textContent
    if (title && description) {
        const response = await fetch('/api/post', {
          method: 'POST',
          body: JSON.stringify({ title, description, ride_id, land_id}),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
        document.location.reload();      
        } else {
          alert('failed to submit post'+ response.statusText);
        }
      }
};



document.querySelector('#new-post-form').addEventListener('submit', postFormHandler);
