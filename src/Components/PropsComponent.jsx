import React from 'react'
const PropsComponent = ({productName, color, productAmount, productImg, productLink}) => {
  return (
    <>
        <div className="group relative">
          <div className="">
            <img src={productImg} />
          </div>
          <div className="">
            <div>
              <h3 className="text-lg text-gray-700">
                <a href={productLink}>{productName}</a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${productAmount}</p>
          </div>
        </div>
     
    </>
  )
}

export default PropsComponent;