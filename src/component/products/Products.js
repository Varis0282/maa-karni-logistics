import React from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Products = () => {
    const products = [
        { label: 'VALUE RE-ENGINEERING' },
        { label: 'C-FORM COLLECTION' },
        { label: 'INFRASTRUCTURE LEASING' },
        { label: 'STOCK AUDIT' },
        { label: 'TRANSPORT MANAGEMENT' },
        { label: 'MILK RUN' },
        { label: 'RECORD MANAGEMENT' },
        { label: '3PP 3RD PARTY PROCUREMENT' }
    ];
    return (
        <div className="flex flex-col w-[80%] gap-8 mt-4 mb-16 py-4 justify-between">
            <p className='text-2xl font-bold text-center w-full'>
                <span className='text-amber-700'>Our </span>
                <span className='text-black'>Products</span>
            </p>
            <div className="flex flex-wrap">
                {products.map((product, index) => (
                    <div key={index} className="w-1/2 p-4">
                        <div className="group text-center font-medium flex flex-row justify-between text-xl text-black border w-full rounded hover:border-amber-700">
                            <span
                                className='w-1/5 py-8 bg-gray-200 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300 ease-in-out'
                            >
                                <ExclamationCircleOutlined />
                            </span>
                            <span className='w-4/5 py-8 bg-white'>{product.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
