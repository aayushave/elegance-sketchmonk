import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BgImage from './../../assets/images/bg-image.jpg'
import Header from '../Header';
import Centered from './Centered';
const useStyles = makeStyles((theme) => ({
root:{
    minHeight:'100vh',
    backgroundImage:`url(${BgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center'
}

}))


const Landing = () => {
const classes = useStyles();
    return (
        <div className={classes.root}>
         <Header />
        <Centered/>
        </div>
    )
}

export default Landing
