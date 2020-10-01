import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAoSzlmRePgui3nxEY_diG2VcW_uTrJryQ',
  authDomain: 'ninja-smoothies-8369b.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-8369b.firebaseio.com',
  projectId: 'ninja-smoothies-8369b',
  storageBucket: 'ninja-smoothies-8369b.appspot.com',
  messagingSenderId: '157999398024',
  appId: '1:157999398024:web:89a8321d4940a87b32333d',
  measurementId: 'G-765Q8BNP8E'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

//export default firebaseApp.firestore()
export default {
  getSmoothies() {
    let smoothies = []
    let smoothie = {}
    firebaseApp
      .firestore()
      .collection('smoothies')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          smoothie = doc.data()
          smoothie.id = doc.id
          smoothies.push(smoothie)
        })
      })
    return smoothies
  },
  deleteSmoothieById(id) {
    firebaseApp
      .firestore()
      .collection('smoothies')
      .doc(id)
      .delete()
  }
}
