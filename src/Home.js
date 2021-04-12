import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Media-Vgsw/Desktop_Tallhero_1500x600-BB-APR_NO_CB._CB654547102_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Oil and Honey"
            price={18.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51ivRBHcH6L.__AC_SY200_.jpg"
          />
          <Product
            id="49538094"
            title="Computer Table and chair"
            price={236.0}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LED Lamp"
            price={197.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41LbpATwwAL._AC_SY200_.jpg"
          />
          <Product
            id="23445930"
            title="One Plus 9 Pro"
            price={8.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vivo/march/UD/MSO/D21938933_WL_MSO_UpgradeDays_DESKTOP_CC._SY304_CB657385560_.jpg"
          />
          <Product
            id="3254354345"
            title="Syska LED Lamp"
            price={58.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41-j+ud0X9L._AC_SY200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Cookies"
            price={104.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/51fAFoCh+KL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Apple LED Watch"
            price={197.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Lotto Shoes"
            price={18.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/31Q35VUQOuL._AC_SY200_.jpg"
          />
          <Product
            id="3254354345"
            title="Lakme Fairness Cream"
            price={98.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41KX0ZnNU1L._AC_SY200_.jpg"
          />
        </div>
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Hello-Charlie/launch/1500x600_Hero-Tall_JPN._CB656396748_.jpg"
          alt=""
        />
                <div className="home__row">
          <Product
            id="90829332"
            title="Tiffin Box Buy 2 Get 1 free"
            price={14.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/21iu3zNeCuL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Bottles"
            price={9.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51USGFJXa1L._AC_SY200_.jpg"
          />
          <Product
            id="23445930"
            title="4 inch Teddy"
            price={9.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51pbsx0na3L._AC_SY200_.jpg"
          />
          <Product
            id="3254354345"
            title="Kids Mask"
            price={0.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/31+tWEAdHoL._AC_SY200_.jpg"
          />
          <Product
            id="4903850"
            title="Earphones"
            price={9.99}
            rating={1}
            image="https://m.media-amazon.com/images/I/41kKIwGJDdL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Skore Condoms"
            price={5.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/818WIU6hZZL._AC_UL320_.jpg"
          />
        </div>
        <img
          className="home__image1"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;