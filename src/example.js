import React, { useState, useEffect } from 'react';
import './App.css';
import { getAll, post, put, deleteById } from './memdb.js'

export function App(params) {
  let blankCustomer = { "id": -1, "name": "", "email": "", "password": "" };
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);
  let mode = (formObject.id >= 0) ? 'Update' : 'Add';

  const getCustomers =  function(){
    setCustomers(getAll());
  } 
  
  useEffect(() => { getCustomers() }, [refreshFlag]);

  const handleListClick = function(item){
    setFormObject(item);
  }  

  const handleInputChange = function (event) {
    const name = event.target.name;
    const value = event.target.value;
    let newFormObject = {...formObject}
    newFormObject[name] = value;
    setFormObject(newFormObject);
  }

  let onCancelClick = function () {
    setFormObject(blankCustomer);
  }

  let onDeleteClick = function () {
    if(formObject.id >= 0){
      deleteById(formObject.id);
      setRefreshFlag(refreshFlag+1);
    }
    setFormObject(blankCustomer);
  }

  let onSaveClick = function () {
    if (mode === 'Add') {
      post(formObject);
      setRefreshFlag(refreshFlag+1);
    }
    if (mode === 'Update') {
      put(formObject.id, formObject);
      setRefreshFlag(refreshFlag+1);
    }
    setFormObject(blankCustomer);
  }

  return (
    <div>
      <div className="boxed" >
        <h4>Customer List</h4>
        <table id="customer-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Pass</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(
              (item, index) => {
                return (<tr key={item.id} 
                onClick={()=>handleListClick(item)} 
                className={ (item.id === formObject.id )?'selected': ''}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>);
              }
            )}
          </tbody>
        </table>
    </div>
    <div className="boxed">
      <div>
        <h4>{mode}</h4>
      </div>
      <form >
        <table id="customer-add-update" >
          <tbody>
            <tr>
              <td className={'label'} >Name:</td>
              <td><input
                type="text"
                name="name"
                onChange={(e) => handleInputChange(e)}
                value={formObject.name}
                placeholder="Customer Name"
                required /></td>
            </tr>
            <tr>
              <td className={'label'} >Email:</td>
              <td><input
                type="email"
                name="email"
                onChange={(e) => handleInputChange(e)}
                value={formObject.email}
                placeholder="name@company.com" /></td>
            </tr>
            <tr>
              <td className={'label'} >Pass:</td>
              <td><input
                type="text"
                name="password"
                onChange={(e) => handleInputChange(e)}
                value={formObject.password}
                placeholder="password" /></td>
            </tr>
            <tr className="button-bar">
              <td colSpan="2">
                <input type="button" value="Delete" onClick={onDeleteClick} />
                <input type="button" value="Save" onClick={onSaveClick} />
                <input type="button" value="Cancel" onClick={onCancelClick} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </div>
  );
}

export default App;
