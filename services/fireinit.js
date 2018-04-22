import * as firebase from 'firebase/app'
import 'firebase/database'

var config = {
  databaseURL: 'https://kas23-757ee.firebaseio.com/',
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const DB = firebase.database();
export default firebase