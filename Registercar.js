import React from "react";
import "./cssCompoment/registercar.css";
import "./cssCompoment/reponsiverescar.css";
import { Link } from "react-router-dom";
import registercar from "./asset/image/registercar.png";

const Registercar = () => {
  return (
    <div>
      <div className="car-register">
        <div className="car-register-title">
          <Link to="/" className="back-title">
            <i class="fa-solid fa-arrow-left"></i>
            <span className="text-back"> Quay lại </span>
          </Link>
          <div className="main-title">
            <h2>Đăng kí xe</h2>
          </div>
        </div>

        <div className="car-register-mode">
          <div className="register-mode">
            <img
              src={registercar}
              alt="xe "
              className="registercar-img-header"
            />
          </div>
          <div className="btn-registercar">
            <Link to="/Home1" className="btn-submit">
              Đăng kí xe cho thuê
            </Link>
          </div>
        </div>
        <div className="car-register-content">
          <h2 className="title-content ta-ct">Gia tăng thu nhập từ 5-10tr/tháng với Tiến</h2>{" "}
          <div className="content-inner">
            <p className="ta-ct">
              Thủ tục đăng ký 4 bước đơn giản & nhanh chóng:
            </p>
            <div className="steps">
              <div className="steps-item">Điền thông tin xe</div>
              <div className="steps-item">Tải hình ảnh xe</div>
              <div className="steps-item">Mioto tư vấn chủ xe & phê duyệt</div>
              <div className="steps-item">Bắt đầu cho thuê</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registercar;
