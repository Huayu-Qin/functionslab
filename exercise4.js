fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const Completed = json.reduce((acc, todo) =>
            todo.completed ? acc + 1 : acc, 0)
        console.log(Completed)
    })
    .catch(function (err) {
        console.log(err);
    });