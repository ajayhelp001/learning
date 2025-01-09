import React, { useEffect, useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import EmployCard from './EmployCard'

const ReuseComponent = () => {
    const userData = [
        {
          "name": "Leanne Graham",
          "email": "Sincere@april.biz",
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
        },
        {
          "name": "Ervin Howell",
          "email": "Shanna@melissa.tv",
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
        }
    ]

    const [apiData, setApiData] = useState([])
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((response) => {
                setApiData(response)
            })
        })
    })
  return (
    <>
    
    <Container className='py-5'>
        <Row>
            {
                userData.map((item, i) =>
                    <Col xs={4}>    
                        <EmployCard key={i} employData={item}/>
                    </Col>
                )
            }
            {
                apiData.map((item, i) =>
                    <Col xs={4} className='mb-4'>    
                        <EmployCard key={i} employData={item}/>
                    </Col>
                )
            }
        </Row>
    </Container>
    </>
  )
}

export default ReuseComponent