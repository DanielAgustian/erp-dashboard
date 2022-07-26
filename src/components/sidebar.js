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
import { useNavigate } from "react-router-dom"



function ImageLogo(asset, currLocation) {
  return (
    <>
      <img src={asset} className="logo__menu"></img>
    </>
  );
}

// submenu keys of first level

function SideBar(params) {
  const navigate = useNavigate()

  const redirect = (link) => {
    // navigate(link);
    console.log(link.key);
    navigate(link.key);
  };
  const items = [
    { label: "Yokesen", key: "/yokesen", icon: ImageLogo(LogoYokesen) }, // remember to pass the key prop
    {
      label: "Warisan",
      key: "/warisan",
      icon: ImageLogo(LogoYokesen),
      children: [
        { label: "Paket AR", key: "/warisan/paket-ar" },
        { label: "Transaksi Paket", key: "/warisan/transaksi-paket" },
        { label: "Vendor", key: "/warisan/vendor" },
        { label: "Transaksi RO", key: "/warisan/transaksi-ro" },
        { label: "Stok", key: "/warisan/stok" },
        { label: "Form Pengajuan", key: "/warisan/form-pengajuan" },
        { label: "Budget", key: "/warisan/budget" },
      ],
    }, // which is required
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
            onClick={redirect}
        />
      </Sider>
    </>
  );
}

export default SideBar;
