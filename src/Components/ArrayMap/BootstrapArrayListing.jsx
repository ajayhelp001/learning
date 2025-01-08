import React from 'react'
import { Button, Table , Container, Row, Col} from 'react-bootstrap';

const BootstrapArrayListing = () => {

    const userData = [
        {
            "email": "ajay@gmail.com",
            "id": 1,
            "title": "Ajay",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit"
          },
        {
            "email": "ajay1@gmail.com",
            "id": 11,
            "title": "Ajay",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit"
          },
        {
            "email": "ajay2@gmail.com",
            "id": 10,
            "title": "Ajay",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit"
          },
          {
            "email": "vijay@gmail.com",
            "id": 2,
            "title": "Vijay",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores "
          },
          {
            "email": "rahul@gmail.com",
            "id": 3,
            "title": "Rahul",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem "
          },
          {
            "email": "ravi@gmail.com",
            "id": 4,
            "title": "Ravi",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda"
          },
    ]
  return (
    <>
        <h2>Bootstrap Array Listing</h2>
        <Button as="a" variant="success"> Button as link </Button>

        <Container className='mt-5'>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // userData.map((val) => 
                                //     <tr key={val.email}>
                                //         <td>{val.id}</td>
                                //         <td>{val.title}</td>
                                //         <td>{val.email}</td>
                                //         <td>{val.body}</td>
                                //     </tr>
                                // ) 



                                // userData.map((val, i) => 
                                //     <tr key={i}>
                                //         <td>{i + 1}</td>
                                //         <td>{val.title}</td>
                                //         <td>{val.email}</td>
                                //         <td>{val.body}</td>
                                //     </tr>
                                // ) 

                                
                                userData.map((val, i) => 
                                    val.title === "Ajay" ?
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{val.title}</td>
                                        <td>{val.email}</td>
                                        <td>{val.body}</td>
                                    </tr>
                                    : null
                                ) 
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default BootstrapArrayListing