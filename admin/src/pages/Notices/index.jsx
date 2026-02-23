import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NoticeCategoryTableView from '../../Component/Notice/NoticeCategoryTableView';

export default function Notices() {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <div className='w-full flex items-center justify-between mb-5'>
                    <h1 className='font-bold text-[21px]'>Notice Category View</h1>
                    <Button
                        variant='solid'
                        onClick={() => navigate('/add-notice-category')}
                        className='font-[500]'
                    >Add Notice Category</Button>
                </div>
                <NoticeCategoryTableView />
            </div>
            <div className='mt-6'>
                <div className='w-full flex items-center justify-between mb-5'>
                    <h1 className='font-bold text-[21px]'>Notice View</h1>
                    <Button
                        variant='solid'
                        onClick={() => navigate('/add-notice')}
                        className='font-[500]'
                    >Add Notice</Button>
                </div>
            </div>
        </div>
    )
}
