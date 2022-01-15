import firebase from 'firebase/app'
import 'firebase/firestore'

const configOptions = {
	'apiKey': process.env.API_KEY,
	'projectId': 'testtribs'
}

export const db = firebase
  .initializeApp(configOptions)
  .firestore()


const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

