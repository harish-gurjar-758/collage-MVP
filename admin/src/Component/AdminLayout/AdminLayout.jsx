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
import MainHeader from "./MainHeader";

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
            key: "/notices",
            icon: <BookOutlined />,
            label: <Link to="/notices">Notices</Link>,
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

    const pathName =
        location.pathname === "/"
            ? "Dashboard"
            : location.pathname.replace("/", "").toUpperCase();

    return (
        <Layout style={{ minHeight: "100vh" }}>

            {/* ✅ Fixed Sidebar */}
            <Sider
                width={220}
                breakpoint="lg"
                collapsedWidth="0"
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    height: "100vh",
                }}
            >
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

            {/* ✅ Main Layout */}
            <Layout style={{ marginLeft: 220 }}>

                {/* ✅ Fixed Header */}
                <Header
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 220,
                        right: 0,
                        zIndex: 1000,
                        background: "#111827",
                        color: "#fff",
                        paddingLeft: 20,
                        display: "flex",
                        alignItems: "center",
                        height: 64,
                    }}
                >
                    <MainHeader />
                </Header>

                {/* ✅ Content */}
                <Content
                    style={{
                        marginTop: 80,
                        marginBottom: 20,
                        marginLeft: 16,
                        marginRight: 16,
                        overflow: "auto",
                    }}
                >
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
                            minHeight: "calc(100vh - 160px)",
                            background: "#1001",
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