// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Table, Col, Button, Row, Select, Form } from "antd";
import axios from "axios";
import { EyeOutlined } from "@ant-design/icons";
import { DetailPost } from "./detail-post";
import TextField from "../../Components/TextField";

export const PostsManagement = () => {
  const [tableData, setTableData] = useState([]);
  const [open, setOpen] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [form] = Form.useForm();
  const getData = async () => {
    try {
      const fetchApi = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setTableData(fetchApi?.data);
    } catch (error) {
      setTableData([]);
    }
  };

  const onSubmit = (data) => {
    if (data?.title !== "" && tableData) {
      const searchData = tableData.filter((item) =>
        item?.title.includes(data?.title)
      );
      setTableData(searchData);
    } else {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (value: any, record: any) => (
        <EyeOutlined
          onClick={() => {
            setDetailData(record);
            setOpen(true);
          }}
        />
      ),
      align: "center" as any,
    },
  ];
  return (
    <div className="management-layout">
      <div
        className="management-layout-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="d-flex align-items-center auto-wrap">
          <h2>Users Management</h2>
        </div>
        <Form
          onFinish={onSubmit}
          form={form}
          name="control-hooks"
          layout="inline"
        >
          <Row gutter={[24, 24]} className="auto-wrap" style={{display: 'flex', alignItems: 'center'}}>
            <Col xs={24} md={15}>
              <Form.Item name="title">
                <TextField />
              </Form.Item>
            </Col>
            <Col xs={24} md={9}>
              <Button key="submit" htmlType="submit" className="close-button">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Table columns={columns} dataSource={tableData} />
      </div>
      {open && (
        <DetailPost open={open} setOpen={setOpen} userEntity={detailData} />
      )}
    </div>
  );
};
