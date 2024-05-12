import { Link } from 'react-router-dom'


const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>PINK BUDA BURGER </h1> 
            </header>
            <main className="public__main">
                <p></p>
                <address className="public__addr">

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