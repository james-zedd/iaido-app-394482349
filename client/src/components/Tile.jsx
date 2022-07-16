import React from 'react';

const Tile = ({ id, name, setTechnique }) => {
    return (
        <div className='w-full lg:w-2/4 lg:px-2'>
            <div className='tile w-full mb-6 p-4 border border-slate-500 rounded-lg bg-neutral-50 shadow-lg'>
                <p className='mb-2'>ID: {id}</p>
                <p className='mb-4'>Name: {name}</p>
                <button
                    type='button'
                    className='bg-red-500 hover:bg-red-700 hover:cursor-pointer px-4 py-2 rounded-lg text-white'
                    onClick={() => setTechnique(id)}
                >
                    View
                </button>
            </div>
        </div>
    );
};

export default Tile;
