// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response=>response.json())
// .then(
//         (data)=>{
//             var htmls = data.map(
//                 function(posts){
//                         return `<li> 
//                             <h2>${posts.id}</h2>
//                             <h2>${posts.title}</h2>
//                             </li>`
//             }
//             );
//             var html = htmls.join();
//             var text = document.getElementById('info').innerHTML
//                 = html;            
//         }
//     )
// .catch(()=>console.log('Có lỗi!'))


//-------------------------------------------------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));


//-------------------------------------------------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.json())
//             .then((json) => console.log(json));


//--------------------------------------------------fetch put--------------------------------------
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


//--------------------------------------------fetch delete-----------------------------------------
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
  
