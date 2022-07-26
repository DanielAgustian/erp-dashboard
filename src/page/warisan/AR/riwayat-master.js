import SideBar from "../../../components/sidebar";
import { Layout, Input, Button, Dropdown, Menu, Space, Pagination } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { HeaderSearch, HeaderButton } from "../../../components/header";
import "../../../asset/dashboard.css";
import TableComponentAR from "../../../components/table_ar";

const { Content } = Layout;
const { Search } = Input;

function RiwayatARPage() {
  const onSearch = (word) => {};
  const list = [];
  // Setting Column
  const columns = [
    {
      title: "Nama Paket",
      dataIndex: "nama_paket",
      fixed: "left",
    },
    {
      title: "Penjualan",
      dataIndex: "penjualan",
      // fixed: 'left'
    },
    {
      title: "HPP",
      dataIndex: "hpp",
    },
    {
      title: "Pay Out Reseller 30%",
      dataIndex: "payout_reseller",
    },
    {
      title: "Fee Gudang 5%",
      dataIndex: "fee_gudang",
    },
    {
      title: "Profit WPD",
      dataIndex: "profit_wpd",
    },
    {
      title: "Pajak Bruto 0.5%",
      dataIndex: "pajak_bruto",
    },
    {
      title: "Asuransi 1.5%",
      dataIndex: "asuransi",
    },
    {
      title: "Budget Promo",
      dataIndex: "budget_promo",
    },
    {
      title: "Profit Final",
      dataIndex: "profit_final",
    },
    {
      title: "Bonus K/D",
      dataIndex: "bonus_kd",
    },
  ];
  const dataTable = [];
  for (let i = 0; i < 2; i++) {
    dataTable.push({
      key: i,
      nama_paket: `Paket Warisan ${i}`,
      penjualan: "Rp. 299.000",
      hpp: `Rp. 98.000`,
      payout_reseller: "Rp. 89.700",
      fee_gudang: "Rp. 15.000",
      profit_wpd: "Rp. 44.850",
      pajak_bruto: "Rp. 1.200",
      asuransi: "Rp. 4.485",
      budget_promo: "Rp. 12.395",
      profit_final: "Rp. 44.850",
      bonus_kd: "Rp. 30.000",
    });
  }
  const menu = (
    <Menu
      items={[
        {
          key: "terbaru",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              Urutkan: Terbaru
            </a>
          ),
        },
        {
          key: "terlama",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              Urutkan: Terlama
            </a>
          ),
        },
      ]}
    />
  );
  const onChangePage = () => {};

  const dropdownMenu = () => {
    return (
      <div className="my-4 d-flex">
        <div className=" box__dropdown">
          <Dropdown overlay={menu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Urutkan: Terbaru
                <DownOutlined classID="ms-2" />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    );
  };
  const LesserHeader = () => {
    return (
      <div className="row align-items-center justify-content-between mt-4">
        <div className="col-lg-4 col-md-4">
          <div className="d-flex align-items-center">
            <a href="/warisan/paket-ar">
              <Button type="text" className=" back_btn">
                <div>
                  <i class="fa-solid fa-chevron-left"></i>
                </div>
              </Button>
            </a>

            <h6 className="mb-0 title__dashboard">Riwayat Master</h6>
          </div>
          <div className="d-flex">
            <div className="back_bot"></div>
            <a href="/warisan/paket-ar">
              <div className="breadcrumbs">
                <span>Paket AR / </span>
                Riwayat Master
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 ">
          <div className="d-flex align-items-center justify-content-end ">
            <div className="header-search">
              <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{
                  width: 200,
                }}
              />
            </div>

            <Button className="btn btn__primary btn_cetak ms-3">
              <div className="d-flex justify-content-center align-items-center">
                <div className="mr-2 me-2">
                  <i class="fa-solid fa-print "></i>
                </div>
                Cetak
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  };
  const PeriodTable = (period, change) =>{
    return (
        <div className="d-flex align-items-center period__div">
            <h6 className="mr-5 me-5">Periode: {period}</h6>
            <h6>Perubahan: {change}</h6>
        </div>
    );
  }
  for (let index = 0; index < 4; index++) {
    list.push(
      <>
        {PeriodTable('DD/MM/YYYY - DD/MM/YYYY','Harga')}
        <TableComponentAR
          column={columns}
          dataTable={dataTable}
        ></TableComponentAR>
        <div className="mb-4"></div>
      </>
    );
  }
  return (
    <>
      <Layout>
        <div className="d-flex">
          <SideBar></SideBar>
          <Layout className="bg-white">
            <HeaderSearch></HeaderSearch>
            {/* <HeaderButton></HeaderButton> */}
            <Content>
              <div className="container">
                {LesserHeader()}
                {dropdownMenu()}

                {list}
              </div>
            </Content>
          </Layout>
        </div>
      </Layout>
    </>
  );
}

export default RiwayatARPage;
