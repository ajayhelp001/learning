import React from 'react'

const ArrayListing = () => {

    const UserList = ["Ajay", "Lakshit", "Ram", "Shyam"]
    // for (let i = 0; i < UserList.length; i++) {
    //     console.log(UserList[i])
    // }

    // for loop not use in react because ye return  nhi karna or map funtion return me blank array return karta h


    const albumeArray = [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F45cece9e5c434741b554de2cc6465977/?quality=80&width=450",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
          },
          {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2Fa0cdaf6efd304ca1be7ebe257bf17b68/?quality=80&width=750",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
          },
          {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://www.pubnub.com/cdn/b/api/v1/image/assets%2F0ee4d50ccdc943eda308d1099e2b1915%2F366640dd96624164af39327a22176893/?quality=80&width=750",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
          },
    ]
  return (
    <>
        <h2>Array Listing</h2>
        <table>
            <thead>
                <tr>
                    {/* <th>Name</th> */}
                    <th>Albume Id</th>
                    <th>Title</th>
                    <th>URL</th>
                    <th>Thumb. URL</th>
                </tr>
            </thead>
            <tbody>
                {
                    // UserList.map((items) => 
                    //     <tr>
                    //         <td>{items}</td>
                    //     </tr>
                    // )  
                    
                        albumeArray.map((val) =>
                            <tr key={val.id}>
                                <td>{val.albumId}</td>
                                <td>{val.title}</td>
                                <td><img src={val.url} alt="" width={300} /></td>
                                <td><img src={val.thumbnailUrl} alt="" /></td>
                            </tr>
                        )
                }
            </tbody>
        </table>
    </>
  )
}

export default ArrayListing