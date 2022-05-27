import React from 'react';
import './Home.css';
import Product from './Product';
// import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import slid from './img/slide.png';

import slider2 from './img/slide_logo_2.webp';
import slider3 from './img/slide_logo_3.webp';
import slider4 from './img/slide_logo_4.webp';
import slider5 from './img/slide_logo_5.webp';
import slider6 from './img/for fan-01.png';
import asset5 from './img/Asset 5.png';
import asset6 from './img/Asset 6.png';
import asset7 from './img/Asset 7.png';
import asset8 from './img/Asset 8.png';
import asset9 from './img/Asset 9.png';
import asset10 from './img/Asset 10.png';
import asset11 from './img/Asset 11.png';
import asset12 from './img/Asset 12.png';
import asset13 from './img/Asset 13.png';
import asset14 from './img/Asset 14.png';

import asset16 from './img/Asset 16.png';

import asset19 from './img/Asset 19.png';

import asset23 from './img/Asset 23.png';

import pic2 from './img/pic2.jpg';
import pic3 from './img/pic3.jpg';
import pic4 from './img/pic4.png';
import pic5 from './img/pic5.png';
import pic6 from './img/pic6.jpg';
import pic7 from './img/pic7.png';
import pic8 from './img/pic8.jpg';

import pic10 from './img/pic10.jpg';
import pic11 from './img/pic11.png';
import pic12 from './img/pic12.png';
import pic13 from './img/pic13.png';
import pic14 from './img/pic14.png';
import pic15 from './img/pic15.png';
import pic16 from './img/pic16.png';
import pic17 from './img/pic17.png';
import pic18 from './img/pic18.png';
import pic19 from './img/pic19.png';

import pic28 from './img/bubble.png';
import pic29 from './img/pic29.jpg';
import pic30 from './img/Indigrotto.png';
import pic31 from './img/hiten artwork.png';

import pic33 from './img/Miku Nakano.png';
import pic34 from './img/pic34.jpg';

import pic36 from './img/figure 1.png';
import pic37 from './img/pic37.png';
import pic38 from './img/pic38.jpg';
import pic39 from './img/pic39.jpg';

import pic41 from './img/pic41.jpg';
import pic42 from './img/SAO.png';
import pic43 from './img/pic43.png';
import pic44 from './img/pic44.png';
import pic45 from './img/pic45.png';
import pic46 from './img/pic46.png';
import pic47 from './img/pic47.png';
import us1 from './img/us1.jpg';
import us2 from './img/us2.jpg';
import us3 from './img/us3.jpg';
import anime1 from './img/anime1.jpg';
import kpop1 from './img/kpop1.png';
import kpop2 from './img/kpop2.png';
import kpop3 from './img/kpop3.jpg.png';
import kpop4 from './img/kpop4.jpg';
import vpop1 from './img/vpop1.png';
import vpop2 from './img/vpop2.png';
import vpop3 from './img/vpop3.png';
import vpop4 from './img/vpop4.png';
import vpop5 from './img/vpop5.png';
import vpop6 from './img/vpop6.png';
import vpop7 from './img/vpop7.png';
import vpop8 from './img/vpop8.png';
import vpop9 from './img/vpop9.png';
import vpop10 from './img/vpop10.png';
import vpop11 from './img/vpop11.jpg';
import vpop12 from './img/vpop12.jpg';
import vpop13 from './img/vpop13.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DiscountIcon from '@mui/icons-material/Discount';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import Billie from './img/billie-eilish-happier-than-ever-dia-cd_686b2f3fad3343efbe6bf2d0cd568c80_grande.webp';
import Adele from './img/adele.webp';
import Charlie from './img/charli-xcx-crash-dia-cd_3e55692bddc743d596cc5ec826ccc762_grande.webp';
import Tony from './img/tony-bennett-lady-gaga-love-for-sale-target-dia-cd_daf6228d6f8c4f6fa1f5e6e246bfe3f1_grande.webp';
import HaAnhTuan from './img/Diathan.webp';
import LeCat from './img/le-cat-trong-ly-hai-nguoi-chang-thay-nhau-times-exclusive-dia-cd_74e1543204324e66a8036aeff632e3e7_grande.webp';
import camila from './img/camila-romance-cover-1-signed-co-chu-ky-dia-cd_b22700292f3a4bc2ae46de432385bae3_grande.webp';
import { Tabs, Tab } from 'react-bootstrap';


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={slid} class="d-block w-100" alt="slider_1" />
            </div>
            <div class="carousel-item">
              <img src={slider2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={slider3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={slider4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={slider5} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          <div className="icon_free">
            <div className="blk_icon">
              <div>
                <AddShoppingCartIcon className="inner_icon" />
              </div>
              <div className="text_as">Cửa hàng của FORIA</div>
            </div>
            <div className="blk_icon">
              <div>
                <LocalShippingIcon className="inner_icon" />
              </div>
              <div className="text_as">Free Shipping</div>
            </div>
            <div className="blk_icon">
              <div>
                <DiscountIcon className="inner_icon" />
              </div>
              <div className="text_as">Cashback mỗi ngày</div>
            </div>
            <div className="blk_icon">
              <div>
                <PriceChangeIcon className="inner_icon" />
              </div>
              <div className="text_as">Vouchers mỗi ngày</div>
            </div>
            <div className="blk_icon ic1">
              <div>
                <TravelExploreIcon className="inner_icon" />
              </div>
              <div className="text_as">Đặt hàng quốc tế</div>
            </div>
            <div className="blk_icon ic1">
              <div>
                <LocalMallIcon className="inner_icon" />
              </div>
              <div className="text_as">Authentic Brand</div>
            </div>
            <div className="blk_icon ic1">
              <div>
                <CurrencyExchangeIcon className="inner_icon" />
              </div>
              <div className="text_as">Coin phần thưởng</div>
            </div>
            <div className="blk_icon ic1">
              <div>
                <HandshakeIcon className="inner_icon" />
              </div>
              <div className="text_as">Blank Promotion</div>
            </div>
            <div className="blk_icon ic1">
              <div>
                <FiberNewIcon className="inner_icon" />
              </div>
              <div className="text_as">Sales mỗi ngày</div>
            </div>
          </div>
        </div>
        {/* Carousel */}
        <div class="container">
          <div class="row g-5">
            <div class="col-4">
              <a href="https://rad-platypus-c6f7c3.netlify.app/">
                <div class="p-4 border hover01 box">
                  <h2>Đĩa than (VINYL)</h2>
                  <p>10k+ sản phẩm</p>
                </div>
              </a>
            </div>
            <div class="col-4">
              <a href="https://rad-platypus-c6f7c3.netlify.app/">
                <div class="p-4 border  box1">
                  <h2>CD + DVD</h2>
                  <p>10k+ sản phẩm</p>
                </div>
              </a>
            </div>

            <div class="col-4">
              <a href="https://rad-platypus-c6f7c3.netlify.app/">
                <div class="p-4 border  box2">
                  <h2>Cassette</h2>
                  <p>10k+ sản phẩm</p>
                </div>
              </a>
            </div>

            <div class="col-4">
              <a href="https://rad-platypus-c6f7c3.netlify.app/">
                <div class="p-4 border  box3">
                  <h2>Album</h2>
                  <p>10k+ sản phẩm</p>
                </div>
              </a>
            </div>

            <div class="col-4">
              <a href="https://rad-platypus-c6f7c3.netlify.app/">
                <div class="p-4 border  box4">
                  <h2>Ấn phẩm có chữ kí</h2>
                  <p>10k+ sản phẩm</p>
                </div>
              </a>
            </div>

            <div class="col-4">
              <a href="https://rad-platypus-c6f7c3.netlify.app/">
                <div class="p-4 border  box5">
                  <h2>Sách</h2>
                  <p>10k+ sản phẩm</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Container */}
        {/* <!-- Item slider--> */}
        <div class="head-title">
          <div className="b-ox"></div>
          <h3> NEW ARRIVALS / SẢN PHẨM MỚI</h3>
        </div>

        <div class="container-fluid space-top">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-15">
              <div
                class="carousel carousel-showmanymoveone slide"
                id="itemslider"
              >
                <div class="carousel-inner">
                  <div class="item active">
                    <div class="col-xs-6 col-sm-6 col-md-2">
                      <Product
                        image={Billie}
                        id="12321341"
                        title="BILLIE EILISH - HAPPIER THAN EVER - CD"
                        price={560}
                        rating={5}
                        sold={80}
                        origin={800}
                      />
                    </div>
                  </div>

                  <div class="item">
                    <div class="col-xs-6 col-sm-6 col-md-2">
                      <Product
                        image={LeCat}
                        id="12321342"
                        title="LÊ CÁT TRỌNG LÝ - HAI NGƯỜI CHẲNG THẤY NHAU - ĐĨA CD"
                        price={480}
                        rating={5}
                        sold={50}
                        origin={580}
                      />
                    </div>
                  </div>

                  <div class="item">
                    <div class="col-xs-6 col-sm-6 col-md-2">
                      <Product
                        image={Adele}
                        id="12321343"
                        title="ADELE - 30 (US VERSION) - ĐĨA CD - DVD"
                        price={450}
                        rating={5}
                        sold={10}
                        origin={550}
                      />
                    </div>
                  </div>

                  <div class="item">
                    <div class="col-xs-6 col-sm-6 col-md-2">
                      <Product
                        image={Charlie}
                        id="12321344"
                        title="CHARLI XCX - CRASH - ĐĨA CD - DVD"
                        price={1100}
                        rating={5}
                        sold={12}
                        origin={1200}
                      />
                      <span className="badge">
                        <h4>Sold</h4>
                      </span>
                    </div>
                  </div>

                  <div class="item">
                    <div class="col-xs-6 col-sm-6 col-md-2">
                      <Product
                        image={Tony}
                        id="12321345"
                        title="TONY BENNETT & LADY GAGA - LOVE FOR SALE - ĐĨA CD"
                        price={400}
                        rating={5}
                        sold={40}
                        origin={400}
                      />
                    </div>
                  </div>

                  <div class="item">
                    <div class="col-xs-6 col-sm-6 col-md-2">
                      <span className="badge">
                        <div className="discount">10%</div>
                      </span>
                      <Product
                        image={HaAnhTuan}
                        id="12321346"
                        title="HÀ ANH TUẤN - CUỐI NGÀY NGƯỜI ĐÀN ÔNG MỘT MÌNH"
                        price={1200}
                        rating={5}
                        sold={130}
                        origin={1300}
                      />
                    </div>
                  </div>
                </div>

                <div id="slider-control">
                  <a
                    class="left carousel-control"
                    href="#itemslider"
                    data-slide="prev"
                  >
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-left-512.png"
                      alt="Left"
                      class="img-responsive"
                    />
                  </a>
                  <a
                    class="right carousel-control"
                    href="#itemslider"
                    data-slide="next"
                  >
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-right-512.png"
                      alt="Right"
                      class="img-responsive"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="https://rad-platypus-c6f7c3.netlify.app">
          <div class="head-title">
            <div className="b-ox"></div>
            <h3>FOR FAN</h3>
          </div>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slider6} class="d-block w-100" alt="slider_1" />
              </div>
            </div>
          </div>
        </a>
        {/* <!-- Item slider end--> */}
        <div class="head-title">
          <div className="b-ox"></div>
          <h3> FOR YOU</h3>
        </div>
        <div className="spmoi">
          
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3 haiz"
            >
              <Tab eventKey="home" title="US-UK" className="haiz ">
              <a href="https://amza.vercel.app">
                <div className="USUK">
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={Billie}
                      id="12321341"
                      title="BILLIE EILISH - HAPPIER THAN EVER - CD"
                      price={560}
                      rating={5}
                      sold={10}
                      origin={800}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic2}
                      id="12321341"
                      title="DOJA CAT - PLANET HER - ALBUM"
                      price={380}
                      rating={5}
                      sold={10}
                      origin={400}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset19}
                      id="12321341"
                      title="TYLER SWIFT - RED (TAYLOR'S VERSION)"
                      price={1350}
                      rating={5}
                      sold={10}
                      origin={1400}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic3}
                      id="12321341"
                      title="LANA DEL REY-CHEMTRAILS OVER THE COUNTRY CLUB-VINYL LP"
                      price={930}
                      rating={5}
                      sold={10}
                      origin={1000}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={Charlie}
                      id="12321341"
                      title="CHARLIE XCX - CRASH - ĐĨA CD"
                      price={1100}
                      rating={5}
                      sold={10}
                      origin={1200}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={Tony}
                      id="12321341"
                      title="TONY BENNETT & LADY GAGA - LOVE FOR SALE - ĐĨA CD"
                      price={400}
                      rating={5}
                      sold={10}
                      origin={400}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset16}
                      id="12321341"
                      title="ED SHEERAN - = (EQUAL) - ĐĨA CD"
                      price={335}
                      rating={5}
                      sold={10}
                      origin={400}
                    />
                  </div>

                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={camila}
                      id="12321341"
                      title="CAMILA CAMELO - DON'T GO YET"
                      price={600}
                      rating={5}
                      sold={720}
                      origin={720}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic4}
                      id="12321341"
                      title="LANA DEL REY - BLUE BANISTERS - CD"
                      price={400}
                      rating={5}
                      sold={10}
                      origin={450}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic5}
                      id="12321341"
                      title="OLIVIA RODRIGO - SOUR - ALBUM"
                      price={400}
                      rating={5}
                      sold={10}
                      origin={450}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic6}
                      id="12321341"
                      title="LORDE - SOLAR POWER - VINYL LP"
                      price={1440}
                      rating={5}
                      sold={10}
                      origin={1600}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic7}
                      id="12321341"
                      title="DUA LIPA - FUTURE NOSTALGIA - CD"
                      price={900}
                      rating={5}
                      sold={10}
                      origin={1000}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic8}
                      id="12321341"
                      title="BRUNO MARS - AN EVENING WITH SILK SONIC"
                      price={350}
                      rating={5}
                      sold={10}
                      origin={450}
                    />
                  </div>

                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset23}
                      id="12321341"
                      title="THE WEEKND - DAWN FM - VINYL LP "
                      price={1050}
                      rating={5}
                      sold={10}
                      origin={1200}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic10}
                      id="12321341"
                      title="LANA DEL REY - VIOLET BENT BACKWARDS OVER THE GRASS - POEM BOOK"
                      price={380}
                      rating={5}
                      sold={10}
                      origin={450}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={us3}
                      id="12321341"
                      title="AVRIL LAVIGNE - LOVE SUX - ĐĨA CD"
                      price={690}
                      rating={5}
                      sold={10}
                      origin={800}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={us2}
                      id="12321341"
                      title="KESHI - GABRIEL - ĐĨA CD"
                      price={450}
                      rating={5}
                      sold={10}
                      origin={600}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={us1}
                      id="12321341"
                      title="HARRY STYLE - HARRY’S HOUSE - VINYL LP"
                      price={460}
                      rating={5}
                      sold={10}
                      origin={500}
                    />
                  </div>
                </div>
                </a>
              </Tab>
              <Tab eventKey="profile" title="Kpop" className="haiz">
              <a href="https://amza.vercel.app">
                <div className="KPOP">
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic11}
                      id="12321341"
                      title="IVE - The 2nd Single Album [LOVE DIVE] (Random Ver.)"
                      price={290}
                      rating={5}
                      sold={10}
                      origin={350}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic12}
                      id="12321341"
                      title="TAEYANG - TAEYANG 3RD ALBUM [WHITE NIGHT] (Random ver.)"
                      price={440}
                      rating={5}
                      sold={10}
                      origin={450}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic13}
                      id="12321341"
                      title="BIGBANG - BIGBANG MADE THE FULL ALBUM (Standard Ver.)"
                      price={450}
                      rating={5}
                      sold={10}
                      origin={570}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic14}
                      id="12321341"
                      title="EXO - [Filmlive Japan Tour -Exo Planet 2021-] (2Blu-ray) (Japanese Version)"
                      price={2100}
                      rating={5}
                      sold={10}
                      origin={2200}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic15}
                      id="12321341"
                      title="CLASS:y - 1st Mini Album Y [CLASS IS OVER] "
                      price={250}
                      rating={5}
                      sold={10}
                      origin={270}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic16}
                      id="12321341"
                      title="Red Velvet - Mini Album [The ReVe Festival 2022 - Feel My Rhythm] (Orgel Ver.) "
                      price={280}
                      rating={5}
                      sold={10}
                      origin={399}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic18}
                      id="12321341"
                      title="SUHO - Mini Album Vol.2 [Grey Suit] (Photobook Ver.) (Random Ver.)"
                      price={270}
                      rating={5}
                      sold={10}
                      origin={299}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic19}
                      id="12321341"
                      title="LISA - LISA 0327 PHOTOBOOK VOL.03"
                      price={430}
                      rating={5}
                      sold={10}
                      origin={449}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset7}
                      id="12321341"
                      title="SUHO - Mini Album Vol.2 [Grey Suit] (Digipack Ver.)"
                      price={217}
                      rating={5}
                      sold={10}
                      origin={225}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset8}
                      id="12321341"
                      title="NCT DREAM - The 2nd Album [Glitch Mode] (Digipack Ver.) "
                      price={18}
                      rating={5}
                      sold={10}
                      origin={36}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset9}
                      id="12321341"
                      title="Kim Sawol - Live Album [1202] (2CD)"
                      price={18}
                      rating={5}
                      sold={10}
                      origin={36}
                    />
                  </div>

                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={kpop1}
                      id="12321341"
                      title="(G)I-DLE 1ST FULL ALBUM - 'I NEVER DIE'"
                      price={550}
                      rating={5}
                      sold={10}
                      origin={650}
                    />
                  </div>

                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={kpop2}
                      id="12321341"
                      title="TAEYEON - INVU - ALBUM"
                      price={680}
                      rating={5}
                      sold={10}
                      origin={720}
                    />
                  </div>

                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={kpop3}
                      id="12321341"
                      title="NCT - The 3rd Album 'Universe' Photobook Ver."
                      price={460}
                      rating={5}
                      sold={10}
                      origin={500}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={kpop4}
                      id="12321341"
                      title="SEVENTEEN - 9th Mini Album `Attacca' Op.3"
                      price={500}
                      rating={5}
                      sold={10}
                      origin={550}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic17}
                      id="12321341"
                      title="BLACKPINK - Welcoming collection 2022 [Package + Digital Code Card]"
                      price={1450}
                      rating={5}
                      sold={10}
                      origin={1500}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset5}
                      id="12321341"
                      title="Kim Sawol - Live Album [1202] (2CD)"
                      price={18}
                      rating={5}
                      sold={10}
                      origin={36}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset6}
                      id="12321341"
                      title="J_ust - EP [일_기]"
                      price={335}
                      rating={5}
                      sold={10}
                      origin={415}
                    />
                  </div>
                </div>
                </a>
              </Tab>
              <Tab eventKey="contact" title="ANIME" className="haiz animea">
              <a href="https://amza.vercel.app">
                <div className="JPOP">
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic28}
                      id="12321341"
                      title="'Bubble' Original Soundtrack Album - Sawano Hiroyuki"
                      price={599}
                      rating={5}
                      sold={10}
                      origin={699}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic29}
                      id="12321341"
                      title="Album The Book 2 - Yoasobi (Tsubame feat. Midoriizu)"
                      price={549}
                      rating={5}
                      sold={10}
                      origin={599}
                    />
                  </div>

                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic31}
                      id="12321341"
                      title="Hiten初画集『ADOLESCENCE』Art Works"
                      price={649}
                      rating={5}
                      sold={10}
                      origin={799}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic33}
                      id="12321341"
                      title="The Quintessential Bride Nendoroid Nakano Miku Masumi"
                      price={799}
                      rating={5}
                      sold={10}
                      origin={849}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic30}
                      id="12321341"
                      title="Album 『Indigrotto』Endorfin. 10th Album
                        〚 COLOURS.01 'Growing' 〛- Nardack + Nakuru Aitsuki
                        "
                      price={699}
                      rating={5}
                      sold={10}
                      origin={799}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic34}
                      id="12321341"
                      title="TRUE WIRELESS STEREO EARPHONES Ichika Nakano (CV: Kana Hanazawa) - Anime 'The Quintessential Quintessential Bride ∬'"
                      price={2199}
                      rating={5}
                      sold={10}
                      origin={3299}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic36}
                      id="12321341"
                      title="Figure Shiriasu [Azur Land] 1/8 PVC & ABS Painted Finished Product Limited"
                      price={3999}
                      rating={5}
                      sold={10}
                      origin={4299}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic37}
                      id="12321341"
                      title="100 Years Doraemon Long Stories"
                      price={12999}
                      rating={5}
                      sold={10}
                      origin={13000}
                    />
                  </div>

                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic38}
                      id="12321341"
                      title="Inugami Korone Birthday Memorial 2021 Full Set (Poster + Cup and Spoon Design + Muffler Towel + Sticker + Badge)"
                      price={2099}
                      rating={5}
                      sold={10}
                      origin={2200}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic39}
                      id="12321341"
                      title="Hololive Production Calendar 2022"
                      price={349}
                      rating={5}
                      sold={10}
                      origin={399}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic41}
                      id="12321341"
                      title="Pandora Box Collectors Box Set - Jun Mochizuki"
                      price={5499}
                      rating={5}
                      sold={10}
                      origin={5500}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={pic42}
                      id="12321341"
                      title="Sword Art Online Platinum Collector's Edition"
                      price={949}
                      rating={5}
                      sold={10}
                      origin={1100}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset10}
                      id="12321341"
                      title="One Piece SA-MAXIMUM Monkey D. Luffy Gear 4 Snakeman Hình ONE PIECE..."
                      price={399}
                      rating={5}
                      sold={450}
                      origin={599}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset11}
                      id="12321341"
                      title="One Piece Thousand Sunny Wano Country Edition Ver. Mô hình nhựa BAS5060269"
                      price={350}
                      rating={5}
                      sold={400}
                      origin={400}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset12}
                      id="12321341"
                      title="Phiên bản điện ảnh 'Demon Slayer' Infinite Train Edition [Phiên bản thường]"
                      price={599}
                      rating={5}
                      sold={600}
                      origin={600}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset13}
                      id="12321341"
                      title="Your Lie in April DVD trọn bộ BOX1 (Tập 1-11) Anime Your Lie in April DVD nhập khẩu"
                      price={550}
                      rating={5}
                      sold={650}
                      origin={600}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={asset14}
                      id="12321341"
                      title="Gia đình điệp viên tập 2 Tatsuya Endo SPY x FAMILY SPY FAMILY"
                      price={280}
                      rating={5}
                      sold={10}
                      origin={300}
                    />
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                    <Product
                      image={anime1}
                      id="12321341"
                      title="A Silent Voice Original Soundtrack- 
                        Limited Edition
                        Other vinyls
                        "
                      price={1150}
                      rating={5}
                      sold={10}
                      origin={1300}
                    />
                  </div>
                </div>
                </a>
              </Tab>
              <Tab eventKey="email" title="VPOP" className="haiz">
              <a href="https://amza.vercel.app">
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop1}
                    id="12321341"
                    title="Hoàng Dũng x Môi Điên - Áo Sweater 25"
                    price={787}
                    rating={5}
                    sold={10}
                    origin={799}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop13}
                    id="12321341"
                    title="TẠ QUANG THẮNG - Ở GIỮA CUỘC ĐỜI (TIMES EXCLUSIVE) - ĐĨA CD"
                    price={280}
                    rating={5}
                    sold={10}
                    origin={300}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop2}
                    id="12321341"
                    title="BINZ'S OVER SCREEN MERCURY COUGAR GRAPHIC T-SHIRT - BLACK"
                    price={990}
                    rating={5}
                    sold={10}
                    origin={1000}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop3}
                    id="12321341"
                    title="BINZ'S BANDANA"
                    price={339}
                    rating={5}
                    sold={10}
                    origin={400}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop4}
                    id="12321341"
                    title="BINZ’S CAP - MERCURY COUGAR HANDMADE GRAPHIC "
                    price={499}
                    rating={5}
                    sold={10}
                    origin={599}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop5}
                    id="12321341"
                    title="CÁ HỒI HOANG - DÂY ĐEO VA X 250 LANYARD"
                    price={90}
                    rating={5}
                    sold={10}
                    origin={120}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop6}
                    id="12321341"
                    title="GIGI HƯƠNG GIANG - DU HÀNH VÀO TÂM TRÍ (LIMITED BOXSET) - ĐĨA CD"
                    price={599}
                    rating={5}
                    sold={10}
                    origin={650}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop7}
                    id="12321341"
                    title="ISAAC - PHOTOBOOK 2019 'NGÀY KHÔNG EM' (CÓ CHỮ KÝ + TẶNG POSTCARD + ĐĨA CD)"
                    price={280}
                    rating={5}
                    sold={10}
                    origin={300}
                  />
                </div>

                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop10}
                    id="12321341"
                    title="BỨC TƯỜNG - CON ĐƯỜNG KHÔNG TÊN (CASSETTE TAPE) - BĂNG CASSETTE"
                    price={350}
                    rating={5}
                    sold={10}
                    origin={400}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop11}
                    id="12321341"
                    title="MEOFW LẠC - RỪNG BÊ TÔNG - ĐĨA CD"
                    price={250}
                    rating={5}
                    sold={10}
                    origin={300}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop12}
                    id="12321341"
                    title="LÊ CÁT TRỌNG LÝ - CÂY LẶNG GIÓ NGỪNG (TIMES EXCLUSIVE) - ĐĨA CD"
                    price={280}
                    rating={5}
                    sold={10}
                    origin={300}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop9}
                    id="12321341"
                    title="GIGI HƯƠNG GIANG - DU HÀNH VÀO TÂM TRÍ (STANDARD VER.) - ĐĨA CD"
                    price={280}
                    rating={5}
                    sold={10}
                    origin={300}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={pic43}
                    id="12321341"
                    title="THÁI ĐINH - BÀI HÁT SỐ 8 (STANDARD) - ĐĨA CD"
                    price={250}
                    rating={5}
                    sold={10}
                    origin={300}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={pic44}
                    id="12321341"
                    title="LÊ CÁT TRỌNG LÝ - LÊ CÁT TRỌNG LÝ (DELUXE EDITION - COKE BOTTLE CLEAR VINYL LP) - ĐĨA THAN"
                    price={1050}
                    rating={5}
                    sold={10}
                    origin={1300}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={pic45}
                    id="12321341"
                    title="HÀ ANH TUẤN - CUỐI NGÀY NGƯỜI ĐÀN ÔNG MỘT MÌNH (VINYL LP) "
                    price={1200}
                    rating={5}
                    sold={10}
                    origin={1300}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={pic46}
                    id="12321341"
                    title="NGUYÊN HÀ - HÔM QUA HÔM NAY & SAU NÀY - ĐĨA CD"
                    price={300}
                    rating={5}
                    sold={10}
                    origin={1300}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={pic47}
                    id="12321341"
                    title="MIN - 50/50 ( THE FIRST ALBUM / STANDARD VER. ) - ĐĨA CD"
                    price={280}
                    rating={5}
                    sold={10}
                    origin={300}
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2">
                  <Product
                    image={vpop8}
                    id="12321341"
                    title="CÁ HỒI HOANG - NGÀY ẤY VÀ SAU NÀY (∨∧) (CASSETTE TAPE) - BĂNG CASSETTE"
                    price={350}
                    rating={5}
                    sold={10}
                    origin={400}
                  />
                </div>
                </a>
              </Tab>
            </Tabs>
          
        </div>
      </div>

      {/* end */}
    </div>
  );
}

export default Home;
