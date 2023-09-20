fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted=json.reduce((arr,todo)=>{
        if(!todo.completed)  {
        arr.userId.push(todo.userId),
        arr.title.push(todo.title)
    }
        return arr;
        },{userId:[],title:[]})
         console.log(uncompleted);
    });
   

