import logo from '../assets/logo.png'
export default function Header(){
    return(
        
            <nav>
                
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <h1>My diary</h1>
                </div>
                <div>
                    <a href="#">Home </a>
                    <a href="#">Notebook </a>
                    <a href="#">Contact </a>
                    <a href="#">Login</a>
                </div>
            </nav>
       
    );
}