'use client';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';

import Image from 'next/image';

import 'primeicons/primeicons.css';
        

const Products = () => {
    const products = [{
        image: product1,
        price: '$56.00'
    }, {
        image: product2,
        price: '$51.39'
    }, {
        image: product3,
        price: '$63.87'
    }, {
        image: product4,
        price: '$47.89'
    }];

    return (
        <div className='flex flex-row flex-wrap w-[80%] gap-x-5 gap-y-5 mt-10 mx-auto'>
            {products.map((product, index) => (
                <div key={`product_${index}`} className='flex flex-col w-fit mx-auto'>
                    <Image src={product.image} alt={`product_${index+1}`} className='w-[14.5rem]' />

                    <div className='flex w-fit mx-auto mt-6 gap-x-1'>
                        {Array.from({ length: 5 }).map((value, i) => (
                            <i key={`star_${i+1}`} className={`pi pi-star-fill ${ i === 4 ? 'text-slate-300' : 'text-[#b48e40]' } `} />
                        ))}
                    </div>

                    <h1 className='w-fit mx-auto font-bold text-[20px]'>New Fresh Wash</h1>
                    <p className='w-fit mx-auto text-[#b48e40] font-bold'>{product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Products
