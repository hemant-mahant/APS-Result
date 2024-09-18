let jsonData = [];

document.addEventListener('DOMContentLoaded', function() {
    // fetch('data.json')
    fetch('../json/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            jsonData = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    fetchUserData(searchInput);
});

function fetchUserData(searchInput) {
    const user = jsonData.find(user =>
        // user["Roll Number"] === parseInt(searchInput) || user.Name.toLowerCase() === searchInput.toLowerCase()
        user["Roll Number"] === parseInt(searchInput)
    );
    if (user) {
        document.getElementById('modalContent').innerHTML = `
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td class="table_heading">Name</td>
                    <td class="table_data"><b>${user.Name}</b></td>
                </tr>
                <tr>
                    <td class="table_heading">Roll Number</td>
                    <td class="table_data">${user["Roll Number"]}</td>
                </tr>
                <tr>
                    <td class="table_heading">Class</td>
                    <td class="table_data">${user.Class} ${user.Section}</td>
                </tr>
                <tr>
                    <td class="table_heading">Attendance</td>
                    <td class="table_data">${user["Attendance"]}</td>
                </tr>
                <tr>
                    <td class="table_heading">Final Marks</td>
                    <td class="table_data"><b>${user["Final Marks"]}</b> out of ${user["Total"]}</td>
                </tr>
                <tr>
                    <td class="table_heading">Result</td>
                    <td class="table_data"><b>${user["Result"]}</b></td>
                </tr>

            </table>
                `;
        showModal();
    } else {
        document.getElementById('modalContent').innerHTML = '<p>Invalid input. Please try a valid roll number</p>';
        showModal();
    }
}

function showModal() {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];

    modal.style.display = 'block';

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// <p>Marks Obtained: ${user["Marks Obtained"]}</p>
// <p>Grace: ${user["Grace"]}</p>
// <p>Good Handwriting: ${user["Good Handwriting"]}</p>