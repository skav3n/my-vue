import Firebase from 'firebase'
import config from './firebaseConfig'

const app = Firebase.initializeApp(config)

const db = app.database()
const contractorsRef = db.ref('contractors')

export { db, contractorsRef };
