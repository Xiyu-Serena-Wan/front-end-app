import { useState } from "react";

function App() {

  const [isSelect, setIsSelect] = useState(false);

  function onDeleteClick(){
    console.log("in onDeleteClick()");
  }

  function onSaveClick(){
    console.log("in onSaveClick()");
  }

  function onCancelClick(){
    console.log("in onCancelClick()");
  }

  function handleListClick(){
    setIsSelect(current => !current);
    console.log("in handleListClick()");
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
          <tbody onClick={handleListClick}>
            <tr>
              <td>Mike Jonsons</td>
              <td>mikej@abc.com</td>
              <td>mikej</td>
            </tr>
            <tr>
              <td>Cindy Smiths</td>
              <td>cinds@abc.com</td>
              <td>cinds</td>
            </tr>
            <tr>
              <td>Julio Martins</td>
              <td>julim@abc.com</td>
              <td>julim</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="boxed">
        <h4>Add</h4>
        <form>
          <table id="customer-add-update">
            <tbody>
              <tr>
                <td className='label'>Name:</td>
                <td>
                  <input type='text' name='name' placeholder='Customer Name' required/>
                </td>
              </tr>
              <tr>
                <td className="label">Email:</td>
                <td>
                  <input type='email' name='email' placeholder='name@company.com'/>
                </td>
              </tr>
              <tr>
                <td className="label">Pass:</td>
                <td>
                  <input type='text' name='password' placeholder='password'/>
                </td>
              </tr>
              <tr className='button-bar'>
                <td colSpan="2">
                  <input type='button' value='Delete' onClick={onDeleteClick}/>
                  <input type='button' value='Save' onClick={onSaveClick}/>
                  <input type='button' value='Cancel' onClick={onCancelClick}/>
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
