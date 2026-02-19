import React from 'react'
import Hero from './Components/Hero'

export default function Home() {
    return (
        <div className='w-full mb-5'>
            <Hero />

            {/* about section */}
            <section className='w-full mt-4'>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus neque numquam aperiam quam molestiae modi natus temporibus quibusdam recusandae dicta pariatur omnis nobis corrupti assumenda, in praesentium aspernatur voluptate.</p>
            </section>
            {/* Departments crosule */}
            <section className='w-full mt-4'>
                <h2>Departments</h2>
                <div className='w-full flex items-center justify-center flex-wrap gap-4'>
                    <div className='w-[20%] border rounded flex items-center justify-center flex-col cursor-pointer hover:bg-slate-300 p-3'>
                        <img src="" alt="" />
                        BCA
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ratione optio, dolorem modi ut obcaecati esse quam ducimus eligendi amet earum sequi fugit qui, neque excepturi nulla quisquam temporibus dolores!</p>
                    </div>

                    <div className='w-[20%] border rounded flex items-center justify-center flex-col cursor-pointer hover:bg-slate-300 p-3'>
                        <img src="" alt="" />
                        MCa
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ratione optio, dolorem modi ut obcaecati esse quam ducimus eligendi amet earum sequi fugit qui, neque excepturi nulla quisquam temporibus dolores!</p>
                    </div>

                    <div className='w-[20%] border rounded flex items-center justify-center flex-col cursor-pointer hover:bg-slate-300 p-3'>
                        <img src="" alt="" />
                        Be.Tech
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ratione optio, dolorem modi ut obcaecati esse quam ducimus eligendi amet earum sequi fugit qui, neque excepturi nulla quisquam temporibus dolores!</p>
                    </div>

                    <div className='w-[20%] border rounded flex items-center justify-center flex-col cursor-pointer hover:bg-slate-300 p-3'>
                        <img src="" alt="" />
                        M.Tech
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ratione optio, dolorem modi ut obcaecati esse quam ducimus eligendi amet earum sequi fugit qui, neque excepturi nulla quisquam temporibus dolores!</p>
                    </div>

                    <div className='w-[20%] border rounded flex items-center justify-center flex-col cursor-pointer hover:bg-slate-300 p-3'>
                        <img src="" alt="" />
                        PHD
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ratione optio, dolorem modi ut obcaecati esse quam ducimus eligendi amet earum sequi fugit qui, neque excepturi nulla quisquam temporibus dolores!</p>
                    </div>

                </div>
            </section>
            <section className='w-full mt-4'>
                <div>
                    <h2>News</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='w-full flex items-center justify-around mt-4'>
                    <div className='w-[40%] border rounded p-2'>
                        <h2>Events News</h2>
                        <div>

                        </div>
                    </div>
                    <div className='w-[40%] border rounded p-2'>
                        <h2>Study News</h2>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
