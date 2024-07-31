import { useEffect, useState } from "react";
import './App.css';
import { getAll } from './memdb';

function App() {
  const iniData = { "id": -1, "name": "", "email": "", "password": "" }
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState(iniData);

  let mode = (formData.id >= 0) ? 'Update' : 'Add';

  useEffect(() => { setCustomers(getAll()) }, [refreshFlag]);

  function onDeleteClick() {
    console.log("in onDeleteClick()");
  }

  function onSaveClick() {
    console.log("in onSaveClick()");
  }

  function onCancelClick(row) {
    setFormData(iniData);
    // console.log("in onCancelClick()");
  }

  const handleListClick = (row) => {
    if (formData.id === row.id) {
      setFormData(iniData);
    } else {
      setFormData(row);
    }
    // console.log("in handleListClick()");
  }

  return (
    <>
      <div id="root">
        <div className="boxed">
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
              {customers.map((row, index) => (
                <tr
                  key={row.id}
                  onClick={() =>
                    handleListClick(row)
                  }
                  className={row.id === formData.id ? 'selected' : ''}
                >
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="boxed">
          <h4>{mode}</h4>
          <form>
            <table id="customer-add-update">
              <tbody>
                <tr>
                  <td className='label'>Name:</td>
                  <td>
                    <input type='text' name='name' placeholder='Customer Name' required value={formData.name} />
                  </td>
                </tr>
                <tr>
                  <td className="label">Email:</td>
                  <td>
                    <input type='email' name='email' placeholder='name@company.com' value={formData.email} />
                  </td>
                </tr>
                <tr>
                  <td className="label">Pass:</td>
                  <td>
                    <input type='text' name='password' placeholder='password' value={formData.password} />
                  </td>
                </tr>
                <tr className='button-bar'>
                  <td colSpan="2">
                    <input type='button' value='Delete' onClick={onDeleteClick} />
                    <input type='button' value='Save' onClick={onSaveClick} />
                    <input type='button' value='Cancel' onClick={onCancelClick} />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
