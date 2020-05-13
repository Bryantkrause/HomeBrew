import React from 'react'
import axios from 'axios'
import TableContext from '../../utils/TableContext'
import TableDisplay from '../../components/TableDisplay'


const TableDisplayPage = props => {

  const  = 

  console.log('...', )

  const [state, setState] = React.useState({

  })

  state.getTablesFromDB = async function (id) {
    console.log('')

    let players = new Promise ( (resolve, reject) => {

      axios.get(`/api//${id}`)
        .then( ({ data }) => {
          console.log('.', data )
          data.table.forEach( t => {
            state.getTasksFromTable (t)
            
          })
          resolve(data)
        })
        .catch( e => {
          console.error('', e)
          reject(new Error('', e))
        })
    })

    return players
  }

  state.getTasksFromTable = ({_id}) => {

      axios.get(`/api//${_id}`)
        .then( item => console.log('', ))
        .catch( e => console.error('', e))
    // })

    // return tasks
  }

  state.getTable = _ => {
    setState({ ...state })
    // get table info from DB
    axios.get('/api/')
      .then(({}) => {
        console.log('  ', )
        setState({
          
        })
        
      })


  }

  React.useEffect(() => {
    state.getTablesFromDB()
      .then( data => setState({ 
        ...state, 
        
        })
       )
      .catch( e => console.error(' ', e))

  }, [])


  return (
    <TableContext.Provider value={state}>
      <TableDisplay />
    </TableContext.Provider>
  )

}

export default TableDisplayPage