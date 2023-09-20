fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     /*const completedNum=json.reduce((num,todo)=>{
       if(todo.completed){
        if(!num[todo.userId]){
            num[todo.userId]=0
        }
         num[todo.userId]++
       }
       return num;

     },{})

     for (const userId in completedNum)
     //console.log(userId+':'+completedNum[userId])
     console.log( ` ${userId} : ${completedNum[userId]} `)
*/
    const completedNum = json.reduce((num, todo) => {
      if (todo.completed) {
        if (!num[todo.userId]) {
          num[todo.userId] = 0;
        }
        
        num[todo.userId]++;
      }
      return num;
    }, {});

    console.log(completedNum);
  })