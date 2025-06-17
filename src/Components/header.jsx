import logo from '../assets/logo.png'
export default function Header(){
    return(
        
            <nav>
                <img src={logo} alt="logo" />
                <h1>My diary</h1>
            </nav>
       
    );
}