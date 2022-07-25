import { Layout, Menu } from "antd";
import "../asset/sidebar.css";
import logo from "../asset/images/logo-yokesen.png";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";
import LogoYokesen from "../asset/images/logogram.png";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function ImageLogo(asset, currLocation) {
  return (
    <>
      <img src={asset} className="logo__menu"></img>
    </>
  );
}

// submenu keys of first level

function SideBar(params) {
  const items = [
    getItem("Yokesen", "sub1", ImageLogo(LogoYokesen), [
      getItem("Option 1", "1"),
      getItem("Option 2", "2"),
      getItem("Option 3", "3"),
      getItem("Option 4", "4"),
    ]),
    getItem("Warisan", "sub2", ImageLogo(LogoYokesen), [
      getItem("Paket AR", "5"),
      getItem("Transaksi Paket", "6"),
      getItem("Vendor", "7"),
      getItem("Transaksi RO", '8'),
      getItem("Stok", '10'),
      getItem("Form Pengajuan", '11'),
      getItem("Budget", '12')
    ]),
    getItem("Navigation Three", "sub4", ImageLogo(LogoYokesen), [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ];

  return (
    <>
      <Sider
        className="bg-sidebar min-vh-100 w-100"
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="padd__sidebar"></div>
        <div className="px-3 mb-4">
          <img src={logo} className="logo__sidebar"></img>
        </div>
       
        <Menu
          mode="inline"
          defaultSelectedKeys={[2]}
          items={items}
          style={{ border: 0 }}
        />
      </Sider>
    </>
  );
}

export default SideBar;
