import React from 'react'

const ChildToParentData = ({dataprops}) => {
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
  return (
    <>
        <button onClick={() => dataprops(userData)}>Click and show data</button>
    </>
  )
}

export default ChildToParentData