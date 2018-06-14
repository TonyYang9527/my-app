import React from 'react';
import  DragDrop from '../src/components/DragDrop';
import Formio from 'formiojs/Formio';
import FormBuilder from 'formiojs/FormBuilder';
import Form from 'formiojs/Form';

var subJSON = document.getElementById('subjson');

var builder = new Formio.FormBuilder(
  document.getElementById("builder"),
{
  display: 'form',
  components: [],
  settings: {
          pdf: {
             "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
             "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
          }
      }
}, 
{
  baseUrl: 'https://examples.form.io'
});


let onForm = function(form) {
  console.log("onForm => " ,form.submission ) ;
  form.on('change', function() {
    subJSON.innerHTML = '';
    subJSON.appendChild(document.createTextNode(JSON.stringify(form.submission, null, 4)));
  });
};


const  setDisplay = function(display) {
  builder.setDisplay(display).then(function(instance) {
     let jsonElement = document.getElementById('json');
     let formElement = document.getElementById('formio');

     instance.on('saveComponent', function(event) {
      let schema = instance.schema;
       jsonElement.innerHTML = '';
       formElement.innerHTML = '';
       jsonElement.appendChild(document.createTextNode(JSON.stringify(schema, null, 4)));
       Formio.createForm(formElement, schema).then(onForm);
     });
   
     instance.on('editComponent', function(event) {
       console.log('editComponent', event);
     });
     
     instance.on('updateComponent', function(event) {
      //console.log("updateComponent => " ,instance.schema) ;
       jsonElement.innerHTML = '';
       jsonElement.appendChild(document.createTextNode(JSON.stringify(instance.schema, null, 4)));
     });
     
     instance.on('deleteComponent', function(event) {
       jsonElement.innerHTML = '';
       jsonElement.appendChild(document.createTextNode(JSON.stringify(instance.schema, null, 4)));
     });
     
  
     Formio.createForm(formElement, instance.schema).then(onForm);
   });
};

// // Handle the form selection.
// var formSelect = document.getElementById('form-select');
// formSelect.addEventListener("change", function() {
//   setDisplay(this.value);
// });

class App extends React.Component{
  
  render() {
    setDisplay('form') ;
    return (
      <DragDrop key={Math.random()} />
    );
  }
}
export default App;
