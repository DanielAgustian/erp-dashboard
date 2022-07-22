import { Form, Input, Button } from "antd";
import { useState } from "react";
import "../../asset/login.css";
import logo from "../../asset/images/logo-yokesen.png";
import bg from "../../asset/images/login-bg.png";
function ForgotPasswordPage(params) {
  const [inputs, setInputs] = useState({});
  const [sentData, setSendData] = useState(false);
  const onClick = () => {
    setSendData(true);
  };

  return (
    <>
      <div className="login__div position-relative">
        <img className="position-absolute img__bg" src={bg}></img>
        <div className="container container__login">
          <div className="row justify-content-lg-start justify-content-center">
            <div className="col-lg-5 col-md-8 col-12 mt-4 mb-4">
              <img src={logo} className="img__logo mb-5"></img>
              <h1 className="title__login mb-3">Forget Password</h1>
              {sentData == true ? (
                <>
                  <div className="d-flex mb-4">
                    <p>We sent you an email with a link to update your password; please follow the instructions in the email.</p>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <Button type="primary" className="btn w-100 btn__primary">Log In Again</Button>
                    </div>
                    <div className="col-6">
                      <Button className="btn btn__white w-100">I don't get any email</Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex mb-4">
                    <p>Please enter your email to update password</p>
                  </div>
                  <Form className="form__login">
                    <label>Email Address</label>
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

                    <Form.Item className="mt-5">
                      <Button className="" type="primary" onClick={onClick}>
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordPage;
