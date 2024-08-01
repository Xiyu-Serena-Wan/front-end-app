import { useEffect, useState } from "react";
import './App.css';
import { getAll, deleteById, post, put } from './memdb.js';
import { CustomerList } from './CustomerList.jsx';
import { CustomerAddUpdateForm } from './CustomerAddUpdateForm.jsx';

function App() {
  const blankCustomer = { "id": -1, "name": "", "email": "", "password": "" }
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);

  function handleChange(e) {
    const {name, value} = e.target;
    setFormObject({...formObject, [name]: value});
  }

  let mode = (formObject.id >= 0) ? 'Update' : 'Add';

  useEffect(() => { setCustomers(getAll()) }, [refreshFlag]);

  function onDeleteClick() {
    if (formObject.id >= 0) {
      deleteById(formObject.id);
      setFormObject(blankCustomer);
    }
    console.log("in onDeleteClick()");
  }

  function onSaveClick() {
    if (mode === 'Add') {
      post(formObject);
    } else if (mode === 'Update') {
      put(formObject.id, formObject);
    }
    setFormObject(blankCustomer);
  }

  function onCancelClick(row) {
    setFormObject(blankCustomer);
    // console.log("in onCancelClick()");
  }

  const handleListClick = (row) => {
    if (formObject.id === row.id) {
      setFormObject(blankCustomer);
    } else {
      setFormObject(row);
    }
    // console.log("in handleListClick()");
  }

  return (
    <>
      <div id="root">
        <CustomerList
          customers = {customers}
          formObject = {formObject}
          handleListClick = {handleListClick}
        />
        <CustomerAddUpdateForm
          handleChange = {handleChange}
          formObject = {formObject}
          mode = {mode}
          onDeleteClick = {onDeleteClick}
          onCancelClick = {onCancelClick}
          onSaveClick = {onSaveClick}
        />
      </div>
    </>
  );
}

export default App;
