import { Button, Col, Form, Input, Modal, Row } from "antd";
import { useState } from "react";
import ManageModelTable from "./components/manage-model-table";
import "./manage-model.css";
const ManageModel = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Row style={{ padding: "20px" }}>
        <Col span={24} xxl={24} xl={24}>
          <Row justify={"space-between"}>
            <Col>
              <span className="titleCamera">LIST MODEL DEEPFAKE DETECTION</span>{" "}
            </Col>
            <Col>
              <Row gutter={[10, 0]}>
                {/* <Col>
                  <DatePicker
                    onChange={onChangeDate}
                    needConfirm
                    defaultValue={currentTime}
                  />
                </Col> */}
                <Col>
                  <Button type="primary" onClick={showModal}>
                    Add model
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            justify={"space-between"}
            style={{
              marginTop: "30px",
            }}
            gutter={[0, 30]}
          >
            <Col xl={24} xs={24} style={{ backgroundColor: "#fff" }}>
              <Row
                justify={"space-between"}
                gutter={[0, 40]}
                style={{ padding: "20px" }}
              >
                <ManageModelTable data />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        title="Add model"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Huỷ"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="rtsp_url"
            label="Link rtsp"
            rules={[{ required: true, message: "Vui lòng nhập link rtsp" }]}
          >
            <Input placeholder="Nhập link rtsp" />
          </Form.Item>
          <Form.Item
            name="location"
            label="Vị trí"
            rules={[{ required: true, message: "Vui lòng nhập vị trí" }]}
          >
            <Input placeholder="Nhập vị trí" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ManageModel;
