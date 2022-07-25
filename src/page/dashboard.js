import SideBar from "../components/sidebar";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Header from "../components/header";

function DashboardPage() {
  return (
    <>
      <Layout>
        <SideBar></SideBar>
        <Layout>
            <Header></Header>
        </Layout>
      </Layout>
    </>
  );
}

export default DashboardPage;
