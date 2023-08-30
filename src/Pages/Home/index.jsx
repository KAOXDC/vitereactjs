import React from 'react'
import {useState,useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail  from '../../Components/ProductDetail'

function Home() {

  const [items, setItems] = useState(null)
  useEffect(() => {
    // https://fakeapi.platzi.com/
    fetch('https://api.escuelajs.co/api/v1/products')
    // fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => console.log(setItems(data)) )

  }, [])
  
  return (
    <>
      <Layout>
        Home

        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                items?.map(item => (
                    <Card key={item.id} data = {item}/>
                ))
            }

        </div>
        <ProductDetail/>
      </Layout>
    </>
  )
}

export default Home
