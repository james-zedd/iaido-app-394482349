import React, { Component } from 'react'
import Login from './login'
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
      errorMessage: '',
    };
  }

  authenticateUser = async (e) => {
    e.preventDefault();
    this.setState(() => ({
      errorMessage: ''
    }));

    let { email, password } = document.forms[0];

    try {
      await axios.post('/api/auth', {email: email.value, password: password.value} , {headers: {'Content-Type': 'application/json'}});

      return this.setState(() => ({
        authenticated: true
      }));
    } catch (err) {
      // console.log(err.response);
      return this.setState(() => ({
        errorMessage: err.response.data.message || err.response.data.errors[0].msg
      }))
    }
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

  logout = async () => {
    await axios.get('/api/auth/logout');

    return this.setState(() => ({
      authenticated: false
    }));
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
      return <Login authenticate={this.authenticateUser} errorMessage={this.state.errorMessage} />
    }
  }

  render() {

    let RenderPage = this.RenderPage;
    let authenticated = this.state.authenticated;

    return (
      <>
        {authenticated &&
          <button type="button" className='bg-red-500 hover:bg-red-700 hover:cursor-pointer px-4 py-2 rounded-lg text-white' onClick={this.logout}>Logout</button>
        }
        <RenderPage />
      </>
    )
  }
}
