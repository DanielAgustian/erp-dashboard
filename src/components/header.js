import { Input, Button, Modal, PageHeader, Select, Form } from "antd";
import React, { useState } from "react";
import "../asset/header.css";
const { Search } = Input;
const { Option } = Select;

function HeaderSearch() {
  const [search, setSearch] = useState("");
  const onSearch = (word) => setSearch(word);
  return (
    <PageHeader
      className="site-page-header header-search"
      // subTitle="This is a subtitle"
      // tags={<Tag color="blue">Running</Tag>}
      extra={[
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />,
      ]}
    ></PageHeader>
  );
}

function HeaderButton() {
  const [isModalVisible, setModalVisible] = useState(false);
  const onClickSKU = () => {
    setModalVisible(true);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleCancel = () => {
    setModalVisible(false);
  }
  const children = [];

  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  return (
    <PageHeader
      className="site-page-header header-button"
      // subTitle="This is a subtitle"
      // tags={<Tag color="blue">Running</Tag>}
      extra={[
        <>
          <Button className="btn btn__white" onClick={onClickSKU}>
            Tambah SKU
          </Button>

          <a href="/warisan/riwayat-ar" className="ms-3">
            <Button className="btn btn__primary">Riwayat Master</Button>
          </a>
          <Modal
            className="modal__add__sku"
            visible={isModalVisible}
            footer={null}
            closable={false}
          >
            <h6 className="title mb-0">Tambah SKU Paket AR</h6>
            <p className="detail mb-4">Silakan masukan data dengan benar!</p>

            <Form className="form__sku">
              <div className="row align-items-center">
                <div className="col-lg-4 label__form ">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="">Kode SKU</p>
                    <p>:</p>
                  </div>
                </div>
                <div className="col-lg-8 ">
                  <Form.Item
                    className=""
                    name="sku"
                    rules={[
                      {
                        required: true,
                        message: "Masukan kode SKU",
                      },
                    ]}
                  >
                    <Input placeholder="Masukan Email Anda"></Input>
                  </Form.Item>
                </div>
              </div>
              <div className="row align-items-center mt-3">
                <div className="col-lg-4 label__form ">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="">Nama Paket</p>
                    <p>:</p>
                  </div>
                </div>
                <div className="col-lg-8 ">
                  <Form.Item
                    className=""
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Masukan Nama Paket min. 4 Karakter",
                      },
                    ]}
                  >
                    <Input placeholder="Masukan Email Anda"></Input>
                  </Form.Item>
                </div>
              </div>
              <div className="row align-items-center mt-3">
                <div className="col-lg-4 label__form ">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="">Harga Penjualan</p>
                    <p>:</p>
                  </div>
                </div>
                <div className="col-lg-8 ">
                  <Form.Item
                    className=""
                    name="harga"
                    rules={[
                      {
                        required: true,
                        message: "Rp",
                      },
                    ]}
                  >
                    <Input placeholder="Masukan Email Anda"></Input>
                  </Form.Item>
                </div>
              </div>
              <div className="row align-items-center mt-3">
                <div className="col-lg-4 label__form ">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="">HPP</p>
                    <p>:</p>
                  </div>
                </div>
                <div className="col-lg-8 ">
                  <Form.Item
                    className=""
                    name="hpp"
                    rules={[
                      {
                        required: true,
                        message: "Rp",
                      },
                    ]}
                  >
                    <Input placeholder="Masukan Email Anda"></Input>
                  </Form.Item>
                </div>
              </div>
              <div className="row align-items-center mt-3 mb-4">
                <div className="col-lg-4 label__form ">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="">Detail Produk & Harga</p>
                    <p>:</p>
                  </div>
                </div>
                <div className="col-lg-8 ">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please select"
                    defaultValue={["a10", "c12"]}
                    onChange={handleChange}
                  >
                    {children}
                  </Select>
                </div>
              </div>
              <div className="row btn__sku__modal">
                <div className="col-6">
                    <Button className="btn btn__white w-100" onClick={handleCancel}>Batalkan</Button>
                </div>
                <div className="col-6">
                  <Button className="btn btn__primary w-100">Tambah SKU</Button>
                </div>
              </div>
            </Form>
          </Modal>
        </>,
      ]}
    ></PageHeader>
  );
}
export { HeaderSearch, HeaderButton };
