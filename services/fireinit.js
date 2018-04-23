import * as firebase from 'firebase/app'
import 'firebase/database'

var config = {
  databaseURL: process.env.baseUrl,
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const DB = firebase.database();
export default firebase