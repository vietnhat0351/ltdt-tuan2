axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',

})
    .then(response => {
        let data = response.data;
        var todoData = document.getElementById('info');
        let todoList = '';
        for(let i = 0; i < data.length; i++) {
            todoList += '<strong>Task ' + data[i].id + ':</strong> ' + data[i].title + '<br>';
        }
        todoData.innerHTML = todoList;
        console.log(data);
    }).catch(function (error) {
        console.error('Error fetching data: ' + error);
    });
