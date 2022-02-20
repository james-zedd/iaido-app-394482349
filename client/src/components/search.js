import React, { Component } from 'react'
import Tile from './tile';
import axios from 'axios';

export default class search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      techniqueId: this.props.techniqueId,
      postsSearch: [],
      noResults: false
    }
  }
  
  filterPosts = (posts, query) => {
    this.setState(() =>({ noResults: false }))
    if (!query) {
      return this.setState({
        postsSearch: posts  
      });
    }

    let filteredPosts = posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });

    if (filteredPosts.length === 0) {
      return this.setState(() => ({ noResults: true }));
    } else {
      return this.setState({
        postsSearch: filteredPosts  
      });
    }
  };

  dbQuery = async (query) => {
    console.log('search fired!')
    this.setState(() => ({ noResults: false }))
    try {
      const techniques = await axios.get(`/api/techniques?q=${query}`);

      // console.log('techniques', techniques.data.data);
      
      if (techniques.data.data.length === 0) {
        return this.setState(() => ({ noResults: true }));
      } else {
        return this.setState({
          postsSearch: techniques.data.data
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  passTechId = (id) => {
    this.props.techId(id);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.dbQuery(e.target[0].value);
  };

  render() {

    let queryResults;

    if (this.state.noResults) {
      queryResults = "There are no results for your search."
    } else {
      queryResults = this.state.postsSearch.map(post => {
        return <Tile key={post._id} id={post._id} name={post.name.romanji} techniqueId={this.props.techniqueId} setTechnique={this.passTechId} />
      })
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form__input-container mt-3">
            <label htmlFor="search" className='text-slate-900 text-2xl font-bold'>Search</label>
            <div className="mt-2">
              <input type="text" id="search" placeholder="Enter a iaido technique" name="search" className='border border-gray-300 px-4 py-2 rounded-l-lg shadow-sm focus:outline-none focus:border-indigo-100' />
              <button type="submit" className='border border-gray-300 bg-red-500 hover:bg-red-700 hover:cursor-pointer px-4 py-2 rounded-r-lg text-white'>Search</button>
            </div>
          </div>
        </form>
        <p className='mt-4'>Type the name of a technique above to begin. Hit search to list all techniques.</p>
        <div className="search__results py-4 block lg:flex lg:flex-wrap">
          {queryResults}
        </div>
      </div>
    )
  }
}
