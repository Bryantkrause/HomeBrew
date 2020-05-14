import React from 'react';
import {Table} from 'reactstrap'
import TableContext from '../../utils/TableContext'

const TableDisplay = _ => {

  const { players } = React.useContext(TableContext)

  return (
    <Table dark>
    <thead>
        <tr>
            <th><h4>#</h4></th>
            <th><h4>name</h4></th>
            <th><h4>background</h4></th>
            <th><h4>race</h4></th>
            <th><h4>alignment</h4></th>
            <th><h4>proficiency</h4></th>
            <th><h4>description</h4></th>
            <th><h4>ac</h4></th>
        </tr>
    </thead>
    <tbody onLoad={getTasks}>
    {
        players.map( ({_id, name, background, race, alignment, proficiency, description, ac}, i) =>
        <tr key={_id}>
            <td>{i+1}</td>
            <td>{name}</td>
            <td>{background}</td>
            <td>{race}</td>
            <td>{alignment}</td>
            <td>{proficiency}</td>
            <td>{description}</td>
            <td>{ac}</td>
        </tr>
        )
    }
    </tbody>
</Table>
  )


}

export default TableDisplay