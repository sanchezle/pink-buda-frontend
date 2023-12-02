import { Link } from 'react-router-dom'
import Barcelovelog from '../img/Barcelovelog.png'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>B A R C E L O V E </h1> 
            </header>
            <main className="public__main">
                <p></p>
                <address className="public__addr">
                    <img id='logo' src={Barcelovelog} alt="Barcelove logo" />
            
                </address>
                <br />
                <p></p>
            </main>
            <footer>
                <Link to="/passwordResetRequest">Forgot password? </Link>
                <Link to="/login">Login</Link>
                <Link to= "/register"> Register</Link>
            </footer>
        </section>

    )
    return content
}
export default Public