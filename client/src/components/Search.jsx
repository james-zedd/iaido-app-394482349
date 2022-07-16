import React, { useState } from 'react';
import Tile from './Tile';
import axios from 'axios';

const Search = ({ findTech }) => {
    console.log('search rendered'); // used for bug on main.jsx
    const [search, setSearch] = useState('');
    const [postsSearch, setPostsSearch] = useState([]);
    const [noResults, setNoResults] = useState(false);

    const passTechId = (id) => {
        findTech(id);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dbQuery(search);
    };

    const dbQuery = async (query) => {
        setNoResults(false);

        try {
            const techniques = await axios.get(`/api/techniques?q=${query}`);

            if (techniques.data.count === 0) {
                setNoResults(true);
            }

            return setPostsSearch(techniques.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <div className='form__input-container mt-3'>
                        <label
                            htmlFor='search'
                            className='text-slate-900 text-2xl font-bold'
                        >
                            Search
                        </label>
                        <div className='mt-2'>
                            <input
                                type='text'
                                id='search'
                                placeholder='Enter a iaido technique'
                                name='search'
                                className='border border-gray-300 px-4 py-2 rounded-l-lg shadow-sm focus:outline-none focus:border-indigo-100'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button
                                type='submit'
                                className='border border-gray-300 bg-red-500 hover:bg-red-700 hover:cursor-pointer px-4 py-2 rounded-r-lg text-white'
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
                <p className='mt-4'>
                    Type the name of a technique above to begin. Hit search to
                    list all techniques.
                </p>
            </section>
            <section>
                <div className='search__results py-4 block lg:flex lg:flex-wrap'>
                    {noResults
                        ? 'There are no results for your search'
                        : postsSearch.map((post, index) => {
                              return (
                                  <Tile
                                      key={index}
                                      id={post._id}
                                      name={post.name.romanji}
                                      setTechnique={passTechId}
                                  />
                              );
                          })}
                </div>
            </section>
        </>
    );
};

export default Search;
