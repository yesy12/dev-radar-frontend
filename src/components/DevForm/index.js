import React,{ useState, useEffect } from "react";


const DevForm = (props) =>{
    const { onSubmit } = props;
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


    const handleSubmit = async(e) => {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithub_username("");
        setTechs("");
    }

    return (
        <form onSubmit={handleSubmit}>
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
    )
}

export default DevForm;