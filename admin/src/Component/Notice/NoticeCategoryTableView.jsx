import { Button, Col, Input, message, Row, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { ImEye } from 'react-icons/im'
import { MdDeleteOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { getAllNoticeCategoryApi } from '../../utils/Apis/Apis'

export default function NoticeCategoryTableView() {

    const [noticeCategory, setNoticeCategory] = useState([]);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getCategory = async () => {
            try {
                const res = await getAllNoticeCategoryApi();
                setNoticeCategory(res.data || []);
            } catch (error) {
                message.error(error.message || "Failed to fetch Notice Category !!");
            }
        }
        getCategory();
    }, []);

    // Filtering Logic Fixed
    const noticeCategoryFilteredData = noticeCategory.filter((item) =>
        item.noticeCategory?.toLowerCase().includes(searchText.toLowerCase())
    )

    const columns = [
        {
            title: "Notice Category",
            dataIndex: "noticeCategory",
            key: "noticeCategory",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button
                        onClick={() => navigate(`/update-notice-category/${record._id}`)}
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
        console.log("Delete notice Category id : ", id)
    }

    return (
        <>
            {/* Search Section */}
            <Row gutter={16} className="mb-5">
                <Col xs={24} md={6}>
                    <Input
                        placeholder="Search notice category..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        allowClear
                    />
                </Col>
            </Row>

            {/* Table */}
            <Table
                columns={columns}
                dataSource={noticeCategoryFilteredData}
                rowKey="_id"
                pagination={{ pageSize: 3 }}
            />
        </>
    )
}