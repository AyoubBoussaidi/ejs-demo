const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const formData = {
  title: "Registration Formulaire",
  fields: [
    { name: "username", label: "Username", type: "text", required: false, size:"mini" },
    { name: "email", label: "Email", type: "email", required: true, size:"mini" },
    { name: "password", label: "Password", type: "password", required: true, size:"mini" },
    { name: "dob", label: "Date of Birth", type: "datetime", required: true, size:"mini" }
  ]
};

app.get('/form1', (req, res) => {
  res.render('htmlForm', { formData: formData });
});
app.get('/form2', (req, res) => {
    res.render('vueForm' ,{ formData: formData });
});

app.get('/', (req, res) => {
    res.render('test', { formData: formData });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running, and App is listening on port " + PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
