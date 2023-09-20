fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completedQuantity=json.reduce((count,todo)=>{
        if (todo.completed)
            return count+1;
        else
            return count;
        
     },0)
    console.log(completedQuantity)
  })