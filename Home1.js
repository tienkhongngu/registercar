import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./cssCompoment/layout.css";
import "./cssCompoment/registercar.css";

function Home1() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  // Dữ liệu về loại xe và mẫu xe
  const types = ["Sedan", "SUV", "Crossover"];
  const models = {
    Sedan: ["Toyota Camry", "Honda Accord", "Nissan Altima"],
    SUV: ["Toyota RAV4", "Honda CR-V", "Ford Explorer"],
    Crossover: ["Honda HR-V", "Subaru Crosstrek", "Nissan Rogue"],
  };

  // Xử lý thay đổi loại xe
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setSelectedModel(""); // Đặt mẫu xe về giá trị mặc định khi thay đổi loại xe
  };

  // Xử lý thay đổi mẫu xe
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  // Chọn năm sản xuất
  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }

  // Chọn số ghế
  const [selectedSeats, setSelectedSeats] = useState("");

  // Dữ liệu về số ghế
  // const seatOptions = [2, 4, 5, 7, 8];
  const seatOptions = Array.from({ length: 19 }, (_, index) => index + 2);

  // Xử lý thay đổi số ghế
  const handleSeatsChange = (event) => {
    setSelectedSeats(event.target.value);
  };

  const [text, setText] = useState("");

  // Xử lý thay đổi nội dung
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className="module-register">
        <div className="car-register pd-100">
          <div className="car-register-title">
            <Link to="/Registercar" className="back-title">
              <i class="fa-solid fa-arrow-left"></i>
              <span className="text-back"> Quay lại </span>
            </Link>
            <div className="main-title">
              <h2>Đăng kí xe</h2>
            </div>
          </div>
          <div className="mode">
            <div className="car-register-mode">
              <div className="step-number">
                <ul>
                  <li className=" stepbystep ">
                    <span className="number active">1</span>
                    <span className="">Thông tin</span>
                  </li>
                  <li className="stepbystep">
                    <span className="number">2</span>
                    <span className="">Cho thuê</span>
                  </li>
                  <li className="stepbystep">
                    <span className="number">3</span>
                    <span className="">Hình ảnh</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clear-line"></div>

            <div className="form-default car-register-content">
              <h2 className=" title-content"> Biển số xe</h2>
              <p className="text-content attention">
                Lưu ý: Biển số sẽ không thể thay đổi sau khi đăng kí.
              </p>
              <input type="text" className="register-input" name=""></input>
              <div className="clear-line"></div>
              <div className="car-register-content">
                <h2 className=" title-content">Thông tin cơ bản</h2>
                <p className="text-content attention">
                  Lưu ý: Các thông tin cơ bản sẽ không thể thay đổi sau khi đăng
                  kí.
                </p>
              </div>

              {/*Chọn hãng xe, mẫu xe */}
              <Row className="g-2">
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Chọn loại xe"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      value={selectedType}
                      onChange={handleTypeChange}
                    >
                      {types.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                {/* Ẩn mẫu xe, chọn hãng xe mới hiện */}{" "}
                {selectedType && (
                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Chọn mẫu xe"
                    >
                      <Form.Select
                        aria-label="Floating label select example"
                        value={selectedModel}
                        onChange={handleModelChange}
                      >
                        {models[selectedType].map((model, index) => (
                          <option key={index} value={model}>
                            {model}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                )}
              </Row>
              <div className="clear-line"></div>
              {/* Chọn số ghế, năm sản xuất*/}
              <Row className="g-2">
                {/* Chọn số ghế */}
                <Col md>
                  <FloatingLabel controlId="floatingSelectGrid" label="Số ghế">
                    <Form.Select
                      aria-label="Floating label select example"
                      value={selectedSeats}
                      onChange={handleSeatsChange}
                    >
                      <option value="">Chọn số ghế</option>
                      {seatOptions.map((seats, index) => (
                        <option key={index} value={seats}>
                          {seats} ghế
                        </option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Col>

                {/* chọn năm sản xuất*/}
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Năm sản xuất"
                  >
                    <Form.Select aria-label="Floating label select example">
                      {years.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>

              <div className="clear-line"></div>

              {/* Chọn số, chọn nhiên liệu*/}
              <Row className="g-2">
                {/* Chọn số */}
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Truyền động"
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option value="1">Số sàn</option>
                      <option value="2">Số tự động</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>

                {/* Chọn nhiên liệu */}
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Loại nhiên liệu"
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option value="1">Xăng</option>
                      <option value="2">Dầu diesel</option>
                      <option value="3">Điện</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              <div className="clear-line"></div>
              <div className="car-register-content">
                <h2 className=" title-content"> Mức tiêu thụ nhiên liệu</h2>
                <p className="text-content">
                  Số lít nhiên liệu cho quãng đường 100km
                </p>
                <input type="number" className="register-input" name=""></input>
              </div>

              <div className="clear-line"></div>
              <div className="car-register-content">
                <h2 className=" title-content"> Mô tả</h2>
                <textarea className="register-input-full"
                  rows="4" // Số hàng mặc định
                  cols="50" // Số cột mặc định
                  value={text}
                  onChange={handleTextChange}
                  placeholder="Huyndai Elantra số tự động đăng kí tháng 06/2018. Xe gia đình mới đẹp, nội thất nguyên bản, sạch sẽ, bảo dưỡng thường xuyên, rửa xe miễn phí cho khách. Xe rộng rãi, an toàn, tiện nghi, phù hợp cho gia đình du lịch. Xe trang bị hệ thống cảm biến lùi, gạt mưa tự động, đèn pha tự động, camera hành trình, hệ thống giải trí AV cùng nhiều tiện nghi khác..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
