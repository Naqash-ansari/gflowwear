"use client"
import React, { useEffect, useState } from 'react'
import { addProduct, removeProduct } from '../services/RootSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ApiData, DeleteApiData } from '../services/ApiThunk'

const page = () => {

    const [data, setData] = useState('')
    const [size, setSize] = useState('')
    const [requried, setRequried] = useState(false);
    let dispatch = useDispatch()
    let productlist = useSelector(data => data.product);
    let productlist11 = useSelector(data => data.productApiList);

    // console.log('productlist', productlist11);

    const SaveData = () => {
        let data11 = {
            name: data,
            size: size,
            toggle: requried
        }

        dispatch(addProduct(data11));
    }

    useEffect(()=>{
        dispatch(ApiData())
    },[]);

    const DeleteBtn = (id) =>{
        dispatch(DeleteApiData(id));
    }



    return (
        <div className="max-w-sm mx-auto h-screen"
        // onSubmit={handleSubmit}
        >
            <div className='bg-white item-center p-5 mt-20 rounded'>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        // type="email"
                        id="email"
                        name='username'
                        onChange={(e) => setData(e.target.value)}  // Fix the typo and use e.target.value
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type="text"
                        id="password"
                        name='size'
                        onChange={(e) => setSize(e.target.value)}  // Fix the typo and use e.target.value
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            onChange={(e) => setRequried(e.target.value)}  // Fix the typo and use e.target.value
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="fd" onClick={SaveData} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            </div>

            <div className='bg-white max-w-sm item-center p-5 mt-20 rounded'>
                {/* <!-- component --> */}
                {/* <!-- This is an example component --> */}
                <div className="max-w-2xl mx-auto">

                    <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h3>
                            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    productlist11.map(({ title,name, id }) => {
                                        return (
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            {title}
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            { id}
                                                        </p>
                                                    </div>
                                                    <div className=" items-center text-base font-semibold text-gray-900 dark:text-white">
                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            $3.01
                                                        </p>
                                                        <button onClick={()=>DeleteBtn(id)} className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page