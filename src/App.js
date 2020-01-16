import React,{ useState, useEffect } from 'react';

import "./global.css";
import "./App.css";
import "./SideBar.css";
import "./Main.css";


function App() {
  const [latitude,setLatitude] = useState();
  const [longitude,setLongitude] = useState();
  const [github_username,setGithub_username] = useState();
  const [techs,setTechs] = useState();

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        alert(error);
      },{
        timeout: 30000,
      }
    )
  },[])

  const handleAddDev = async(e) => {
    e.preventDefault();

    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              type="text" 
              name="github_username" 
              id="github_username"
              onChange={e=> setGithub_username(e.target.value)} 
              value={github_username}
              required/>       
          </div>
   
          <div className="input-block">
            <label htmlFor="techs">Tecnologias </label>
            <input 
              type="text" 
              name="techs" 
              id="techs" 
              value={techs}
              onChange={e=> setTechs(e.target.value)}
              required/>
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                onChange={e=> setLatitude(e.target.value)}
                value={latitude}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude"
                id="longitude" 
                required 
                onChange={e=> setLongitude(e.target.value)}
                value={longitude}/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>

      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img 
                src="https://avatars0.githubusercontent.com/u/24502746?s=460&v=4" 
                alt="yesy12" />
                <div className="user-info">
                  <strong>Yesy12</strong>
                  <span>ReactJs, PHP, Python</span>
                </div>
            </header>
            <p>19 years. São Paulo/BR. Back End Develop. Node Js and Python . Studying Node Js sometimes Python, React or PHP.</p>
            <a href="https://github.com/yesy12">Acessar perfil no github</a>
          </li>
          
          <li className="dev-item">
            <header>
              <img 
                src="https://avatars0.githubusercontent.com/u/24502746?s=460&v=4" 
                alt="yesy12" />
                <div className="user-info">
                  <strong>Yesy12</strong>
                  <span>ReactJs, PHP, Python</span>
                </div>
            </header>
            <p>19 years. São Paulo/BR. Back End Develop. Node Js and Python . Studying Node Js sometimes Python, React or PHP.</p>
            <a href="https://github.com/yesy12">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img 
                src="https://avatars0.githubusercontent.com/u/24502746?s=460&v=4" 
                alt="yesy12" />
                <div className="user-info">
                  <strong>Yesy12</strong>
                  <span>ReactJs, PHP, Python</span>
                </div>
            </header>
            <p>19 years. São Paulo/BR. Back End Develop. Node Js and Python . Studying Node Js sometimes Python, React or PHP.</p>
            <a href="https://github.com/yesy12">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img 
                src="https://avatars0.githubusercontent.com/u/24502746?s=460&v=4" 
                alt="yesy12" />
                <div className="user-info">
                  <strong>Yesy12</strong>
                  <span>ReactJs, PHP, Python</span>
                </div>
            </header>
            <p>19 years. São Paulo/BR. Back End Develop. Node Js and Python . Studying Node Js sometimes Python, React or PHP.</p>
            <a href="https://github.com/yesy12">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;