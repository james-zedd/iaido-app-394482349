import React, { Component } from 'react'
import Gatekeeper from './gatekeeper'
import Search from './search'
import Details from './details'
import axios from 'axios';

// const posts = [
//   { 
//     id: 1, 
//     name: "izumi", 
//     movements: [
//       'three steps forward (R,L,R) and on third step turn upper body 90 degress to left in toes out horse stance (Shikho Dachi), drawing sword and blocking over head with right hand holding sword (similar to Torii block but one handed) sword blade flat, above head and slightly forward, edge to behind head, tip to left side',
//       'right step in Kesa Giri (right down to left)',
//       'body shift 180 degrees, sword to Jodan and right cross step in front cut to waist high',
//       'basic Chiburi and basic Noto',
//       'right step back to Yame, then Osame',
//       'left foot shift back and body turn 90 degrees to front (feet together) then left start 3 steps back (Otoku)'
//     ]
//   },
//   { id: 2, name: "izumi kami kai", movements: []},
//   { id: 3, name: "kami no shinsa", movements: []},
//   { id: 4, name: "shinsa komoki", movements: []},
//   { id: 5, name: "agatsu masakatsu", movements: []}
// ];

export default class main extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      authenticated: false,
      posts: [],
      techniqueId: null,
      technique: [],
      isOmoteUra: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(() => ({ authenticated: !this.state.authenticated, techniqueId: null }));
  }

  findTechnique = async (id) => {
    try {
      const findTech = await axios.get(`/api/techniques/${id}`);
      // console.log('found technique', findTech.data.data[0]);

      return this.setState(() => ({ 
        techniqueId: findTech.data.data[0]._id, 
        technique: findTech.data.data[0],
        isOmoteUra: findTech.data.data[0].omote_to_ura.indexOf(true) !== -1,
      }));
      
    } catch (err) {
      console.log(err);
      return;
    }
  }

  setTechniqueId = (id) => {
    this.setState(() => ({ techniqueId: id }));
  }
  
  clearTechnique = () => {
    this.setState(() => ({ techniqueId: null, technique: [] }));
  }

  RenderPage = () => {
    let auth = this.state.authenticated;
    let techId = this.state.techniqueId;

    if (auth && techId) {
      return <Details technique={this.state.technique} isOmoteUra={this.state.isOmoteUra} handleClick={this.clearTechnique}/>
    } else if (auth) {
      return <Search techniqueId={this.state.techniqueId} techId={this.findTechnique} />
    } else {
      return <Gatekeeper />
    }
  }

  render() {

    let RenderPage = this.RenderPage;

    return (
      <div>
        <button type="button" onClick={this.handleClick}>Authenticate</button>
        <RenderPage />
      </div>
    )
  }
}
