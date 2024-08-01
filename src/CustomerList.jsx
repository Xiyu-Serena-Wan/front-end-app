export function CustomerList(params){
    return (
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
              {params.customers.map(
                (row, index) => {
                  return(
                      <tr
                        key={row.id}
                        onClick={() =>
                          params.handleListClick(row)
                        }
                        className={row.id === params.formObject.id ? 'selected' : ''}
                      >
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.password}</td>
                      </tr>     )
                })}
            </tbody>
          </table>
        </div>
    )
}