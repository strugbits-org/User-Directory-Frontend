import {
    makeStyles,
  } from '@material-ui/core/styles';
  
  const useStyles = makeStyles({
    root: {
  
    },
    card: {
        width: '27%', 
        margin: '0px 0px 0px 55%',
        position: 'absolute',
        top: '10%'
    },
    cardHeader: {
      backgroundColor: '#4350a5',
      height: '10px'
    },
    cardHeaderTypo: {
      fontSize: '22px',
      margin: '5% 0 3% 0',
      textAlign: 'center',
    },
    textField: {
      marginLeft: '8%',
      width: '90%',
    },
    checkBox: {
      margin: '4% 0 0 20%'
    },
    link: {
      cursor: 'pointer',
    },
    loginBtn: {
      padding: '15px',
      margin: '4% 0 2% 12%',
      width: '40%',
    },
    socialTypo: {
      margin: '3% 0 0 12%',
      fontSize: '17px',
    },
    socialCont: {
      display: 'flex', 
      height: '50px', 
      justifyContent: 'space-evenly', 
      margin: '1% 0 4% 8%', 
      width: '55%',
    },
    socialIcons: {
      flex:'0.2',  
      backgroundColor: '#0632b0'
    },
    cardFooter:{
      backgroundColor: '#4350a5',
      height: '70px'
    }
  });
  
  export default useStyles;