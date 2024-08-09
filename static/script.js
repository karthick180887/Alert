document.addEventListener('DOMContentLoaded', function() {
    // Alert Button
    document.getElementById('alertButton').addEventListener('click', function() {
        alert('This is a simple alert!');
    });

    // Confirmation Button
    document.getElementById('confirmButton').addEventListener('click', function() {
        const userConfirmed = confirm('Do you want to proceed?');
        if (userConfirmed) {
            alert('User confirmed the action!');
        } else {
            alert('User canceled the action!');
        }
    });

    // Modal Popup
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];

    document.getElementById('modalButton').addEventListener('click', function() {
        modal.style.display = 'block';
    });

    span.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Form Submission
    document.getElementById('dataForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message + ': ' + data.data);
        });
    });
});
