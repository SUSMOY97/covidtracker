import React,{useEffect,useState} from 'react';



import Cards from "./Components/Cards/Cards";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import Chart from "./Components/Chart/Chart";
import styles from "./App.module.css"
import coronaImage from "./image/image.png"

import Axios from 'axios';

function App() {
  const url = "https://covid19.mathdro.id/api";
  const [state,setState] = useState({
    data:{},
    country:''
  })

  

  


  const fetchData = async (country) =>{
    let changeableurl = url;
    if(country){
      changeableurl = `${url}/countries/${country}`
    }
    const {data} = await Axios.get(changeableurl)
    console.log(data)
    
    // const modifieddata = {
    //   confirmed:data.confirmed,
    //   recovered:data.recovered,
    //   deaths:data.deaths,
    //   lastUpdate:data.lastUpdate
    // }
    setState({
      confirmed:data.confirmed,
      recovered:data.recovered,
      deaths:data.deaths,
      lastUpdate:data.lastUpdate
    })
    return {confirmed:data.confirmed,
      recovered:data.recovered,
      deaths:data.deaths,
      lastUpdate:data.lastUpdate}

    
  }
  const handlecountrychange =async (country) =>{
    
    const fetcheddata = await fetchData(country)
    
    console.log(country)
    console.log(fetcheddata)
    setState({fetcheddata,country:country})
  }
  
  
    

  
  useEffect(()=>{
   fetchData();
   
   
   
   
   
  
   

  },[])

  

  return (
    
    <div className={styles.container}>
    <img className={styles.image} src={coronaImage} alt=""/>
    <Cards state={state}/>
    <CountryPicker handlecountrychange={handlecountrychange}/>
    <Chart state={state}/>

      
    </div>
  );
}

export default App;
