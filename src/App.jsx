
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  let products = [
    {
     name:"Fancy Products",
     price:"$40.00 - $80.00",
     image:"https://toppng.com/uploads/preview/ladies-purse-ladies-hand-bag-11563062357cusqfhwkov.png ",

    },
    {
      name:"Special-Item",
      price:"$18.00",
      image:"https://m.media-amazon.com/images/I/71LRb1uOU7L._AC_UF1000,1000_QL80_.jpg",
      offer:<span className="text-muted text-decoration-line-through">$20.00</span>,
      sale:"Sale"
     },
     {
      name:"Popular-Item",
      price:"$40.00",
      image:"https://media.glamour.com/photos/6578838c2d49e0f2ba0b34c1/1:1/w_2000,h_2000,c_limit/GL_12.12_best-selling-Amazon-productsjpg.jpg",
      sale:"Popular"
     },
     {
      name:"House Hold-Items",
      price:"$25.00 - $300.00",
      image:"https://5.imimg.com/data5/ANDROID/Default/2023/4/299645547/IS/NP/BD/56465514/product-jpeg-500x500.jpg"
     },
     {
      name:"Mobiles",
      price:"$150.00 - $2500.00",
      image:"https://www.zdnet.com/a/img/resize/fc4aa8fcea2e85f1f13b9c61e6ee584f4166b187/2023/08/22/ec44394a-e007-4cb2-9dd6-5a41d0c0e1dd/best-android-phones-zdnet-thumb-image.jpg?auto=webp&fit=crop&height=1200&width=1200",
      sale:"upto-50% off"

     },
     {
      name:"Gym-Products",
      price:"$20.00 - $300.00",
      image:"https://p.turbosquid.com/ts-thumb/m4/fte0O2/Gj/col16/jpg/1658825973/600x600/fit_q87/05f746259d2005f526de689d7928a9818af87970/col16.jpg",
     },
     {
      name:"Kitchen-Items",
      price:"$50.00 - $100.00",
      image:"https://i.ebayimg.com/images/g/or4AAOSwMKdkqn2x/s-l1600.jpg",
      sale:"Flat-30% Off"
     },
     {
      name:"Toys-Products",
      price:"$10.00 - $80.00",
      image:"https://static.standard.co.uk/2022/09/29/12/hamelyspicjpg?width=1200&height=1200&fit=crop"
     },
     {
      name:"Mens-Products",
      price:"$20.00 - $120.00",
      image:"https://johnnyslicks.com/cdn/shop/articles/5335c3615fa04cfcf310792e65b6a028_1024x1024.jpg?v=1599670660",
      sale:"Year-End-Sale"
     },
     {
      name:"Women's-Products",
      price:"$20.00 - $180.00",
      image:"https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/1:1/pass/undefined",
      sale:"Year-End-Sale"
     },
     {
      name:"Decorative-Items",
      price:"$10.00 - $90.00",
      image:"https://im.whatshot.in/img/2019/Dec/67261302-893139124398686-6928968956501819392-o-1575872040.jpg"
     },
     {
      name:"furnitures",
      price:"$50.00 - $2220.00",
      image:"https://m.media-amazon.com/images/I/71SOPoCq3aL.jpg"
     },
     

]

const  [cart,setCart] = useState(0)






  return(
    <div className='container-fluid'>
      <div className="row">

{/* Navbar */}
    <Navbar cart={cart} setCart={setCart}></Navbar>

 {/* Header */}   
    <Header></Header>

{/* card */}


    <section className=" py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
          products.map((element)=>{
              return <Card element={element} cart={cart} setCart={setCart}  />
          })
        }
      </div>
  </div> 
  </section> 

{/* Footer */}
      <Footer></Footer>
      </div>
    </div>

  )
}



export default App;
