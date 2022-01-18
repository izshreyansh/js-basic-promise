let goals = false;

let isGoalsTrue = new Promise( (resolve, reject) => {
  if(goals) {
    resolve('Goal was achieved')
  }
  reject('The hypothesis was flawed.')
  } 
);


isGoalsTrue
  .then( resp => console.log(resp))
.catch(err => console.log(err))