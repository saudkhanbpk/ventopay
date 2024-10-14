import { useState } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Input,
  Typography,
  Space,
  Dropdown,
  Modal,
  Button,
} from "antd";

import image from "../assets/avatar.jpg";
import {
  DashboardOutlined,
  ShopOutlined,
  DownOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  UserOutlined,
  TransactionOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
  StarOutlined,
  TagOutlined,
  PlusCircleOutlined,
  GroupOutlined,
  DollarOutlined,
  BarsOutlined,
  FileSearchOutlined,
  PictureOutlined,
  NotificationOutlined,
  CreditCardOutlined,
  TeamOutlined,
  MailOutlined,
  MessageOutlined,
  GiftOutlined,
  StockOutlined,
  AreaChartOutlined,
  DollarCircleOutlined,
  GlobalOutlined,
  MobileOutlined,
  QuestionCircleOutlined,
  FileProtectOutlined,
  TranslationOutlined,
  SafetyCertificateOutlined,
  SyncOutlined,
  ClearOutlined,
  BellOutlined,
  MoonFilled,
} from "@ant-design/icons";
import DashboardContent from "./DashboardContent";

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "2", icon: <ShopOutlined />, label: "POS System" },
    {
      key: "3",
      icon: <ShoppingCartOutlined />,
      label: "Order",
      children: [
        { key: "3-1", icon: <ShoppingCartOutlined />, label: "All orders" },
        { key: "3-2", icon: <StarOutlined />, label: "Reviews" },
        { key: "3-3", icon: <FileSearchOutlined />, label: "Order status" },
      ],
    },
    {
      key: "4",
      icon: <ShopOutlined />,
      label: "Shops",
      children: [
        { key: "4-1", icon: <ShopOutlined />, label: "Shops" },
        { key: "4-2", icon: <TagOutlined />, label: "Shop/Restaurant tags" },
        { key: "4-3", icon: <StarOutlined />, label: "Shop reviews" },
      ],
    },
    {
      key: "5",
      icon: <AppstoreOutlined />,
      label: "Product",
      children: [
        { key: "5-1", icon: <AppstoreOutlined />, label: "Products" },
        { key: "5-2", icon: <PlusCircleOutlined />, label: "Addons" },
        { key: "5-3", icon: <PlusCircleOutlined />, label: "Extras" },
        { key: "5-4", icon: <GroupOutlined />, label: "Extra group" },
        { key: "5-5", icon: <DollarOutlined />, label: "Extra value" },
        { key: "5-6", icon: <BarsOutlined />, label: "Categories" },
        { key: "5-7", icon: <StarOutlined />, label: "Product reviews" },
      ],
    },
    {
      key: "6",
      icon: <FileTextOutlined />,
      label: "Content",
      children: [
        { key: "6-1", icon: <FileTextOutlined />, label: "Brands" },
        { key: "6-2", icon: <UserOutlined />, label: "Career" },
        { key: "6-3", icon: <BarsOutlined />, label: "Career Categories" },
        { key: "6-4", icon: <GroupOutlined />, label: "Units" },
        { key: "6-5", icon: <PictureOutlined />, label: "Banners" },
        { key: "6-6", icon: <FileTextOutlined />, label: "Blogs" },
        { key: "6-7", icon: <PictureOutlined />, label: "Gallery" },
        { key: "6-8", icon: <NotificationOutlined />, label: "Notifications" },
      ],
    },
    {
      key: "7",
      icon: <UserOutlined />,
      label: "Subscriptions",
      children: [
        { key: "7-1", icon: <UserOutlined />, label: "Subscriptions" },
        {
          key: "7-2",
          icon: <SettingOutlined />,
          label: "subscription.options",
        },
      ],
    },
    {
      key: "8",
      icon: <UserOutlined />,
      label: "Customer",
      children: [
        { key: "8-1", icon: <DollarOutlined />, label: "Payment to sellers" },
        { key: "8-2", icon: <CreditCardOutlined />, label: "completed.pay..." },
        { key: "8-3", icon: <TeamOutlined />, label: "Users" },
        { key: "8-4", icon: <UserOutlined />, label: "Clients" },
        { key: "8-5", icon: <TeamOutlined />, label: "Users" },
        { key: "8-6", icon: <UserOutlined />, label: "Roles" },
        { key: "8-7", icon: <MailOutlined />, label: "Email subscriber" },
        { key: "8-8", icon: <MessageOutlined />, label: "Message subscr..." },
      ],
    },
    {
      key: "9",
      icon: <TransactionOutlined />,
      label: "Transaction",
      children: [
        { key: "9-1", icon: <TransactionOutlined />, label: "Transactions" },
        { key: "9-2", icon: <UserOutlined />, label: "Subscriptions" },
      ],
    },
    {
      key: "10",
      icon: <BarChartOutlined />,
      label: "Marketing",
      children: [
        { key: "10-1", icon: <DollarOutlined />, label: "Cashback" },
        { key: "10-2", icon: <TeamOutlined />, label: "Referral" },
        { key: "10-3", icon: <GiftOutlined />, label: "Bonus" },
      ],
    },
    {
      key: "11",
      icon: <BarChartOutlined />,
      label: "Analytics and reports",
      children: [
        { key: "11-1", icon: <AppstoreOutlined />, label: "Products" },
        { key: "11-2", icon: <ShoppingCartOutlined />, label: "Order" },
        { key: "11-3", icon: <StockOutlined />, label: "Stock" },
        { key: "11-4", icon: <BarsOutlined />, label: "Category" },
        { key: "11-5", icon: <AreaChartOutlined />, label: "Overview" },
        { key: "11-6", icon: <DollarCircleOutlined />, label: "Revenue" },
        { key: "11-7", icon: <BarChartOutlined />, label: "Variation" },
      ],
    },
    {
      key: "12",
      icon: <SettingOutlined />,
      label: "Business settings",
      children: [
        { key: "12-1", icon: <SettingOutlined />, label: "General settings" },
        { key: "12-2", icon: <DollarOutlined />, label: "Currencies" },
        { key: "12-3", icon: <CreditCardOutlined />, label: "Payments" },
        { key: "12-4", icon: <FileTextOutlined />, label: "Payment payloads" },
        { key: "12-5", icon: <MessageOutlined />, label: "sms-payload" },
        { key: "12-6", icon: <MailOutlined />, label: "Email provider" },
        {
          key: "12-7",
          icon: <NotificationOutlined />,
          label: "Notification settings",
        },
        { key: "12-8", icon: <GlobalOutlined />, label: "Social settings" },
        { key: "12-9", icon: <MobileOutlined />, label: "App Settings" },
      ],
    },
    {
      key: "13",
      icon: <SettingOutlined />,
      label: "System settings",
      children: [
        { key: "13-1", icon: <GlobalOutlined />, label: "Languages" },
        { key: "13-2", icon: <TranslationOutlined />, label: "Translations" },
        { key: "13-3", icon: <SafetyCertificateOutlined />, label: "Backup" },
        {
          key: "13-4",
          icon: <FileSearchOutlined />,
          label: "System information",
        },
        { key: "13-5", icon: <SyncOutlined />, label: "Update" },
        { key: "13-6", icon: <ClearOutlined />, label: "Clear cache" },
      ],
    },
    {
      key: "14",
      icon: <SettingOutlined />,
      label: "Page setup",
      children: [
        {
          key: "14-1",
          icon: <QuestionCircleOutlined />,
          label: "Frequently ask...",
        },
        { key: "14-2", icon: <FileTextOutlined />, label: "Terms" },
        {
          key: "14-3",
          icon: <FileProtectOutlined />,
          label: "Privacy & Policy",
        },
        { key: "14-4", icon: <FileTextOutlined />, label: "Pages" },
        { key: "14-5", icon: <FileTextOutlined />, label: "landing.page" },
      ],
    },
    { key: "15", icon: <LogoutOutlined />, label: "Logout" },
  ];
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSave = () => {
    // Handle language change logic here
    setVisible(false);
  };
  const languageMenu = (
    <Menu>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="fr">French</Menu.Item>
      {/* Add more languages as needed */}
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={250}
      >
        <div style={{ padding: "16px", textAlign: "center" }}>
          <Avatar size={64} icon={<UserOutlined />} src={image} />
          <Title level={5} style={{ color: "dark", marginTop: "8px" }}>
            ADMIN
          </Title>
          <Typography.Text style={{ color: "dark" }}>
            admin@gmail.com
          </Typography.Text>
        </div>
        <div
          style={{
            padding: "16px",
            textAlign: "space-between",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Button type="primary" onClick={showModal}>
              EN
            </Button>
            <Modal
              title="Change Language"
              visible={visible}
              onCancel={handleCancel}
              footer={[
                <Button key="submit" type="primary" onClick={handleSave}>
                  Save
                </Button>,
                <Button key="cancel" onClick={handleCancel}>
                  Cancel
                </Button>,
              ]}
            >
              <Dropdown overlay={languageMenu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  English <DownOutlined />
                </a>
              </Dropdown>
            </Modal>
          </div>

          <Space size="large">
            {/* Moon Icon */}
            <MoonFilled style={{ fontSize: "18px" }} />

            {/* Bell Icon */}
            <BellOutlined style={{ fontSize: "18px", color: "#595959" }} />
          </Space>
        </div>
        <div style={{ marginLeft: "16px" }}>
          <Search placeholder="search" style={{ width: 200 }} />
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#ebf2fa",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
            }}
          ></div>
        </Header>
        <Content style={{ margin: "16px" }}>
          <DashboardContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
