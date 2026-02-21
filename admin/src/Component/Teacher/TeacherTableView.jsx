import React, { useState } from "react";
import {
    Table,
    Space,
    Button,
    Image,
    Avatar,
    Input,
    Select,
    Row,
    Col,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { MdDeleteOutline } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const { Option } = Select;

export default function TeacherTableView() {
    const [searchText, setSearchText] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("");
    const [postFilter, setPostFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const navigate = useNavigate();

    const data = [
        {
            key: "1",
            photo:
                "https://americanprofessionguide.com/wp-content/uploads/2024/06/Career-and-Technical-Education-Teacher-Job-Outlook.jpeg",
            firstName: "Rahul",
            lastName: "Sharma",
            post: "Professor",
            department: "Computer Science",
            gender: "male",
        },
        {
            key: "2",
            photo:
                "https://tse4.mm.bing.net/th/id/OIP.uyX99_nLQcZcZeVwSSON-gHaHa?rs=1",
            firstName: "Priya",
            lastName: "Mehta",
            post: "Assistant Professor",
            department: "Mechanical",
            gender: "female",
        },
        {
            key: "3",
            photo: "",
            firstName: "Anita",
            lastName: "Verma",
            post: "Professor",
            department: "Mechanical",
            gender: "female",
        },
    ];

    // 🔎 Filtering Logic
    const filteredData = data.filter((item) => {
        return (
            (item.firstName + " " + item.lastName)
                .toLowerCase()
                .includes(searchText.toLowerCase()) &&
            (departmentFilter ? item.department === departmentFilter : true) &&
            (postFilter ? item.post === postFilter : true) &&
            (genderFilter ? item.gender === genderFilter : true)
        );
    });

    const columns = [
        {
            title: "Image",
            dataIndex: "photo",
            key: "photo",
            render: (_, record) => {
                const defaultMale =
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                const defaultFemale =
                    "https://cdn-icons-png.flaticon.com/512/3135/3135789.png";

                return (
                    <Space>
                        {record.photo ? (
                            <Image
                                src={record.photo}
                                width={50}
                                height={50}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                        ) : (
                            <Avatar
                                size={50}
                                src={
                                    record.gender === "female"
                                        ? defaultFemale
                                        : record.gender === "male"
                                            ? defaultMale
                                            : null
                                }
                                icon={!record.gender && <UserOutlined />}
                            />
                        )}
                    </Space>
                );
            },
        },
        { title: "First Name", dataIndex: "firstName", key: "firstName" },
        { title: "Last Name", dataIndex: "lastName", key: "lastName" },
        { title: "Post", dataIndex: "post", key: "post" },
        { title: "Department", dataIndex: "department", key: "department" },
        {
            title: "Action",
            key: "action",
            render: () => (
                <Space>
                    <Button
                        onClick={() => navigate('/update-teacher-details')}
                        type="link"
                    >
                        <FaUserEdit />
                    </Button>
                    <Button
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
            {/* 🔥 Filters Section */}
            <Row gutter={16} style={{ marginBottom: 20 }}>
                <Col xs={24} md={6}>
                    <Input
                        placeholder="Search by name..."
                        onChange={(e) => setSearchText(e.target.value)}
                        allowClear
                    />
                </Col>

                <Col xs={24} md={6}>
                    <Select
                        placeholder="Select Department"
                        style={{ width: "100%" }}
                        onChange={(value) => setDepartmentFilter(value)}
                        allowClear
                    >
                        <Option value="Computer Science">Computer Science</Option>
                        <Option value="Mechanical">Mechanical</Option>
                    </Select>
                </Col>

                <Col xs={24} md={6}>
                    <Select
                        placeholder="Select Post"
                        style={{ width: "100%" }}
                        onChange={(value) => setPostFilter(value)}
                        allowClear
                    >
                        <Option value="Professor">Professor</Option>
                        <Option value="Assistant Professor">
                            Assistant Professor
                        </Option>
                    </Select>
                </Col>

                <Col xs={24} md={6}>
                    <Select
                        placeholder="Select Gender"
                        style={{ width: "100%" }}
                        onChange={(value) => setGenderFilter(value)}
                        allowClear
                    >
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                    </Select>
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