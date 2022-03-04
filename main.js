let user = []
const getData = () => {
    const users = fetch('db.json')
    users
        .then(response => response.json())
        .then(data => {
            user = [data.user, data.age, data.role]
            sendData(user)
        })
}

const sendData = (user) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: user[0],
            body: user[1] + ' - ' + user[2],
            userId: 1,
        }),
        header: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

getData()
