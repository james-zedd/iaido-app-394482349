import React, { Component } from 'react'
import Tile from './tile';

export default class search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      techniqueId: this.props.techniqueId,
      postsSearch: []
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

  passTechId = (id) => {
    this.props.techId(id);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.filterPosts(this.state.posts, e.target[0].value);
  };

  render() {

    let queryResults;

    if (this.state.noResults) {
      queryResults = "There are no results for your search."
    } else {
      queryResults = this.state.postsSearch.map(post => {
        return <Tile key={post.id} id={post.id} name={post.name} techniqueId={this.props.techniqueId} setTechnique={this.passTechId} />
      })
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" placeholder="Enter a iaido technique" name="search" />
          <button type="submit">Search</button>
        </form>
        <p>Type the name of a technique above to begin. Hit search to list all techniques.</p>
        <div className="search__results">
          {queryResults}
        </div>
      </div>
    )
  }
}
