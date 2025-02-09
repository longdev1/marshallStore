export function templateInfo (product) {
  return `
     <div class="infoProduct_top">
          <div class="buyProduct_page">
            <div class="buyProduct_image">
            
              <img src ="http://127.0.0.1:2804/${product.img}" width="450" alt="" />
            </div>
            <div class="buyProduct_info">
              <h2>${product.name}</h2>
              <div class="eventBuy">
                <div class="tittleEvent">
                  <img src="../../Image/discount.png" width="32" alt="" />
                  <p>Sự kiện mua sắm tại Marshall Store VN</p>
                </div>
                <div class="infoEvent">
                  <p>Hàng chĩnh hãng Marshall</p>
                  <p>
                    Trải nghiệm so sánh, phân biệt cùng hàng giá rẻ kem chất
                    lượng tại Store HN & HCM
                  </p>
                  <p>HN:0928 759 555 / HCM: 0394 678 121</p>
                </div>
              </div>
              <div class="priceProduct">
                <p>${product.price}</p>
              </div>
              <div class="btn_buyProduct">
                <div class="orderProduct">
                  <p class="orderSub">-</p>
                  <p class="orderAmount">1</p>
                  <p class="orderPlush">+</p>
                </div>
                <a data-id="${product.id}" class="addtoCart_btn" href="">Thêm vào giỏ hàng</a>
                <a data-id="${product.id}" class="buyNow_btn" href="">Buy Now</a>
              </div>
              <hr />
              <div class="shareProduct">
                <p>Share:</p>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=http://127.0.0.1:5500/Layouts/InfoProduct/infoproduct.html"
                  target="_blank">
                  <img
                    src="../../Image/facebook.png"
                    width="20"
                    alt="Share on Facebook" />
                </a>
                <a
                  href="https://twitter.com/intent/tweet?url=http://127.0.0.1:5500/Layouts/InfoProduct/infoproduct.html"
                  target="_blank">
                  <img
                    src="../../Image/twitter.png"
                    width="20"
                    alt="Share on Twitter" />
                </a>
                <a
                  href="https://www.pinterest.com/pin/create/button/?url=http://127.0.0.1:5500/Layouts/InfoProduct/infoproduct.html"
                  target="_blank">
                  <img
                    src="../../Image/pinterest.png"
                    width="20"
                    alt="Share on Pinterest" />
                </a>
                <a
                  href="https://www.linkedin.com/shareArticle?url=http://127.0.0.1:5500/Layouts/InfoProduct/infoproduct.html"
                  target="_blank">
                  <img
                    src="../../Image/linkedin.png"
                    width="20"
                    alt="Share on LinkedIn" />
                </a>
              </div>
              <!-- Policy -->
              <div class="policyProduct">
                <div class="box_mainPolicy">
                  <div class="contentLeft">
                    <div class="topContent">
                      <img src="../../Image/shop.png" width="32" alt="" />
                      <p>Nhận hàng tại Store</p>
                    </div>
                    <p class="textSub_top">Nhận ngay trong ngày</p>
                  </div>
                  <div class="contentRight">
                    <p>Miễn phí</p>
                  </div>
                </div>
                <div style="margin-top: 20px" class="box_mainPolicy">
                  <div class="contentLeft">
                    <div class="topContent">
                      <img src="../../Image/delivery.png" width="32" alt="" />
                      <p>Giao hàng chuyển phát nhanh</p>
                    </div>
                    <p style="width: 350px" class="textSub_top">
                      Chuyển phát nhanh của chúng tôi sẽ giao hàng đến địa chỉ
                      của bạn
                    </p>
                  </div>
                  <div class="contentRight">
                    <p>Tính phí</p>
                  </div>
                </div>
              </div>
              <div class="guaranteeProduct">
                <div class="box_mainPolicy">
                  <div class="contentLeft">
                    <div class="topContent">
                      <img src="../../Image/quality.png" width="32" alt="" />
                      <p>Bảo hành 1 năm</p>
                    </div>
                  </div>
                  <div class="contentRight">
                    <p style="color: #1877f2">Chi tiết</p>
                  </div>
                </div>
                <div style="margin-top: 20px" class="box_mainPolicy">
                  <div class="contentLeft">
                    <div class="topContent">
                      <img src="../../Image/restart.png" width="32" alt="" />
                      <p>Đổi trả miễn phí trong 30 ngày</p>
                    </div>
                  </div>
                  <div class="contentRight">
                    <p style="color: #1877f2">Chi tiết</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="infoProduct_bot">
          <div class="aboutPresent_Product">
            <h1>Thông tin sản phẩm</h1>
            <p>
              <strong> Loa Marshall Woburn 3 </strong>là loa lớn nhất trong dòng
              sản phẩm <strong> âm thanh dành cho gia đình</strong>. Marshall đã
              đưa dòng loa gia đình mang đặc trưng của tinh thần rock ‘n’ roll
              với diện mạo hoàn mỹ hơn tạo nên một hiện tượng trong giới điệu mộ
              âm thanh. Thiết kế mang tính biểu tượng đặc trưng của nó đánh bật
              tất cả các loa khác khỏi thị trường.
            </p>
          </div>
          <h1 style="text-align: center">Thông số kỹ thuật</h1>
          <div class="aboutInfo_Product">
            <div class="parameterProduct">
              <img src="../../Image/audio.png" width="25" alt="" />
              <h2>Thông số âm thanh</h2>
            </div>
            <div class="detailParameter">
              <h3>Âm thanh</h3>
              <p>${product.sound}</p>
            </div>
            <div class="detailParameter">
              <h3>Thương hiệu</h3>
              <p>${product.brand}</p>
            </div>
            <div class="detailParameter">
              <h3>Màu</h3>
              <p>Black, Cream</p>
            </div>
            <div class="detailParameter">
              <h3>Công suất</h3>
              <p>${product.wattage}</p>
            </div>
            <div class="detailParameter">
              <h3>Tấn số</h3>
              <p>${product.frequency}</p>
            </div>
            <div class="detailParameter">
              <h3>Ứng dụng hỗ trợ</h3>
              <p>${product.supportapp}</p>
            </div>
          </div>
          <center>
            <hr style="margin-top: 20px; margin-bottom: 20px; width: 40%" />
          </center>
          <div class="aboutInfo_Product">
            <div class="parameterProduct">
              <img src="../../Image/settings.png" width="25" alt="" />
              <h2>Kiểm soát và kết nối</h2>
            </div>
            <div class="detailParameter">
              <h3>Kết nối có dây</h3>
              <p>${product.wired}</p>
            </div>
            <div class="detailParameter">
              <h3>Kết nối không dây</h3>
              <p>${product.unwired}</p>
            </div>
          </div>
          <center>
            <hr style="margin-top: 20px; margin-bottom: 20px; width: 40%" />
          </center>
          <div class="aboutInfo_Product">
            <div class="parameterProduct">
              <img src="../../Image/maximize.png" width="25" alt="" />
              <h2>Thông số âm thanh</h2>
            </div>
            <div class="detailParameter">
              <h3>Kích thước</h3>
              <p>${product.size}</p>
            </div>
            <div class="detailParameter">
              <h3>Trọng lượng</h3>
              <p>${product.weight}</p>
            </div>
          </div>
        </div>

    `;
}
