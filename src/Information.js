import React from 'react'
import './Information.css'
function Information({ id, title, image, price, rating,origin }) {
  return (
    <div className='information'>
        <div>
        <div class="pd-wrap">
    <div>
          
          <div class="row">
            <div class="col-md-6">
            <img className='IMGof' src={image}/>
            </div>
            <div class="col-md-6">
              <div class="product-dtl">
                <div class="product-info">
                  <div class="product-name">{title}</div>
                  <div class="reviews-counter">
                  <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <span>3 Reviews</span>
              </div>
                  <div class="product-price-discount"><span>{price}.000đ</span><span class="line-through">{price+100}.000đ</span></div>
                </div>
                <p>Billie Eilish Pirate Baird O'Connell là một nữ ca sĩ và nhạc sĩ người Mỹ. Cô lần đầu tiên được công chúng chú ý vào năm 2015 với đĩa đơn đầu tay "Ocean Eyes", sau đó được phát hành bởi công ty con Darkroom của Interscope Records</p>
                <div class="row">
                  <div class="col-md-6">
                    <label for="size">Kích cỡ</label>
                <select id="size" name="size" class="form-control">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                  </div>
                  <div class="col-md-6">
                    <label for="color">Màu sắc</label>
                <select id="color" name="color" class="form-control">
                  <option>Blue</option>
                  <option>Green</option>
                  <option>Red</option>
                </select>
                  </div>
                </div>
                <div class="product-count">
                  <label for="size">Số lượng</label>
                  <form action="#" class="display-flex">
                  <div class="qtyminus">-</div>
                  <input type="text" name="quantity" value="1" class="qty"/>
                  <div class="qtyplus">+</div>
              </form>
              <a href="#" class="round-black-btn">Thêm vào giỏ hàng</a>
                </div>
              </div>
            </div>
          </div>
          <div class="product-info-tabs">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Mô tả</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
            Billie Eilish Pirate Baird O'Connell là một nữ ca sĩ và nhạc sĩ người Mỹ. Cô lần đầu tiên được công chúng chú ý vào năm 2015 với đĩa đơn đầu tay "Ocean Eyes", sau đó được phát hành bởi công ty con Darkroom của Interscope Records
            </div>
            <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
              <div class="review-heading">Rating</div>
              <p class="mb-20">Chưa có đánh giá nào.</p>
              <form class="review-form">
                  <div class="form-group">
                    <label>Đánh giá của bạn</label>
                    <div class="reviews-counter">
                  <div class="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">5 stars</label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">4 stars</label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">3 stars</label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">2 stars</label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">1 star</label>
                  </div>
                </div>
              </div>
                  <div class="form-group">
                    <label>Tin nhắn của bạn</label>
                    <textarea class="form-control" rows="10"></textarea>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" name="" class="form-control" placeholder="Name*"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" name="" class="form-control" placeholder="Email Id*"/>
                      </div>
                    </div>
                  </div>
                  <button class="round-black-btn">Submit đánh giá</button>
                </form>
            </div>
        </div>
      </div>
      
      
    </div>
  </div>
    </div>
    </div>
  )
}

export default Information