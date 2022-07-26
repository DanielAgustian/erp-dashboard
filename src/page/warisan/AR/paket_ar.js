import SideBar from "../../../components/sidebar";
import { Layout, Input, Button, Table, Pagination } from "antd";
// import { Content } from "antd/lib/layout/layout";
import { HeaderSearch, HeaderButton } from "../../../components/header";
import "../../../asset/dashboard.css";
import TableComponentAR from "../../../components/table_ar";

const { Content } = Layout;
const { Search } = Input;

function PaketARPage() {
  const onSearch = (word) => {};
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
  for (let i = 0; i < 10; i++) {
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
  const onChangePage = () => {};
  const LesserHeader = () => {
    return (
      <div className="row align-items-center justify-content-between mt-4">
        <div className="col-lg-4 col-md-4">
          <h5 className="mb-0 title__dashboard">Daftar Paket AR</h5>
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
  const paginationTable = () => {
    return (
      <div className="d-md-flex d-block justify-content-between pagination__div">
        <p className="mb-0 pagination__status mr-4 me-4">
          Menampilkan 1/16 Halaman
        </p>
        <Pagination
          showSizeChanger={false}
          onChange={onChangePage}
          defaultCurrent={1}
          total={100}
        />
      </div>
    );
  };
  return (
    <>
      <Layout>
        <div className="d-flex">
          <SideBar></SideBar>
          <Layout className="bg-white">
            {/* <HeaderSearch></HeaderSearch> */}
            <HeaderButton></HeaderButton>
            <Content>
              <div className="container">
                {LesserHeader()}
                <div className="mt-5">
                  <TableComponentAR
                    column={columns}
                    dataTable={dataTable}
                  ></TableComponentAR>
                </div>

                {paginationTable()}
              </div>
            </Content>
          </Layout>
        </div>
      </Layout>
    </>
  );
}

export default PaketARPage;
