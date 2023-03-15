import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Row, Col, Input, Button } from "antd";
import "./style.scss";

export const DetailPost = (props: any) => {
  const { open, setOpen, userEntity } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    if (userEntity) {
      form.setFieldsValue({ ...userEntity });
    }
  }, [userEntity]);

  return (
    <Modal
      visible={open}
      onCancel={() => setOpen(false)}
      title="Detail Post"
      footer={null}
      width={900}
      wrapClassName="management-wrapper-modal"
    >
      <Form form={form} name="control-hooks" layout="vertical">
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Form.Item name="userId" label="User ID">
              <Input disabled />
            </Form.Item>
            <Form.Item name="title" label="Title">
              <Input disabled />
            </Form.Item>
            <Form.Item name="body" label="Body">
              <Input.TextArea disabled />
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="management-modal-footer">
              <Button className="close-button" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
