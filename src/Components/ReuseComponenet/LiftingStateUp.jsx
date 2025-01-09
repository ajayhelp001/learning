import React, { useState } from 'react'
import { Card} from 'react-bootstrap';
import ChildToParentData from './ChildToParentData'

const LiftingStateUp = () => {
    const [data, setData] = useState([]);
    function showData(n) {
        setData(n);
        console.log(n);
        
    }
    
  return (
    <>
        <h2>Lefting State Up0</h2>
        {
                data.map((i, j) => 
                    <Card key={j}>
                    <Card.Body>
                        <Card.Title>{i.name}</Card.Title>
                        <Card.Text>{i.email}</Card.Text>
                        <Card.Text>{i.phone}</Card.Text>
                        <Card.Text>{i.website}</Card.Text>
                    </Card.Body>
                </Card>
                )
        }
        <ChildToParentData dataprops={showData}/>
    </>
  )
}

export default LiftingStateUp


