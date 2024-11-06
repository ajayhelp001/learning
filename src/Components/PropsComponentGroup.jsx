import React, { useState } from 'react'
import PropsComponent from './PropsComponent'

const productDetails = [
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    productName: "Basic Tee",
    color: "Black",
    productAmount: "99",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    productName: "Basic Tee White",
    color: "Aspen White",
    productAmount: "129",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    productName: "Basic Tee Charcoal",
    color: "Charcoal",
    productAmount: "29",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    productName: "Artwork Tee",
    color: "Iso Dots",
    productAmount: "89",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    productName: "Basic Tee White",
    color: "Aspen White",
    productAmount: "129",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    productName: "Basic Tee",
    color: "Black",
    productAmount: "99",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    productName: "Artwork Tee",
    color: "Iso Dots",
    productAmount: "89",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    productName: "Basic Tee White",
    color: "Aspen White",
    productAmount: "129",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg'
  },
]

const latestProduct = [
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    productName: "Basic Tee Charcoal",
    color: "Charcoal",
    productAmount: "929",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    productName: "Basic Tee Charcoal",
    color: "Charcoal",
    productAmount: "929",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    productName: "Basic Tee",
    color: "Black",
    productAmount: "999",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    productName: "Artwork Tee",
    color: "Iso Dots",
    productAmount: "989",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    productName: "Basic Tee",
    color: "Black",
    productAmount: "999",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    productName: "Basic Tee White",
    color: "Aspen White",
    productAmount: "1929",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    productName: "Basic Tee Charcoal",
    color: "Charcoal",
    productAmount: "929",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg'
  },
  {
    productImg: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    productName: "Artwork Tee",
    color: "Iso Dots",
    productAmount: "989",
    productLink: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg'
  }
]


const allProducts = productDetails.map(item => 
  <PropsComponent productImg={item.productImg} productName={item.productName} color={item.color} productAmount={item.productAmount} productLink={item.productLink}/>
)
const newlatestProducts = latestProduct.map(item => 
  <PropsComponent productImg={item.productImg} productName={item.productName} color={item.color} productAmount={item.productAmount} productLink={item.productLink}/>
)

const PropsComponentGroup = () => {
  const [latestProduct, setProduct] = useState("Customers also purchased")
  const [product, seLatestProduct] = useState(allProducts)
  const [buttonText, setButtonText] = useState("Latest Products Click Here")
  const [toggle, setToggle] = useState(true)

  function latestProductFun(){
    if(toggle){
      setProduct("New Latest Product")
      seLatestProduct(newlatestProducts)
      setButtonText("Old Products")
    }
    else {
      setProduct("Customers also purchased")
      seLatestProduct(allProducts)
      setButtonText("Latest Products Click Here")
    }
    setToggle(!toggle);
  }

  return (
    <div className="bg-white">
        <div className="p-5">
          <h1 className="mb-5 text-2xl">{latestProduct}</h1>
          <button onClick={latestProductFun} className='rounded px-10 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500'>{buttonText}</button>
          <div className="grid grid-4 mt-5">
            {product}
          </div>
        </div>
      </div>
  )
}

export default PropsComponentGroup;