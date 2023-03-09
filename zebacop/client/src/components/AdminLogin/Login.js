import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { Adminlogin } from "../../APIs/UserApi";



function Login() {

  const Navigate = useNavigate();

  const onFinish = (values) => {

    console.log("Success:", values);
  
    Adminlogin(values).then((response) => {
      console.log("login then..", response)
      console.log("admin token..", response.data.AdminToken)
  
      localStorage.setItem('AdminToken', response.data.AdminToken);

      Navigate("/admin");

  
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };




  return (
    <div className="LoginWrapper">
      <div className="login_form_container">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "blue" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
