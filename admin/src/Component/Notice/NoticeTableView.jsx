import {
    Button,
    Col,
    Input,
    message,
    Row,
    Space,
    Table,
    Image,
    Tag
} from 'antd'
import React, { useEffect, useState } from 'react'
import { FaEye, FaUserEdit } from 'react-icons/fa'
import { MdDeleteOutline, MdWarning } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { getAllNoticeApi } from '../../utils/Apis/Apis'
import noticeBannerPriview from '../../assets/webAssets/noticeBannerPriview.png'

export default function NoticeTableView() {

    const [searchText, setSearchText] = useState("")
    const [noticeData, setNoticeData] = useState([])
    const navigate = useNavigate()

    // ================= FETCH DATA =================
    useEffect(() => {
        const getNotices = async () => {
            try {
                const res = await getAllNoticeApi()
                setNoticeData(res?.data || [])
            } catch (error) {
                message.error(error.message || "Failed to fetch Notice !!")
            }
        }
        getNotices()
    }, [])

    // ================= SEARCH FILTER =================
    const filteredData = noticeData.filter((item) =>
        item.title?.toLowerCase().includes(searchText.toLowerCase())
    )

    // ================= DELETE =================
    const handleDelete = (id) => {
        console.log("Delete notice id:", id)
        // Call delete API here
    }

    // ================= TABLE COLUMNS =================
    const columns = [
        {
            title: "Banner",
            dataIndex: "banner",
            key: "banner",
            render: (_, record) => (
                <Image
                    src={record.banner || noticeBannerPriview}
                    width={80}
                    height={50}
                    style={{ objectFit: "cover", borderRadius: "6px" }}
                />
            )
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            render: (text) => (
                <span>
                    {text?.length > 40 ? text.slice(0, 40) + "..." : text}
                </span>
            )
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (category) => (
                <span>
                    {typeof category === "object"
                        ? category?.name
                        : category}
                </span>
            )
        },
        {
            title: "Due Date",
            dataIndex: "dueDate",
            key: "dueDate",
            render: (date) => {
                if (!date) return "-"
                const formatted = new Date(date).toLocaleDateString()
                return <span>{formatted}</span>
            }
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                if (status?.toLowerCase() === "urgent") {
                    return (
                        <Tag
                            icon={<MdWarning />}
                            color="gold"
                            style={{ fontWeight: 600 }}
                        >
                            URGENT
                        </Tag>
                    )
                }

                if (status?.toLowerCase() === "wait") {
                    return (
                        <Tag
                            icon={<AiOutlineCheckCircle />}
                            color="green"
                            style={{ fontWeight: 600 }}
                        >
                            WAIT
                        </Tag>
                    )
                }

                return <Tag>{status}</Tag>
            }
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
                        <FaUserEdit size={18} />
                    </Button>
                    <Button
                        onClick={() => navigate(`/update-notice/${record._id}`)}
                        type="link"
                    >
                        <FaEye size={18} />
                    </Button>

                    <Button
                        type="link"
                        danger
                        onClick={() => handleDelete(record._id)}
                    >
                        <MdDeleteOutline size={20} />
                    </Button>
                </Space>
            ),
        },
    ]

    return (
        <div>

            {/* Search Section */}
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