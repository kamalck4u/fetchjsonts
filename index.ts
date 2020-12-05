import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
    title: String,
    userId: Number,
    completed: boolean
}

axios.get(url).then(function(response) {
    const data = response.data as ToDo;
    const title = data.title;
    const userId = data.userId;
    const completed = data.completed;
    showData(userId, title, completed);
});

function showData(id: Number, title: String, status: boolean) {
    console.log(`This is ${id}
    my title ${title}
    my status ${status}
    `)
}