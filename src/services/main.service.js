import Firebase from 'firebase';
import config from './firebaseConfig';

const app = Firebase.initializeApp(config);
const db = app.database();

function snapshotToArray(snapshot) {
  var returnArr = [];
  snapshot.forEach(function(childSnapshot) {
    var item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};

export class MainService {
  static getContractors() {
    const contractors = db.ref('contractors').once('value')
      .then((snapshot) => snapshotToArray(snapshot));
    return contractors;
  }

  static saveContractor(payload) {
    return db.ref('contractors').push(payload);
  }

  static removeContractor(key) {
    return db.ref('contractors').child(key).remove();
  }
}
