fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted=json.reduce((arr,todo)=>{
        if(!todo.completed)  {
            //arr.push(`userId:${todo.userId}  title:"${todo.title}"`)
            arr.push({userId:todo.userId,title:todo.title});
    }
        return arr;
        },[])

   
    console.log(uncompleted);
  
    });
   

   