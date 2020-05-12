import React,{useState,useEffect} from "react" ;
import Axios from "axios" ;
import {Line,Bar} from "react-chartjs-2" ;
import styles from "./Chart.module.css"


const Chart = ({state})=>{
    const [dailyData,setDailyData] = useState({})
    const {fetcheddata} = state
    console.log(fetcheddata?.confirmed)
    const {country} = state
    console.log(country)

    
    const fetchDailyData=  async ()=>{
        const {data} = await Axios.get("https://covid19.mathdro.id/api/daily")
        console.log(data)
        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed?.total,
            deaths: dailyData.deaths?.total,
            date: dailyData.reportDate

        }))
        setDailyData(modifiedData)
      }

    useEffect(()=>{
        // const fetchAPI = async ()=> {
        //     setDailyData(await fetchDailyData())
        // }
        // fetchAPI();
        fetchDailyData();
    },[])

    const barChar = (
        fetcheddata?.confirmed ? (<Bar data={{
            labels: ["Infected","Recovered","Deaths"],
            datasets:[{
                label:'People',
                backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","#d50000"],
                data:[state.fetcheddata?.confirmed?.value,state.fetcheddata?.recovered?.value,state.fetcheddata?.deaths?.value]
            }]
            
        }} options={{
            legend:{display:false},
            title:{display:true,text:`Current state in ${country}`}
            
            }}/>):null

    )
    

    const lineChart = (
        dailyData.length?(<Line
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:"Infected",
                    borderColor:"#3333ff",
                    fill:true

                    },{
                        data:dailyData.map(({deaths})=>deaths),
                    label:"Deaths",
                    borderColor:"red",
                    backgroundColor:"rgba(255,0,0,0.5)",
                    fill:true
                    }]
            }}
        />):null

    )


    return (
       <div className={styles.container}>
       {country?barChar:lineChart}

       </div>
    )
}


export default Chart ; 