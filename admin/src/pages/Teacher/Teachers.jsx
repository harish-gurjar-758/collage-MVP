import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeacherTableView from '../../Component/Teacher/TeacherTableView'

export default function Teachers() {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <div className='w-full flex items-center justify-between mb-5'>
                    <h1 className='font-bold text-[21px]'>Teacher View</h1>
                    <Button
                        variant='solid'
                        onClick={() => navigate('/add-teacher')}
                        className='font-[500]'
                    >Add Teacher</Button>
                </div>
                <TeacherTableView />
            </div>
        </div>
    )
}
