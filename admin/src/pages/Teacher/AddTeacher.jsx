import { Button, Card, Form } from 'antd'
import React from 'react'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

export default function AddTeacher() {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (value) => {

    }

    return (
        <div className='p-6 bg-gray-100 min-h-screen rounded'>
            <Card className="shadow-xl rounded-2xl">
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-bold mb-6 text-gray-700' >
                        Add New Teacher
                    </h2>
                    <Button
                        danger
                        onClick={() => navigate('/teachers')}
                    >
                        <MdClose />
                    </Button>
                </div>

                <Form
                    form={form}
                    layout='vertical'
                >

                </Form>
            </Card>
        </div>
    )
}
