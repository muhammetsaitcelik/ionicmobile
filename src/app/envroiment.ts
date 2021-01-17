export const FİREBASE_CONFİG = {
    apiKey: "AIzaSyCYSr2RW2oszfmKKyT-tXYQoWRLJS5EPbs",
    authDomain: "ionic-login-5e40a.firebaseapp.com",
    projectId: "ionic-login-5e40a",
    storageBucket: "ionic-login-5e40a.appspot.com",
    messagingSenderId: "265065779437",
    appId: "1:265065779437:web:3779a8161d90ad2431fce4"
  };


export const snapshotToArray = snapshot =>{
    let returnArray =[];
    snapshot.forEach ( element => {
      let item = element.val();
      item.key = element.key;
      returnArray.push(item);
    });
    return returnArray;
};