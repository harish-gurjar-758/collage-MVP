import { Button, Col, Input, message, Row, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { getAllNoticeApi } from '../../utils/Apis/Apis'

export default function NoticeTableView() {

    const [searchText, setSearchText] = useState("")
    const [noticeData, setNoticeData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getNotices = async () => {
            try {
                const res = await getAllNoticeApi();
                setNoticeData(res.data || []);
            } catch (error) {
                message.error(error.message || "Failed to fetch Notice !!");
            }
        }
        getNotices();
    }, []);

    // Filter Logic
    const filteredData = noticeData.filter((item) =>
        item.title?.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns = [
        {
            title: "Banner",
            dataIndex: "banner",
            key: "banner",
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "descriptione",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button
                        onClick={() => navigate(`/update-notice/${record._id}`)}
                        type="link"
                    >
                        <FaUserEdit />
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
    ]

    const handleDelete = (id) => {
        console.log("Delete notice id:", id)
    }

    return (
        <div>

            {/*  Search Section */}
            <Row gutter={16} className="mb-5">
                <Col xs={24} md={6}>
                    <Input
                        placeholder="Search notice..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        allowClear
                    />
                </Col>
            </Row>

            {/* Table */}
            <Table
                columns={columns}
                dataSource={filteredData}
                rowKey="_id"
                pagination={{ pageSize: 5 }}
            />
        </div>
    )
}