import { Layout, Menu } from "antd";
import "../asset/sidebar.css";
import logo from "../asset/images/logo-yokesen.png";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
]; // submenu keys of first level


function SideBar(params) {
 

  
  return (
    <>
      <div className="bg-sidebar min-vh-100">
        <div className="padd__sidebar"></div>
        <div className="px-3 mb-3">
        <img src={logo} className="logo__sidebar"></img>
        </div>
        
        <Menu mode="inline" items={items} />
      </div>
    </>
  );
}

export default SideBar;
