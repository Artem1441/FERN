const firebase = require("firebase");

const readFirebase = (collectionRef) => {
  return new Promise(function (resolve, reject) {
    collectionRef
      .get()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const createFirebase = (collectionRef, data) => {
  return new Promise(function (resolve, reject) {
    collectionRef
      .add({
        ...data,
        dateAdded: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  readFirebase: readFirebase,
  createFirebase: createFirebase,
};
