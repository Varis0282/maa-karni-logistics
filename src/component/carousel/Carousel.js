import React from 'react';
import { Carousel } from 'antd';
import { Image1, Image2, Image3, Image4 } from '../../assets';


const App = () => {

    const contentStyle = {
        height: '240px',
        color: '#fff',
        lineHeight: '240px',
        textAlign: 'center',
        background: '#364d79',
    };
    const images = [Image1, Image2, Image3, Image4];

    return (
        <Carousel autoplay arrows >
            {images.map((image, index) => {
                return (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`carousel-${index}`}
                            className='w-full h-[32rem] object-cover'
                        />
                    </div>
                )
            })}
        </Carousel>
    )
};
export default App;