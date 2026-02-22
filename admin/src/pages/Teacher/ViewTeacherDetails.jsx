import { Button, Card } from 'antd'
import React from 'react'
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'

export default function ViewTeacherDetails() {
    const navigate = useNavigate();
    return (
        <div className='p-6 bg-gray-100 min-h-screen rounded'>
            <Card className="shadow-xl rounded-2xl">
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-bold mb-6 text-gray-700' >
                        View Teacher Details
                    </h2>
                    <Button
                        danger
                        onClick={() => navigate('/teachers')}
                    >
                        <MdClose />
                    </Button>
                </div>
            </Card>
        </div>
    )
}
