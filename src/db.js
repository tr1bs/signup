import firebase from 'firebase/app'
import 'firebase/firestore'
import sgMail from '@sendgrid/mail'

const configOptions = {
	'apiKey': process.env.VUE_APP_API_KEY,
	'projectId': 'testtribs'
}

const db = firebase
  .initializeApp(configOptions)
  .firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

sgMail.setApiKey(process.env.VUE_APP_SENDGRID_API_KEY)

export { sgMail, db }