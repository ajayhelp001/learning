import React, { useEffect, useState } from 'react'

const UserPost = () => {
    const [postdata, setPostData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
            result.json().then((response) => {
                // console.log(response);
                setPostData(response)
            })
        })
    })
  return (
    <>
        <h2>Posts</h2>
        <div className="container">
            <div className="row row-gap-3">
                {
                    postdata.map((value) => 
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="card rounded-3 shadow">
                                <div className="card-body">
                                    <h3>Post Id : {value.id}</h3>
                                    {/* <h4>User Id : {value.userId}</h4> */}
                                    <h4>Title : {value.title}</h4>
                                    <p>Discription : {value.body}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </>
  )
}

export default UserPost