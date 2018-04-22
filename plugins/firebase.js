// import firebase from 'firebase'
// if (!firebase.apps.length) {
//   firebase.initializeApp(
//     {
//       databaseURL: 'https://kas23-757ee.firebaseio.com/',
//     }
//   )
// }
// export default firebase

import firebase from 'firebase'

const config = {
  databaseURL: 'https://kas23-757ee.firebaseio.com/'
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

export default firebase.database()