import * as firebase from 'firebase';
import expenses from '../selectors/expenses';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, firebase, database as default };

// // child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child removed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child added 
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
// // const processSnapshot = (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   });
// //   console.log(expenses);
// // }


// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => processSnapshot(snapshot));

// // const onValueChange = database.ref('expenses').on('value', (snapshot) => processSnapshot(snapshot));


// const expensesList = [
//   {
//     description: 'Expense 1',
//     note: 'Note 1',
//     amount: 1,
//     createdAt: 1001
//   },
//    {
//     description: 'Expense 2',
//     note: 'Note 2',
//     amount: 2,
//     createdAt: 1002
//   },
//    {
//     description: 'Expense 3',
//     note: 'Note 3',
//     amount: 3,
//     createdAt: 1003
//   }
// ];



// // for (let index = 0; index < expensesList.length; index++) {
// //   const element = expensesList[index];
// //   database.ref('expenses').push(element);
// // }


// // database.ref('notes/-LC3hK9e5HaYy5-1AEm9').update({
// //   body: 'buy food'
// // });

// // database.ref('notes').push({
// //   title: 'todo',
// //   body: 'go for a run'
// // });

// // database.ref('location/city')
// // .once('value')
// // .then((snapshot) => {
// //   const val = snapshot.val();
// //   console.log('Data snapshot', val);
// // })
// // .catch((e) => {
// //   console.log('Error fetching data:', e)
// // })

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetch:', e);
// // })

// // setTimeout(() => {
// //   database.ref('age').set(28);
// // }, 2500);
// // setTimeout(() => {

// //   database.ref().off('value', onValueChange);
// // }, 4000);

// // setTimeout(() => {
// //   database.ref('age').set(30);
// // }, 5500);
// // database.ref().on('value', (snapshot) => {
// //   const data = snapshot.val();
// //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// // })

// // setTimeout(() => {
// //   database.ref().update({
// //     name: 'Mark',
// //     'job/company': 'Google'
// //   })
// // }, 2000);


// // database.ref().set({
// //   name: 'Matthew Keen', 
// //   age: 33,
// //   job: {
// //     title: 'Software Developer',
// //     company: 'Google'
// //   }
// //   ,
// //   stressLevel: 6,
// //   location: {
// //     city: 'Huddersfield',
// //     country: 'UK'
// //   }
// // }).then(() => {
// //   console.log('Data is saved')
// // }).catch((e) => {
// //   console.log('This failed', e);
// // });


// //database.ref('isSingle').set(null);

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // })

// //firebase.database().ref().set('this is my data');
// // database.ref('age').set(27)

// // database.ref('location/city').set('New York');

// // database.ref('attributes').set(
// //   {
// //     height: 168,
// //     weight: 155
// //   }).then(() => {
// //     console.log('Data was saved');
// //   }).catch((e) => {
// //     console.log('Error:', e);
// //   })

// console.log('I made a request to change the data');
// // database.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Is single was removed');
// //   })
// //   .catch((e) => {
// //     console.log('isSingle Remove failed', e)
// //   });