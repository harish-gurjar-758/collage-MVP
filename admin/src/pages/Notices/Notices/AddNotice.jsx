import { Button, Card, Form, Input, DatePicker, Select, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { createNoticeApi, getAllNoticeCategoryApi } from "../../../utils/Apis/Apis";

const { TextArea } = Input;

export default function AddNotice() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [banner, setBanner] = useState(null);
    const [loading, setLoading] = useState(false);
    const [noticeCategory, setNoticeCategory] = useState([]);

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

    /* =========================
       FORM SUBMIT
    ========================= */
    const onFinish = async (values) => {
        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("description", values.description);
            formData.append("dueDate", values.dueDate?.format("YYYY-MM-DD"));
            formData.append("status", values.status);
            formData.append("category", values.category);

            if (banner) {
                formData.append("banner", banner);
            }

            await createNoticeApi(formData);

            message.success("Notice created successfully");
            form.resetFields();
            setBanner(null);
            navigate("/notices");

        } catch (error) {
            console.log("Full Error:", error);

            const errorMessage =
                error?.response?.data?.message ||
                error?.message ||
                "Something went wrong";

            message.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <Card className="shadow-xl rounded-2xl max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-700">
                        Add Notice
                    </h2>

                    <Button
                        danger
                        onClick={() => navigate("/notices")}
                    >
                        <MdCancel />
                    </Button>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    {/* Title */}
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: "Title is required" }]}
                    >
                        <Input placeholder="Enter notice title" />
                    </Form.Item>

                    {/* Description */}
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: "Description is required" }]}
                    >
                        <TextArea rows={4} placeholder="Enter description" />
                    </Form.Item>

                    {/* Due Date */}
                    <Form.Item
                        label="Due Date"
                        name="dueDate"
                        rules={[{ required: true, message: "Due date is required" }]}
                    >
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>

                    {/* Status */}
                    <Form.Item
                        label="Status"
                        name="status"
                        rules={[{ required: true, message: "Status is required" }]}
                    >
                        <Select placeholder="Select status">
                            <Select.Option value="wait">Wait</Select.Option>
                            <Select.Option value="urgent">Urgent</Select.Option>
                        </Select>
                    </Form.Item>

                    {/* Category */}
                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: "Category is required" }]}
                    >
                        <Select placeholder="Select category">
                            {noticeCategory.map((cat) => (
                                <Select.Option key={cat._id} value={cat._id}>{cat.noticeCategory}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    {/* Banner Upload */}
                    <Form.Item label="Banner">
                        <Upload
                            maxCount={1}
                            beforeUpload={(file) => {
                                setBanner(file);
                                return false; // stop auto upload
                            }}
                            onRemove={() => {
                                setBanner(null);
                            }}
                            fileList={
                                banner
                                    ? [
                                        {
                                            uid: "-1",
                                            name: banner.name,
                                            status: "done",
                                        },
                                    ]
                                    : []
                            }
                        >
                            <Button icon={<UploadOutlined />}>
                                Upload Banner
                            </Button>
                        </Upload>
                    </Form.Item>

                    {/* Submit */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            block
                        >
                            Create Notice
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}