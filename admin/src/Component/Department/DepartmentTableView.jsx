import React, { useState } from "react";
import { Col, Input, Row, Table, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { MdDeleteOutline } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

export default function DepartmentTableView() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    // Sample Data
    const data = [
        {
            key: "1",
            name: "Computer Science",
            head: "Dr. Sharma",
            totalTeachers: 15,
        },
        {
            key: "2",
            name: "Mechanical Engineering",
            head: "Dr. Verma",
            totalTeachers: 10,
        },
        {
            key: "3",
            name: "Civil Engineering",
            head: "Dr. Patel",
            totalTeachers: 8,
        },
    ];

    // 🔎 Filtering Logic
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns = [
        {
            title: "Department Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Head of Department",
            dataIndex: "head",
            key: "head",
        },
        {
            title: "Total Teachers",
            dataIndex: "totalTeachers",
            key: "totalTeachers",
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <Space>
                    <Button
                        onClick={() => navigate('/update-department-details')}
                        type="link"
                    >
                        <FaUserEdit />
                    </Button>
                    <Button
                        onClick={() => navigate('/view-department-details')}
                        type="link"><ImEye /></Button>
                    <Button type="link" danger>
                        <MdDeleteOutline />
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            {/* 🔥 Search Section */}
            <Row gutter={16} style={{ marginBottom: 20 }}>
                <Col xs={24} md={6}>
                    <Input
                        placeholder="Search department..."
                        onChange={(e) => setSearchText(e.target.value)}
                        allowClear
                    />
                </Col>
            </Row>

            {/* 📊 Table */}
            <Table
                columns={columns}
                dataSource={filteredData}
                rowKey="key"
                pagination={{ pageSize: 5 }}
            />
        </>
    );
}