import React, { useEffect, useState } from 'react'
import { Button, Table , Container, Row, Col} from 'react-bootstrap';



const NestedArrayWithBootstrap = () => {
  const userData = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": [
        {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        }
      ],
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": [
        {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        }
      ],
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
]

const [data, setData] = useState([])

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
    result.json().then((response) => {
      setData(response)
    })
  })
})
  return (
    <>
        <h2>Nested Array With Bootstrap</h2>

          <Container className='mt-5'>
              <Row>
                  <Col>
                      <Table striped bordered hover variant="dark">
                          <thead>
                              <tr>
                                  <th>Sr No.</th>
                                  <th>User Name</th>
                                  <th>User Email</th>
                                  <th>Address</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                userData.map((val, i) => 
                                  <tr key={i}>
                                      <td>{i + 1}</td>
                                      <td>{val.name}</td>
                                      <td>{val.email}</td>
                                      <td>
                                        <Table striped bordered hover  variant="dark">
                                          <thead>
                                            <tr>
                                              <th>Street</th>
                                              <th>Suite</th>
                                              <th>City</th>
                                              <th>Zip Code</th>
                                              <th>Geo</th>
                                            </tr>
                                          </thead>
                                            <tbody>
                                              {
                                                val.address.map((add, j) =>
                                                  <tr key={j}>
                                                    <td>{add.street}</td>
                                                    <td>{add.suite}</td>
                                                    <td>{add.city}</td>
                                                    <td>{add.zipcode}</td>
                                                    <td>
                                                      <Table striped bordered hover  variant="dark">
                                                        <tr>
                                                          <td>{add.geo.lat}</td>
                                                          <td>{add.geo.lng}</td>
                                                        </tr>
                                                      </Table>
                                                    </td>
                                                  </tr>
                                                )
                                              }
                                            </tbody>
                                        </Table>
                                      </td>
                                  </tr>
                                ) 
                              }
                          </tbody>
                      </Table>
                  </Col>
                  {/* API Data */}
                  <Col className='mt-5'>
                    <h2>User Data With API</h2>
                      <Table responsive striped bordered hover variant="dark">
                          <thead>
                              <tr>
                                  <th>Sr No.</th>
                                  <th>User Name</th>
                                  <th>User Email</th>
                                  <th>Address</th>
                                  <th>Phone</th>
                                  <th>Website</th>
                                  <th>company</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                data.map((val, i) => 
                                  <tr key={i}>
                                      <td>{i + 1}</td>
                                      <td>{val.name}</td>
                                      <td>{val.email}</td>
                                      <td>
                                        <Table striped bordered hover  variant="dark">
                                          <thead>
                                            <tr>
                                              <th>Street</th>
                                              <th>Suite</th>
                                              <th>City</th>
                                              <th>Zip Code</th>
                                              <th>Geo</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>{val.address.street}</td>
                                              <td>{val.address.suite}</td>
                                              <td>{val.address.city}</td>
                                              <td>{val.address.zipcode}</td>
                                              <td>
                                              <Table striped bordered hover  variant="dark">
                                                <tbody>
                                                  <tr>
                                                    {val.address.geo.lat}
                                                    {val.address.geo.lng}
                                                  </tr>
                                                </tbody>
                                                </Table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </td>
                                      <td>{val.phone}</td>
                                      <td>{val.website}</td>
                                      <td>
                                          <Table striped bordered hover variant="dark">
                                          <thead>
                                            <tr>
                                              <th>Name</th>
                                              <th>Catch</th>
                                              <th>BS</th>
                                            </tr>
                                          </thead>
                                            <tbody>
                                              <tr>
                                                <td>{val.company.name}</td>
                                                <td>{val.company.catchPhrase}</td>
                                                <td>{val.company.bs}</td>
                                              </tr>
                                            </tbody>
                                          </Table>
                                      </td>
                                  </tr>
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

export default NestedArrayWithBootstrap