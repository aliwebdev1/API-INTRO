/* const student = {
    name: 'Hanna',
    id: 111,
    age: 16,
    school: 'motijhil ideal',
    food: 'burger'
}

console.log(student.school);
const convertJson = JSON.stringify(student);
const convertObject = JSON.parse(convertJson)

console.log(convertObject); */

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json.title))
}









function loadUsaer() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUsers(data))
}


loadUsaer()

function displayUsers(users) {
    // console.log(users);
    const ol = document.getElementById('usersId');

    for (const user of users) {
        console.log(user);
        const li = document.createElement('li');
        li.innerHTML = `
        <h2>${user.id}</h2>
        <h4>${user.name}</h4>
        <p>${user.email}</p>
        <p>${user.address.city}</p>
        `
        ol.appendChild(li)
    }

}



