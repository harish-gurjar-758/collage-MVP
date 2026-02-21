import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    DashboardOutlined,
    TeamOutlined,
    UserOutlined,
    BookOutlined,
    NotificationOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

export default function AdminLayout() {
    const location = useLocation();

    const menuItems = [
        {
            key: "/",
            icon: <DashboardOutlined />,
            label: <Link to="/">Dashboard</Link>,
        },
        {
            key: "/teachers",
            icon: <TeamOutlined />,
            label: <Link to="/teachers">Teachers</Link>,
        },
        {
            key: "/students",
            icon: <TeamOutlined />,
            label: <Link to="/students">Students</Link>,
        },
        {
            key: "/departments",
            icon: <BookOutlined />,
            label: <Link to="/departments">Departments</Link>,
        },
        {
            key: "/news",
            icon: <NotificationOutlined />,
            label: <Link to="/news">News & Events</Link>,
        },
        {
            key: "/users",
            icon: <UserOutlined />,
            label: <Link to="/users">Users</Link>,
        },
    ];

    // Format breadcrumb title
    const pathName = location.pathname === "/"
        ? "Dashboard"
        : location.pathname.replace("/", "").toUpperCase();

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <div style={{ color: "white", padding: 20, fontSize: 18 }}>
                    Admin Panel
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                />
            </Sider>

            <Layout>
                <Header className="bg-gray-900 text-white pl-[20px] flex items-center">
                    Welcome Admin
                </Header>

                <Content style={{ margin: "16px" }}>
                    <Breadcrumb
                        style={{ marginBottom: 16 }}
                        items={[
                            { title: "Admin" },
                            { title: pathName },
                        ]}
                    />

                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: "#fff",
                            borderRadius: 8,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>

                <Footer style={{ textAlign: "center" }}>
                    Admin Panel ©{new Date().getFullYear()}
                </Footer>
            </Layout>
        </Layout>
    );
}