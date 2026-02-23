import { Button, Card, Form, Input, message } from 'antd'
import React from 'react'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { createNoticeCategoryApi } from '../../../utils/Apis/Apis';

export default function AddNoticeCategory() {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            await createNoticeCategoryApi(values);
            message.success("Department Created Successfully.");
            form.resetFields();
            navigate('/notices');
        } catch (error) {
            message.error(error.message || "Something went wrong");
        }
    };
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <Card className='shadow-xl rounded-2xl'>
                <div className='flex items-center justify-between mb-6'>
                    <h2
                        className='text-2xl font-bold text-gray-700'
                    >Add Noticen Category</h2>
                    <Button
                        onClick={() => navigate('/notices')}
                        danger
                    ><MdClose /></Button>
                </div>

                <Form
                    form={form}
                    layout='vertical'
                    onFinish={onFinish}
                    autoComplete='off'
                >
                    <Form.Item
                        label="Notice Category"
                        name='noticeCategory'
                        rules={[{ required: true, message: "Notice Category name required !!" }]}
                    >
                        <Input placeholder='Enter Notice Category Name' />
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="mt-4 bg-blue-600 hover:bg-blue-700"
                    >
                        Create Category
                    </Button>
                </Form>
            </Card>
        </div>
    )
}
