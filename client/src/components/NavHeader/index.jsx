import { Avatar, Badge } from '@mui/material'
import React from 'react'
import { GiPhone } from 'react-icons/gi'
import { HiOutlineMail } from "react-icons/hi";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NavHeader() {
    return (
        <>
            <div className='py-2 bg-black text-white text-[12px] flex items-start justify-end pr-4'>
                <div className='flex gap-5'>
                    <p className='flex gap-1 items-center cursor-pointer hover:text-red-400'>
                        <GiPhone />
                        <span>+91 9987654321</span>
                    </p>
                    <p className='flex gap-1 items-center cursor-pointer hover:text-red-400'>
                        <HiOutlineMail />
                        <span>collage.mvp@gmail.com</span>
                    </p>
                </div>
            </div>
            <div className='w-full fixed bg-slate-100 flex items-center justify-around py-3'>
                <div className='w-[6%]'>
                    <h1>Collage MVP</h1>
                    <p className='text-[6px]'>Collage of Technology And managemenet.</p>
                </div>
                <ul className='flex gap-4'>
                    <li>Home</li>
                    <li>Admission</li>
                    <li>Student Corner</li>
                    <li>Departments</li>
                </ul>
                {/* -- */}
                <div className='flex items-center gap-7'>
                    <div className='flex items-center'>
                        {/* when user not logined */}
                        <h3 className='flex gap-2'>
                            <span className='cursor-pointer'>Login</span>
                            /
                            <span className='cursor-pointer'>Register</span>
                        </h3>

                        {/* when user is logIn */}
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </div>
                    <Badge badgeContent={4} color="primary">
                        <NotificationsIcon color="action" />
                    </Badge>
                </div>
            </div>
        </>
    )
}
