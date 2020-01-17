import React,{ useState, useEffect } from 'react';

import api from "./services/api";

import DevItem from "./components/DevItem";

import "./global.css";
import "./App.css";
import "./SideBar.css";
import "./Main.css";


function App() {

  const [devs,setDevs] = useState([]);

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
      (err) => {
        console.log(err);
      },{
        timeout: 30000,
      }
    )
  },[])

  useEffect(()=>{
    const loadDevs = async () => {
      const response = await api.get("/devs");

      setDevs(response.data);
    }
    loadDevs();
   },[])

  const handleAddDev = async(e) => {
    e.preventDefault();

    const response = await api.post("/devs",{
      github_username,
      techs,
      latitude,
      longitude
    })

    setGithub_username("");
    setTechs("");

    setDevs([...devs,response.data]);
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
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>                      
    </div>
    
  );
}

export default App;