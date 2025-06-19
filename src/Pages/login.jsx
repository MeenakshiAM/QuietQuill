import '../App.css';

export default function login(){
    return(
        <div className='login'>
            <div className='inputs'>
                <input type="text" placeholder='Username' />
                <input type="password"placeholder='password' />

            </div>
            <button className='login-btn'>login</button>

        </div>
    );

}