import React from 'react';
import bannerImg from '../../assets/banner-img.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] my-10 rounded-2xl container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg"
                />
                <div className='space-y-6'>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                    <button className="btn btn-success text-white font-bold text-xl py-6">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;