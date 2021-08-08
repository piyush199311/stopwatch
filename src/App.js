import React, { useEffect, useState,useRef } from 'react';
import Button from './components/Button';
import './App.css'
const App=()=>{
    const [timer,setTimer]=useState(false);
    const [time,setTime]=useState(0);
    const [laps,setLaps]=useState([]);
    const ref=useRef();
    useEffect(()=>{
        if(timer){
            ref.current=setInterval(()=>{
                setTime(time=>time+1);
            },1000);
            return ()=>{
                    clearInterval(ref.current);
            }
        } else {
            if(ref.current){
                clearInterval(ref.current);
            }
        }
    },[timer])
    return (
        <div className='container'>
            <h1>Stop Watch</h1>
            <h2>{time}</h2>
            <Button onClick={()=>setTimer(timer=>!timer)} title={timer?'Stop':time?'Restart':'Start'} />
            {
                time>0&&
                    <Button title='Reset' onClick={()=>{
                        setTimer(false);
                        setTime(0);
                        setLaps([]);
                    }}/>
            }
            {
                time>0&&Array(2).fill().map((_,index)=>{
                return (
                <div className='lapContainer' key={index}><Button onClick={()=>{
                    setLaps(laps=>{
                        let newValues=[...laps];
                        newValues[index]=time;
                        return newValues;
                    })
                }} title={`Lap #${index+1}`}/>
                <p>{laps[index]}</p></div>)
            })
            }
        </div>
    )
}
export default App;