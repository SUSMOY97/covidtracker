import React, {useState,useEffect}from "react" ;

import {NativeSelect,FormControl} from "@material-ui/core"
import styles from "./CountryPicker.module.css"
import Axios from "axios"


const CountryPicker = ({handlecountrychange})=>{
    const [fetchedCountries,setFetchedCountries] = useState([])
    const fetchcountries = async() => {
        const {data:{countries}} = await Axios.get("https://covid19.mathdro.id/api/countries")
        console.log(countries)
        const modifiedcountries = countries.map((country)=>country.name)
        setFetchedCountries(modifiedcountries)

    }

    useEffect(()=>{
        fetchcountries();
    },[setFetchedCountries])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handlecountrychange(e.target.value)}>
                <option value="global">Choose Country...</option>
                {fetchedCountries.map((country,i)=><option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}


export default CountryPicker ; 