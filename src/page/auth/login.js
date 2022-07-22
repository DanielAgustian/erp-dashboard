import { Form, Input, Button } from "antd";
import { useState } from "react";
import "../../asset/login.css";
import logo from "../../asset/images/logo-yokesen.png";
import bg from "../../asset/images/login-bg.png";
function LoginPage(params) {
  const [inputs, setInputs] = useState({});
  let url = "register";
  return (
    <>
      <div className="login__div position-relative ">
        <img className="position-absolute img__bg" src={bg}></img>
        <div className="container container__login">
          <div className="padding__form"></div>
          <div className="row justify-content-lg-start justify-content-center">
            <div className="col-lg-5 col-md-8 col-12 mt-4 mb-4">
              <img src={logo} className="img__logo mb-5"></img>
              <h1 className="title__login mb-3">Sign In</h1>
              <div className="d-flex mb-4">
                <a href={url}>
                  <p>Create New Account</p>
                </a>
              </div>

              <Form className="form__login mb-5 mb-md-0">
                <label>Email</label>
                <Form.Item
                  className="mb-4"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input email",
                    },
                  ]}
                >
                  <Input placeholder="Masukan Email Anda"></Input>
                </Form.Item>
                <label>Password</label>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Masukan Password (min 8 Karakter)" />
                </Form.Item>
                <Form.Item className="mt-5">
                  <Button className="" type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="padding__form"></div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
