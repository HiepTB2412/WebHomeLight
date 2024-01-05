import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          {/* <div className='box'>
            <h1>Bonik</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div> */}

          <div className='box'>
            <h2>Thông tin liên hệ</h2>
            <ul className="footer_ul">
              <li>Công Ty CP Xây Dựng và Thương Mại Homelight</li>
              <li>ĐÈN TRANG TRÍ HOMELIGHT</li>
              <li>Our Cares</li>
              <li>Hotlỉne:086.999.5698</li>
              <li>Email: ceo.homelight@gmail.com</li>
              <li>Địa chỉ: Số nhà 56 Liền kề 4 - Khu Tổng cục V - Yên Xá - Tân Triều - Thanh Trì - Hà Nội</li>
              {/* <li>Logo</li> */}
            </ul>
          </div>
          <div className='box'>
            <h2>Về chúng tôi</h2>
            <ul className="footer_ul">
              <li>Giới thiệu về HomeLight </li>
              <li>Sơ đồ chỉ đường </li>
              <li>Lịch làm việc</li>
            </ul>
          </div>
          <div className='box box_three'>
            <h2>Hỗ trợ mua hàng</h2>
            <ul className="footer_ul">
              <li>Bảo mật thông tin</li>
              <li>Chính sách bảo hành - Đổi trả</li>
              <li>Vận chuyển - Lắp Đặt</li>
              <li>Phương thức thanh toán</li>
            </ul>
          </div>
          <div className="box box_fouth">
            <h2>Kết nối với chúng tôi</h2>
            {/* <h2>Video</h2> */}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer