import React from 'react'
import DepartmentTableView from '../../Component/Department/DepartmentTableView'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

export default function Departments() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='w-full flex items-center justify-between mb-5'>
                <h1 className='font-bold text-[21px]'>Department View</h1>
                <Button
                    variant='solid'
                    onClick={() => navigate('/add-department')}
                    className='font-[500]'
                >Add Department</Button>
            </div>
            <DepartmentTableView />

        </div>
    )
}
