import React, { useState, useEffect } from "react";
import { Col, Input, Row, Table, Button, Space, message } from "antd";
import { useNavigate } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { MdDeleteOutline } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { getAllDepartmentsApi } from "../../utils/Apis/Apis";

export default function DepartmentTableView() {
    const [departmentData, setDepartment] = useState([]);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDepartment = async () => {
            try {
                const res = await getAllDepartmentsApi();
                setDepartment(res.data || []);
            } catch (error) {
                message.error(error.message || "Failed to fetch departments");
            }
        };
        fetchDepartment();
    }, []);

    // Filtering Logic (Fixed)
    const filteredData = departmentData.filter((item) =>
        item.departmentName?.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns = [
        {
            title: "Department Name",
            dataIndex: "departmentName",
            key: "departmentName",
        },
        {
            title: "Head of Department",
            dataIndex: "head",
            key: "head",
            render: (text) => text || "Not Assigned",
        },
        {
            title: "Total Teachers",
            dataIndex: "totalTeachers",
            key: "totalTeachers",
            render: (text) => text || 0,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button
                        onClick={() => navigate(`/update-department-details/${record._id}`)}
                        type="link"
                    >
                        <FaUserEdit />
                    </Button>

                    <Button
                        onClick={() => navigate(`/view-department-details/${record._id}`)}
                        type="link"
                    >
                        <ImEye />
                    </Button>

                    <Button
                        type="link"
                        danger
                        onClick={() => handleDelete(record._id)}
                    >
                        <MdDeleteOutline />
                    </Button>
                </Space>
            ),
        },
    ];

    const handleDelete = (id) => {
        console.log("Delete department id:", id);
        // Call delete API here
    };

    return (
        <>
            {/* Search Section */}
            <Row gutter={16} className="mb-5">
                <Col xs={24} md={6}>
                    <Input
                        placeholder="Search department..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        allowClear
                    />
                </Col>
            </Row>

            {/* 📊 Table */}
            <Table
                columns={columns}
                dataSource={filteredData}
                rowKey="_id"
                pagination={{ pageSize: 5 }}
            />
        </>
    );
}