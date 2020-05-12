import React from 'react';
import Card from '@material-ui/core/Card';
import TableContext from '../../utils/TableContext'

const TableDisplay = () => {

    const {
      master,
      description,
      players,
    } = React.useContext(TableContext)
  
    console.log(` Context states are...
    master: ${master}
    description: ${description}
    `)
  
    return (
  
      <div>
        <Card className="boardTitle">
          <CardHeader 
            title={master}
            subheader={description}
          />
        </Card>
        
          {
            players.map( table => 
              <div>
                <Card>
                  <CardHeader 
                    title={table.title}
                  />
                  <CardActionArea>
  
                  </CardActionArea>
                </Card>
              </div>
              )
          }
        
      </div>
       )
    }
    
    export default TableDisplay