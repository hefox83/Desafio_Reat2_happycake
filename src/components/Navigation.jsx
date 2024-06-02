import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (

        <Navbar>
            <Container className="justify-content-start">
                <Link id="link"
                    to="/"
                    className="text-white me-3 display-flex text-decoration-none">
                   🏡Home</Link>
                <Link
                    to="/Contacto"
                    className="text-white m-s2 text-decoration-none">📒Contacto
                </Link>
                <Navbar.Brand id="brand" className="text-white text-decoration-none">🍰 Happy Cake{' '}
                </Navbar.Brand>
            </Container>
        </Navbar>);
};
export default Navigation;