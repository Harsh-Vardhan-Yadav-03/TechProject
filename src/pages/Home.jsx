import React from 'react'
import Analytics from '../components/Analytics'

const Home = () => {
  return (
    <>
    <main>
      <section className='section-hero'>
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1>Welcome to Bansiwale Technical</h1>
            <p>
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Bansiwale Technical,
              we specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className="btn btn-group">
            <a href="/contact">
              <button className="btn">connect now</button>
            </a>
            <a href="/services">
              <button className="btn secondary-btn">learn more</button>
            </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="./public/images/krishna.jpg" alt="codimng together" width="600" height="500" />
          </div>
        </div>
      </section>
    </main >

      {/* 2nd section */}

    <Analytics/>
    
    {/* 3rd section */}

    <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="./images/morpankh.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Bansiwale Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home