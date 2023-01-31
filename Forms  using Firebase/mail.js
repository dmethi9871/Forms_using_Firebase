const firebaseConfig = {// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
    apiKey: "AIzaSyCdxrVlsYjy7YibNF8zOcxZXBbHIUGxFeA",
    authDomain: "form-d585c.firebaseapp.com",
    databaseURL: "https://form-d585c-default-rtdb.firebaseio.com",
    projectId: "form-d585c",
    storageBucket: "form-d585c.appspot.com",
    messagingSenderId: "805625941010",
    appId: "1:805625941010:web:b868545bd1a34406071ccb",
    measurementId: "G-CJ3RCJN4PV"
  };//   copy your firebase config informations

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};