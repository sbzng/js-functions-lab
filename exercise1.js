fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter(todo=>todo.completed===true); // Complete this code
     completed.forEach( (todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });