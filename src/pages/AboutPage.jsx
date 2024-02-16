import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to Kabir Club,  your go-to destination for premium t-shirts and men's wear that blend style, comfort, and personality.At Kabir Club, we believe that clothing is more than just fabric; it's a reflection of individuality and expression. Inspired by the timeless wisdom and poetic essence of Kabir, a renowned Indian mystic and poet, we aim to infuse our apparel with a similar spirit of authenticity and depth.
        Our journey began with a simple yet powerful vision: to offer clothing that not only looks great but also resonates with the soul. Each piece in our collection is thoughtfully designed, meticulously crafted, and imbued with a unique charm that sets it apart.
        Whether you're searching for the perfect t-shirt to elevate your casual look or seeking sophisticated menswear essentials, Kabir Club has you covered. From classic designs to contemporary styles, we curate a diverse range of options to suit every taste and occasion.
        But Kabir Club is more than just a clothing store; it's a community—a gathering place for like-minded individuals who appreciate quality, craftsmanship, and authenticity. We're committed to fostering a culture of inclusivity, creativity, and self-expression, where everyone feels welcome and inspired to embrace their true selves.
        As we continue to grow and evolve, our dedication to excellence remains unwavering. We invite you to join us on this journey—to explore our collection, discover your unique style, and experience the essence of Kabir Club.
        Thank you for choosing Kabir Club. Together, let's redefine the art of dressing with purpose and passion.
        </p>

        {/* <h2 className="text-center py-4">Our Products</h2> */}
        <div className="row">
          {/* <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage