import { Button, Col, Input, Row, Space, Table } from 'antd'
import React, { useState } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { ImEye } from 'react-icons/im'
import { MdDeleteOutline } from 'react-icons/md'

export default function NoticeCategoryTableView() {
    const [noticeCategory, setNoticeCategory] = useState([]);


    // Filtering Logic (Fixed)
    const noticeCategoryFilteredData = noticeCategory.filter((item) =>
        item.noticeCategory?.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns = [
        {
            title: "Notice category"
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
        console.log("Delete notice Category id : ", id);
    }
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

            {/* Table */}
            <Table
                columns={columns}
                dataSource={noticeCategoryFilteredData}
                rowKey={_id}
                pagination={{ pageSize: '3' }}
            />
        </>
    )
}
