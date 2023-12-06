import Image from 'next/image'
import React from 'react';
import img from '../../assets/images/shopBanner.jpg'
import img1 from '../../assets/images/tailer1.jpg'
import img2 from '../../assets/images/tailer2.jpg'
import img3 from '../../assets/images/tailer3.jpg'
import img4 from '../../assets/images/tailer4.jpg'
import img5 from '../../assets/images/tailer5.jpg'
import img6 from '../../assets/images/bjjc1.jpg'
import img7 from '../../assets/images/bjjc2.jpg'
import img8 from '../../assets/images/tailer6.jpg'
import SessionHeading from '../heading/SessionHeading';

const Shopping = () => {
    return (
        <div className='relative w-full  max-w-screen-xl items-center justify-between mx-auto p-4 mt-5 lg:mt-20 xl:mt-20 sm:mt-10'>

            <div className='border'>
                <Image src={img} className='h-auto max-w-full rounded-lg' />
            </div>

            <div className='mt-5 lg:mt-20 xl:mt-20 sm:mt-10'>

                <SessionHeading title='Shop Tailer' />
                <div className="grid  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={img1} alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={img2} alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={img3} alt="" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={img4} alt="" />
                    </div>
                </div>

            </div>



            <div className='mt-5 lg:mt-20 xl:mt-20 sm:mt-10'>
                <SessionHeading title='Our Customers' />
                <div className="grid sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 gap-4 ">
                    <div className="grid gap-4">
                        <div>
                            <Image className="w-full rounded-lg h-92" src={img5} alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Image className="w-full rounded-lg h-82" src={img6} alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Image className="w-full rounded-lg h-82" src={img7} alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Image className=" w-full rounded-lg h-92" src={img8} alt="" />
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Shopping