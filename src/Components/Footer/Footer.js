import { AppBar } from "@material-ui/core";
import Copyright from "./Copyright";


const Footer = () => {
   
   
    return (
        <AppBar position="static" style={{marginTop: '18rem', background:'#424242'}}>
            <Copyright />
        </AppBar>
        
    )
}

export default Footer;