import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiCloseLargeLine } from "react-icons/ri";


export default function UpdateTeacher() {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                Update Teacher Details
            </div>
            <Button
                onClick={() => navigate('/teachers')}
            >
                <RiCloseLargeLine />
            </Button>
        </div>
    )
}
