
export function CustomerAddUpdateForm(params) {
    return(
        <div className="boxed">
          <h4>{params.mode}</h4>
          <form>
            <table id="customer-add-update">
              <tbody>
                <tr>
                  <td className='label'>Name:</td>
                  <td><input 
                    type='text' 
                    name='name' 
                    placeholder='Customer Name' 
                    required 
                    value={params.formObject.name} onChange={params.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td className="label">Email:</td>
                  <td>
                    <input type='email' name='email' placeholder='name@company.com' 
                    value={params.formObject.email} onChange={params.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td className="label">Pass:</td>
                  <td>
                    <input type='text' name='password' placeholder='password' 
                    value={params.formObject.password} onChange={params.handleChange}/>
                  </td>
                </tr>
                <tr className='button-bar'>
                  <td colSpan="2">
                    <input type='button' value='Delete' onClick={params.onDeleteClick} />
                    <input type='button' value='Save' onClick={params.onSaveClick} />
                    <input type='button' value='Cancel' onClick={params.onCancelClick} />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
    )
}