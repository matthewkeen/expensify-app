const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('This is my resolved data.');
    reject('Something went wrong');
  }, 1500);

})
console.log('before');

promise.then((data) => {
  console.log(data)
}).catch((err) => {
  console.log('Error:', err)
})


console.log('after');
