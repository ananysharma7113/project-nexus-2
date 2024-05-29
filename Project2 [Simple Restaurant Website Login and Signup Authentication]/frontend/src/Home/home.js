import React,{useRef} from 'react';
import '../Home/home.css';
import burger from '../images/burger.jpeg';
import pizza from '../images/pizza.jpeg';
import foods from '../images/foods.jpg';
import booking from '../images/booking.jpg';
import review_1 from '../images/review1.jpg';
import review_2 from '../images/review2.jpg';
import telephone from '../images/telephone.png'
import location from '../images/location.png'
import email from '../images/email_black.png'
import shahi_paneer from '../images/Shahi_Paneer.jpeg';
import dal_tadka from '../images/dal_tadka.webp';
import butter_naan from '../images/butter_naan.png';
import fried_rice from '../images/fried_rice.jpeg';
import kadhai_paneer from '../images/kadhai_paneer.webp';
import lachha_paratha from '../images/lachha_paratha.jpeg';
import paneer_tikka from '../images/paneer_tikka.avif';
import copyright from '../images/copyright.png'

const Home = () => {
  const homeRef =useRef(null);
  const menuRef =useRef(null);
  const aboutRef = useRef(null);
  const bookRef = useRef(null);

  const scrollHome=()=>{
    if(homeRef.current){
      homeRef.current.scrollIntoView({behaviour:'smooth'})
    }
  }
  const scrollMenu=()=>{
    if(menuRef.current){
      menuRef.current.scrollIntoView({behaviour:'smooth'});
    }
  };
  const scrollAbout=()=>{
    if(aboutRef.current){
      aboutRef.current.scrollIntoView({behaviour:'smooth'});
    }
  };
  const scrollBook=()=>{
    if(bookRef.current){
      bookRef.current.scrollIntoView({behaviour:'smooth'});
    }
  };
  return (
    <div className='total'>
      <div ref={homeRef} className='intro-body'>
        <div className='background-view'></div>
        <div className='introduction'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light nav">
            <div class="container-fluid">
              <text class="navbar-brand dancing-script">Tasty Tales</text>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': '100px'}}>
                  <li class="nav-item">
                    <button onClick={scrollHome} class="nav-link active" aria-current="page" href="#">HOME</button>
                  </li>
                  <li class="nav-item">
                    <button onClick={scrollMenu} class="nav-link" href="#">MENU</button>
                  </li>
                  <li class="nav-item">
                    <button onClick={scrollAbout} class="nav-link" href="#" tabindex="-1" aria-disabled="true">ABOUT US</button>
                  </li>
                  <li class="nav-item">
                    <button onClick={scrollBook} class="nav-link" href="#" tabindex="-1" aria-disabled="true">BOOK TABLE</button>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="SEARCH" aria-label="Search"/>
                  <button class="order-btn" type="submit">SEARCH</button>
                </form>
              </div>
            </div>
          </nav>
          <div className='intro-content'>
            <h1 className='intro-title dancing-script'>Tasty Tales</h1>
            <text>Welcome to Tasty Tales, your go-to destination for a culinary journey around the globe! Whether you're a seasoned chef, a home cook, or simply a food enthusiast, Tasty Tales offers a rich tapestry of flavors, stories, and recipes that will tantalize your taste buds and inspire your kitchen adventures.</text>
            <br></br>
            <button className='order-btn'>ORDER NOW</button>
          </div>
        </div>
      </div>
      <div className='middle-content'>
        <div class="card cards-1" style={{width: '40vw'}}>
          <img src={burger} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h1 class="card-title">
              Tasty Thursdays!
            </h1>
            <h1 class="card-title">
              20% OFF
            </h1>
            
            <a href="#" class="order-btn">ORDER NOW</a>
          </div>
        </div>
        <div class="card cards-1"style={{width: '40vw'}}>
          <img src={pizza} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h1 class="card-title">
              Pizza Days!
            </h1>
            <h1 class="card-title">
              15% OFF
            </h1>
            <a href="#" class="order-btn">ORDER NOW</a>
          </div>
        </div>
      </div>
      <div ref={menuRef} className='menu'>
        <h1 className='menu-title dancing-script'>Our Menu</h1>
        <div className='menu-row'>
          <div class="cards-1" style={{width: '25vw'}}>
            <img src={burger} class="card-img-top" alt="..."/>
            <div class="menu-content">
              <h5 class="menu-title dancing-script">CHICKEN MAHARAJA</h5>
              <p class="menu-text">Indulge in the opulence of our Chicken Maharaja Burger, a feast fit for royalty. Crafted to perfection, this signature burger is a culinary masterpiece that promises a delightful fusion of flavors with every bite.</p>
              <button onClick={scrollHome} class="order-btn">ORDER NOW</button>
            </div>
          </div>
          <div class="cards-1" style={{width: '25vw'}}>
            <img src={pizza} class="card-img-top" alt="..."/>
            <div class="menu-content">
              <h5 class="menu-title dancing-script">MEXICAN GREEN WAVE</h5>
              <p class="menu-text">Indulge in the vibrant flavors of our Mexican Greenwave Burger, a culinary delight that brings the zest of Mexico to your plate. This mouthwatering burger features a juicy, plant-based patty, grilled to perfection and topped with a symphony of fresh ingredients.</p>
              <button onClick={scrollHome} class="order-btn">ORDER NOW</button>
            </div>
          </div>
          <div class="cards-1" style={{width: '25vw'}}>
            <img src={shahi_paneer} class="card-img-top" alt="..."/>
            <div class="menu-content">
              <h5 class="menu-title dancing-script">SHAHI PANEER</h5>
              <p class="menu-text">his regal recipe features tender paneer (Indian cottage cheese) cubes simmered in a luscious gravy made from a blend of aromatic spices, tomatoes, and cashew nuts. Infused with fragrant ingredients like cardamom, cloves, and bay leaves, the sauce achieves a perfect harmony of flavors, further enriched with a hint of sweetness from cream and a subtle tang from tomatoes.</p>
              <button onClick={scrollHome} class="order-btn">ORDER NOW</button>
            </div>
          </div>
        </div>
        <div className='menu-row'>
          <div class="cards-1" style={{width: '25vw'}}>
            <img src={dal_tadka} class="card-img-top" alt="..."/>
            <div class="menu-content">
              <h5 class="menu-title dancing-script">DAL TADKA</h5>
              <p class="menu-text">Made with yellow split peas or toor dal, this dish is simmered until tender and then infused with a robust blend of cumin, garlic, and red chilies tempered in ghee. The result is a rich, creamy dal with layers of flavor, perfect for pairing with steamed rice or warm naan.</p>
              <button onClick={scrollHome} class="order-btn">ORDER NOW</button>
            </div>
          </div>
          <div class="cards-1" style={{width: '25vw'}}>
            <img src={kadhai_paneer} class="card-img-top" alt="..."/>
            <div class="menu-content">
              <h5 class="menu-title dancing-script">KADHAI PANEER</h5>
              <p class="menu-text">Experience the vibrant flavors of India with our Kadhai Paneer, a classic vegetarian dish that delights the senses with its aromatic spices and rich textures. Made with soft, succulent cubes of paneer (Indian cottage cheese) and a colorful mix of bell peppers, onions, and tomatoes, this dish is cooked in a traditional 'kadhai' or wok to perfection.</p>
              <button onClick={scrollHome} class="order-btn">ORDER NOW</button>
            </div>
          </div>
          <div class="cards-1" style={{width: '25vw'}}>
            <img src={lachha_paratha} class="card-img-top" alt="..."/>
            <div class="menu-content">
              <h5 class="menu-title dancing-script">LACHHA PARATHA</h5>
              <p class="menu-text">Crafted with whole wheat flour, our Lachha Paratha is meticulously rolled and folded multiple times to create thin layers. It's then cooked on a hot griddle with a hint of oil or ghee until golden brown, achieving a perfect balance of crispiness and softness. The result is a bread that peels apart into delightful, paper-thin layers.</p>
              <button onClick={scrollHome} class="order-btn">ORDER NOW</button>
            </div>
          </div>
        </div>
        <div className='menu-row'>
          <div class="cards-1" style={{width: '25vw'}}>
            <img src={butter_naan} class="card-img-top" alt="..."/>
            <div class="menu-content">
              <h5 class="menu-title dancing-script">BUTTER NAAN</h5>
              <p class="menu-text">Experience the authentic taste of India with our Butter Naan. This soft and fluffy bread, cooked to perfection in a traditional tandoor oven, is generously brushed with melted butter, giving it a rich, indulgent flavor. Each bite offers a delicate balance of crisp, golden edges and a tender, airy interior, making it the perfect accompaniment to any curry or dish.</p>
              <button onClick={scrollHome} class="order-btn">ORDER NOW</button>
            </div>
          </div>
          <div class="cards-1" style={{width: '25vw'}}>
            <img src={fried_rice} class="card-img-top" alt="..."/>
            <div class="menu-content">
              <h5 class="menu-title dancing-script">FRIED RICE</h5>
              <p class="menu-text">Our Fried Rice is a culinary masterpiece that brings together the best of both worlds: taste and nutrition. Each grain of rice is perfectly cooked to achieve a delicate balance of softness and chewiness, ensuring a delightful mouthfeel with every bite.</p>
              <button onClick={scrollHome} class="order-btn">ORDER NOW</button>
            </div>
          </div>
          <div class="cards-1" style={{width: '25vw'}}>
            <img src={paneer_tikka} class="card-img-top" alt="..."/>
            <div class="menu-content">
              <h5 class="menu-title dancing-script">PANEER TIKKA</h5>
              <p class="menu-text">Indulge in the tantalizing flavors of our Paneer Tikka, a beloved Indian appetizer that promises to delight your taste buds with its rich aroma and exquisite taste. Crafted from succulent cubes of paneer (Indian cottage cheese) marinated in a medley of traditional spices and yogurt, our Paneer Tikka is expertly grilled to perfection, imparting a smoky charred essence that complements the creamy texture of the paneer.</p>
              <button onClick={scrollHome} class="order-btn">ORDER NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div ref={aboutRef} className='info'>
        <img className='info-img' src={foods} alt='...'/>
        <div className='info-content'>
          <h1 className='info-title dancing-script'>Tasty Tales</h1>
          <text className='info-text'>Welcome to Tasty Tales, where every meal is a journey through flavor and tradition. Nestled in the heart of the city, Tasty Tales is a culinary haven that celebrates the rich tapestry of global cuisine while embracing the essence of local flavors. Our menu is a testament to our commitment to quality, featuring a fusion of classic dishes and innovative creations crafted with the freshest ingredients sourced from local producers and farmers. From sizzling street food favorites to sumptuous gourmet delights, each dish at Tasty Tales is a carefully crafted tale waiting to be savored. Whether you're seeking a cozy spot for a romantic dinner or a vibrant atmosphere for a gathering with friends, our warm hospitality and tantalizing dishes ensure an unforgettable dining experience. Join us at Tasty Tales and embark on a gastronomic adventure that will tantalize your taste buds and leave you craving for more.</text>
          <br></br>
          <button onClick={scrollHome} className='order-btn'>READ MORE</button>
        </div>
      </div>
      <div ref={bookRef} className='booking'>
        <h1 className='booking-title dancing-script'>Booking A Table</h1>
        <div className='form-content'>
          <form className='booking-form'>
            <input type='text' placeholder='Name' className='input'></input>
            <input type='text' placeholder='Phone Number' className='input'></input>
            <input type='email' placeholder='Email Address' className='input'></input>
            <input type='number' placeholder='How Many Persons?' className='input'></input>
            <input type='date' placeholder='dd/mm/yy' className='input'></input>
            <input type='time' placeholder='Time' className='input'></input>
            <button type='submit' className='order-btn button'>BOOK NOW</button>
          </form>
        <img src={booking} className='form-img' alt='...'/>
        </div>
      </div>
      <div className='review'>
        <h1 className='carousel-title dancing-script'>Customer Review</h1>
        <div className='review-content'>

          <img src={review_1} alt='...' className='rev-img-1'/>

          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active ">
              {/* <img src="..." class="d-block w-100" alt="..."/> */}
              <div className='carousel-content'>
              I recently dined at Tasty Tales and had an exceptional experience! From the moment we walked in, the ambiance was inviting and cozy, perfect for a relaxed evening out. The staff was incredibly friendly and attentive, making us feel right at home. The menu offered a fantastic variety of dishes, blending traditional and contemporary flavors beautifully. I highly recommend the Shahi Paneer was tender, flavorful, and cooked to perfection. The dessert, a decadent chocolate lava cake, was the perfect sweet ending to our meal. Every dish was presented beautifully and tasted even better than it looked. Tasty Tales has quickly become my favorite spot in the city. I can't wait to return and try more of their culinary delights!
              </div>
            </div>
            <div class="carousel-item carousel-content">
              {/* <img src="..." class="d-block w-100" alt="..."/> */}
              <div className='carousel-content'>
              I recently dined at Tasty Tales and had an exceptional experience! From the moment we walked in, the ambiance was inviting and cozy, perfect for a relaxed evening out. The staff was incredibly friendly and attentive, making us feel right at home. The menu offered a fantastic variety of dishes, blending traditional and contemporary flavors beautifully. I highly recommend the lamb shank—it was tender, flavorful, and cooked to perfection. The dessert, a decadent chocolate lava cake, was the perfect sweet ending to our meal. Every dish was presented beautifully and tasted even better than it looked. Tasty Tales has quickly become my favorite spot in the city. I can't wait to return and try more of their culinary delights!
              </div>
            </div>
            <div class="carousel-item">
              {/* <img src="..." class="d-block w-100" alt="..."/> */}
              <div className='carousel-content'>
              I recently dined at Tasty Tales and had an exceptional experience! From the moment we walked in, the ambiance was inviting and cozy, perfect for a relaxed evening out. The staff was incredibly friendly and attentive, making us feel right at home. The menu offered a fantastic variety of dishes, blending traditional and contemporary flavors beautifully. I highly recommend the lamb shank—it was tender, flavorful, and cooked to perfection. The dessert, a decadent chocolate lava cake, was the perfect sweet ending to our meal. Every dish was presented beautifully and tasted even better than it looked. Tasty Tales has quickly become my favorite spot in the city. I can't wait to return and try more of their culinary delights!
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
         <img src={review_2} alt='...' className='rev-img-2'/>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-row'>
          <div className='footer-content'>
          <h3 className='dancing-script'>Contact Us</h3>
          <div className='location'>
            <img className='loc-img' src={location} alt='...'/>
            <a href='#' className='link'>location</a>
          </div>
          <div className='location'>
            <img className='call-img' src={telephone} alt='...'/>
             <a href='#' className='link'>+01 1234567890</a>
          </div>
          <div className='location'>
            <img className='mail-img' src={email} alt='...'/>
            <a href='#' className='link'>tasty_tales@gmail.com</a>
          </div>
        </div>
        <div className='footer-content'>
          <h3 className='dancing-script'>Tasty Tales</h3>
          <p>Subscribe to our newsletter!</p>
          <button className='order-btn'>Subscribe</button>
        </div>
        <div className='footer-content'>
          <h3 className='dancing-script'>Opening Hours</h3>
          <div>Everyday</div>
          <div>10:00Am - 10:00Pm</div>
        </div>
      </div>
      <div className='copyright'>
        <img className='copyright-img' src={copyright} alt='...'/>
        <text>2024 Tasty Tales. All rights reserved</text>
      </div>
      </div>
    </div>
  )
}

export default Home;
