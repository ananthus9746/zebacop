import { Form, Input, Radio, Space, InputNumber, Upload } from "antd";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

import "./FormsAntd.css";
import { Button } from "antd";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values) => {
  console.log("FINISH", values);
};

function FormsAntd() {
  const [value, setValue] = useState();
  const [valueBlock, setValueBlock] = useState();

  const [other, setOther] = useState();
  const [other2, setothe2] = useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onChangeTwo = (e) => {
    setValueBlock(e.target.value);
  };

  return (
    <div className="FormsAntd">
      <Form
        className="Form_FormsAntd"
        name="nest-messages"
        onFinish={onFinish}
        // style={{
        //   maxWidth: 1000,
        // }}
        validateMessages={validateMessages}
      >
        <label htmlFor="">Project name</label>
        <Form.Item>
          <Input required />
        </Form.Item>

        <label htmlFor="">Whats your project about</label>

        <Form.Item
          name="radio"
          rules={[{ required: true, message: "Please select an option!" }]}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio className="FormsAntd" value={"Gamefi"}>
                Gamefi
              </Radio>
              <Radio className="FormsAntd" value={"NFT"}>
                NFT
              </Radio>
              <Radio className="FormsAntd" value={"Metaverse"}>
                Metaverse
              </Radio>
              <Radio className="FormsAntd" value={"other"}>
                {" "}
                Other...
                {value === "other" ? (
                  <Input
                    required
                    onChange={(e) => {
                      setOther(e.target.value);
                    }}
                  />
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <label htmlFor="">One sentence introduction</label>
        <Form.Item>
          <Input required />
        </Form.Item>

        <label htmlFor="">Token / Symbol</label>
        <Form.Item>
          <Input required />
        </Form.Item>

        <label htmlFor="">Discription about your project</label>

        <Form.Item name={["user", "introduction"]}>
          <Input.TextArea required />
        </Form.Item>

        <label htmlFor="">Block chain / platform</label>
        <Form.Item
          name="radio1"
          rules={[{ required: true, message: "Please select an option 2!" }]}
        >
          <Radio.Group onChange={onChangeTwo} value={value}>
            <Space direction="vertical">
              <Radio className="FormsAntd" value={"BinanceSmatChain"}>
                Binance Smat Chain
              </Radio>
              <Radio className="FormsAntd" value={"Polygon"}>
                Polygon
              </Radio>
              <Radio className="FormsAntd" value={"Avalanch"}>
                Avalanch
              </Radio>
              <Radio className="FormsAntd" value={"Solana"}>
                Solana
              </Radio>

              <Radio className="FormsAntd" value={"other2"}>
                Other...
                {valueBlock === "other2" ? (
                  <Input
                    required
                    onChange={(e) => {
                      setothe2(e.target.value);
                    }}
                  />
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        {/* EMAIL */}
        <label htmlFor="">Email</label>
        <Form.Item
          name={["email"]}
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input required />
        </Form.Item>

        <label htmlFor="">Telegram</label>
        <Form.Item>
          <Input required />
        </Form.Item>

        <label htmlFor="">Twitter</label>
        <Form.Item>
          <Input required />
        </Form.Item>

        <Form.Item>
          <Upload
            //   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            required
          >
            <Button icon={<UploadOutlined />}>Upload image or logo</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "blue",
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormsAntd;
