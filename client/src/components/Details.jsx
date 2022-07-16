import React from 'react';

const Details = ({ technique, isOmoteUra, handleClick }) => {
    let movements = technique.movements;
    let movementsOutput = '';

    const processMovements = (movements) => {
        return movements.map((tech, index) => {
            return <li key={index}>{tech}</li>;
        });
    };

    if (isOmoteUra) {
        movementsOutput = (
            <div>
                <h4 className='font-bold'>Omote:</h4>
                <ul className='mb-2'>{processMovements(movements[0].omote)}</ul>
                <h4 className='font-bold'>Ura:</h4>
                <ul>{processMovements(movements[1].ura)}</ul>
            </div>
        );
    } else {
        movementsOutput = <ul>{processMovements(movements)}</ul>;
    }

    return (
        <section className='mt-4'>
            <button
                type='button'
                className='bg-red-500 hover:bg-red-700 hover:cursor-pointer px-4 py-2 rounded-lg text-white mb-6'
                onClick={handleClick}
            >
                Back
            </button>
            <article>
                <p className='text-slate-900 text-1xl font-bold'>Name:</p>
                <h2 className='text-slate-900 text-2xl mb-4'>
                    {technique.name.romanji}
                </h2>
                <p className='text-slate-900 text-1xl font-bold mb-2'>
                    Movements:
                </p>
                {movementsOutput}
            </article>
        </section>
    );
};

export default Details;
