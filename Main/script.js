const employeeName = getElementById('name');
const employeeRole = getElementById('role');
const employeeEmail = getElementById('email');

const postData = (employeeForm) =>
    fetch('/api/reviews',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
        body: JSON.striginfy(review)
    })
    .then((res) =>res.json())
    .then((data) => {
        console.log('Employee Information has been posted',data);
        return data;
    })