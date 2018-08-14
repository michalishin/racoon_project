import firebase from 'firebase/app'
import 'firebase/auth'
import Vue from 'vue'
const config = {
  apiKey: 'AIzaSyBevbEJ6oWm4Ajr1mIdZSLIWCn3jYwtvJE',
  authDomain: 'raccondb.firebaseapp.com',
  databaseURL: 'https://raccondb.firebaseio.com',
  projectId: 'raccondb',
  storageBucket: 'raccondb.appspot.com',
  messagingSenderId: '496716434120'
}

firebase.initializeApp(config)

Vue.prototype.$firebase = firebase

export default new Promise(resolve => {
  firebase.auth().onAuthStateChanged(() => {
    resolve()
  })
})
