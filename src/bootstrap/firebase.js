import firebase from 'firebase/app'
import 'firebase/auth'
import Vue from 'vue'
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

Vue.prototype.$firebase = firebase

export default new Promise(resolve => {
  firebase.auth().onAuthStateChanged(() => {
    resolve()
  })
})
