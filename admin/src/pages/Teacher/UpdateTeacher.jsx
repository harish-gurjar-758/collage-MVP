import { Button, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiCloseLargeLine } from "react-icons/ri";


export default function UpdateTeacher() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-[22px] font-bold'>
                    Update Teacher Details
                </h1>
                <Button
                    onClick={() => navigate('/teachers')}
                    danger
                >
                    <RiCloseLargeLine />
                </Button>
            </div>

            {/* -- */}
            <Form
                className='mt-5 '
            >
                <div className='flex'>
                    <Form.Item label="Field A">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Field B">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </div>
                <div className='flex'>
                    <Form.Item label="Field A">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Field B">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </div>
                <div className='flex'>
                    <Form.Item label="Field A">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Field B">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
