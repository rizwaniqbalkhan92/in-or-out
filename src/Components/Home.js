import React, { useState } from 'react'
import { Paper, Card, Typography, Button, TextField } from '@mui/material'
import './home.css'
import { useHistory } from 'react-router-dom'
// import data from './data/app.json'
import { getDatabase, set, ref, push, auth } from 'firebase/database'
// import { getDatabase, ref, set } from "firebase/database";
const Home = () => {
    const history = useHistory()
    const getData = localStorage.getItem("userdata")
    var formatted = JSON.parse(getData)
    // var time=formatted.umeta.lastLoginAt
    // console.log(formatted)

    const [timeIn, setTimeIn] = useState('')
    const [timeOut, setTimeOut] = useState('')

    const submitData = (key) => {
        // alert(key)

        const db = getDatabase();
        console.log({
            email: formatted ? formatted.uemail : '',
            timeIn,
            timeOut,
            date: new Date()
        })
        push(ref(db, `users/${key}`), {
            email: formatted ? formatted.uemail : '',
            timeIn,
            timeOut,
            date: new Date()
        }).then(() => {

            setTimeOut('')
            setTimeIn('')
        })
            .catch((error) => {
                console.log('error')
                // The write failed...
            });



    }



    return (
        <Paper className='home'>
            <Typography className='head-1'>{formatted ? formatted.uemail : ''}</Typography>
            <Card className='homeText'>
                <Typography style={{ color: '#333333', fontSize: 23 }}>Time In</Typography>
                <TextField value={timeIn} placeholder='Time In' type='time' className='textField' onChange={e => setTimeIn(e.target.value)} /><br />
                <Typography value={timeOut} style={{ color: '#333333', fontSize: 23 }}>Time Out</Typography>
                <TextField placeholder='Time Out' type='time' className='textField' onChange={e => setTimeOut(e.target.value)} /><br />
                <Button variant='contained' color='success' onClick={() => submitData(formatted.uid)} style={{ width: 100, marginRight: 20 }}>Submit</Button>
                <Button variant='contained' color='primary' onClick={() => history.push("/")} style={{ width: 100 }}>Logout</Button>
            </Card>


        </Paper>
    )
}

export default Home
