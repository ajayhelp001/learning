import React, { useEffect, useState } from 'react'

const UserDataShow = () => {
  const [data , setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
          result.json().then((response) => {
            // console.log(response);
            setData(response)
          })  
        })
    })
  return (
    <>
        <h2>Company User Data</h2>
        <div className="grid grid-4 gap-11 p-5 mx-auto">
          {
            data.map((val) => 
              <div className="bg-white overflow-hidden shadow rounded-3 border">
                  <div className="px-4 py-5">
                      <div className="py-3">
                          <dt className="text-sm font-medium">
                              Full name
                          </dt>
                          <dd className="mt-1 text-sm">
                              {val.name}
                          </dd>
                      </div>
                      <div className="py-3">
                          <dt className="text-sm font-medium">
                              Email address
                          </dt>
                          <dd className="mt-1 text-sm">
                              {val.email}
                          </dd>
                      </div>
                      <div className="py-3">
                          <dt className="text-sm font-medium">
                              Phone username
                          </dt>
                          <dd className="mt-1 text-sm">
                            {val.username}
                          </dd>
                      </div>
                      <div className="py-3">
                          <dt className="text-sm font-medium">
                              Address
                          </dt>
                          <dd className="mt-1 text-sm">
                            {val.address.city}
                          </dd>
                      </div>
                  </div>
              </div>
            )
          }
        </div>
    </>
  )
}

export default UserDataShow;