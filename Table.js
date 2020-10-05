import React from 'react'
import './table.css'
function Table(props) {

let handleClick = (e) =>
{
  
}

  return <table className="table" >
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
        <th>Delete</th>
        <th>Details</th>
      </tr>
    </thead>

    <tbody>
      {props.list.filter(List => 
      {
      return List.title.indexOf(props.Nl.searchTitle || '') !== -1
        && List.date.indexOf(props.Nl.searchDate || '') !== -1
      }).map(
      (List, index) => <tr key={`${List.title}-${List.des}-${List.date}`}>
      <td>
      {List.title}
      </td>
      <td>
      {List.des}
      </td>
      <td>
      {List.date}
      </td>
      <td>




        <button onClick=
        {(e) => 
        {props.setList(
        oldList => oldList.slice(0, index).concat(oldList.slice(index + 1, oldList.length))
        )}
        } >
      Delete</button>
      </td>

      <th>
        <button onClick={(e) => props.setDetail(List)}>
         Details
     </button>
      </th>
    </tr>)}
    </tbody>
  </table>

}

export default Table