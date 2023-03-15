// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Row, Col, Input, Button, DatePicker } from "antd";
import styled from "styled-components";
import { CloseIcon } from "../../icon";
import TextField from "../../Components/TextField";

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 56px;
  border: 1px solid #bfc9d9;
  border-radius: 10px;

  Input[type="color"] {
    margin-right: 1px;
    -webkit-appearance: none;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 20px;
      height: 20px;
    }
    &::-webkit-color-swatch {
      border: 1px solid #bfc9d9;
      border-radius: 20px;
      padding: 0;
    }
  }

  Input[type="text"] {
    border: none;
    width: 100%;
    font-size: 16px;
    background-color: white;
    color: black;
  }
  button {
    background: transparent;
    border: none;
    margin-left: auto;
    opacity: "0.5";
    visibility: hidden;
  }
  &:hover {
    button {
      visibility: ${(props: any) => (props.value ? "visible" : "hidden")};
    }
  }
`;

const ColorPicker = (props: any) => {
  return (
    <label className="w-100">
      <Container value={props.value}>
        <Input type="color" {...props} />
        {props.value || (
          <p className="placeholder-color-picker">{props.placeholder}</p>
        )}
        <button
          type="button"
          onClick={(e) => {
            props.onChange("");
          }}
        >
          <CloseIcon />
        </button>
      </Container>
    </label>
  );
};

export const Setting = () => {
  const [form] = Form.useForm();
  const titleForm = Form.useWatch("title", form);
  const emailForm = Form.useWatch("email", form);
  const colorForm = Form.useWatch("color", form);
  const dateForm = Form.useWatch("date", form);

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="management-layout">
      <div className="d-flex justify-content-between align-items-center management-layout-header">
        <div className="d-flex align-items-center auto-wrap">
          <h2>Setting</h2>
        </div>
      </div>
      <div>
        <Form
          onFinish={onSubmit}
          form={form}
          name="control-hooks"
          layout="vertical"
          scrollToFirstError
        >
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Form.Item
                name="title"
                label="Title: "
                rules={[
                  {
                    required: true,
                    message: "Title is required",
                  },
                ]}
              >
                <TextField placeholder="Please input title" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="Email: "
                rules={[
                  {
                    required: true,
                    message: "Email is required",
                  },
                  {
                    type: "email",
                    message: "Email is invalid",
                  },
                ]}
              >
                <TextField placeholder="Please input email" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="color"
                label="Background color: "
                rules={[
                  {
                    required: true,
                    message: "Background color is required",
                  },
                ]}
              >
                <ColorPicker placeholder="Please choose background color" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="date"
                label="Active date: "
                rules={[
                  {
                    required: true,
                    message: "Active date is required",
                  },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Please choose active date"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              {titleForm || emailForm || colorForm || dateForm ? (
                <Button
                  className="close-button"
                  key="submit"
                  htmlType="submit"
                  type="primary"
                >
                  Save
                </Button>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
