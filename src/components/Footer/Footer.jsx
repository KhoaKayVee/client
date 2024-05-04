import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Con đường chinh phục Streetwear của thương hiệu DirtyCoins được bắt đầu từ 2017 tại Sài Gòn - Việt Nam, xuất phát ý tưởng về một thương hiệu Việt mang văn hóa đường phố. Với những kinh nghiệm gói ghém từ thương hiệu tiền thân The Yars Shop, anh Khoa Sen đã đã bắt đầu cuộc hành trình DirtyCoins cùng những người bạn GenZ đầy nhiệt huyết và sáng tạo.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Con đường chinh phục Streetwear của thương hiệu DirtyCoins được bắt đầu từ 2017 tại Sài Gòn - Việt Nam, xuất phát ý tưởng về một thương hiệu Việt mang văn hóa đường phố. Với những kinh nghiệm gói ghém từ thương hiệu tiền thân The Yars Shop, anh Khoa Sen đã đã bắt đầu cuộc hành trình DirtyCoins cùng những người bạn GenZ đầy nhiệt huyết và sáng tạo.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">KAYVEESTORE</span>
          <span className="copyright">
          Copyright © 2024 KayVee Studio. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer