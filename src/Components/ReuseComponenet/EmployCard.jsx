import React from 'react'
import { Button, Card} from 'react-bootstrap';

const EmployCard = ({employData}) => {
  return (
    <>
    <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title>{employData.name}</Card.Title>
            <Card.Text>{employData.email}</Card.Text>
            <Card.Text>{employData.phone}</Card.Text>
            <Card.Text>{employData.website}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default EmployCard