

document.getElementById('login-button').addEventListener('click' , function(){
   const eamil =  document.getElementById('user-email').value;
   const password = document.getElementById('user-password').value;
   if(eamil === 'zubi@gmail.com' && password === 'zubair' ){
      window.location.href = 'bank.html';
   }else{
      alert('tui password vula gasos');
   }
});



// // add amount 

// const depositArea = document.getElementById('add-deposit');
// depositArea.addEventListener('click', function(){
//    console.log('hello world');
// })
