import React from 'react'
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
  }
]


const allProducts = productDetails.map(item => 
  <PropsComponent productImg={item.productImg} productName={item.productName} color={item.color} productAmount={item.productAmount} productLink={item.productLink}/>
)

const PropsComponentGroup = () => {
  return (
    <div className="bg-white">
        <div className="">
          <h1 className="">Customers also purchased</h1>
          <div className="grid grid-4">
            {/* <PropsComponent productName="Basic Tee" color="Black" productAmount="99"/>
            <PropsComponent productName="Basic Tee White" color="Aspen White" productAmount="129"/>
            <PropsComponent productName="Basic Tee Charcoal" color="Charcoal" productAmount="29"/>
            <PropsComponent productName="Artwork Tee" color="Iso Dots" productAmount="89"/> */}

            {allProducts}
          </div>
        </div>
      </div>
  )
}

export default PropsComponentGroup