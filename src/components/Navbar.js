import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const logout = async () => {

    sessionStorage.clear();
    window.location.href = '/';

    // window.location.href = '/';
}

const navbar = () => {
    return (
        // <Navbar bg="light" expand="lg">
        //     <Container>
        //         <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="justify-content-start">
        //                 <Nav.Link href="/users">Users</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //         <Nav className="justify-content-end">
        //             <Nav.Link onClick={logout}>Logout</Nav.Link>
        //         </Nav>
        //     </Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/book">Book</Nav.Link>
                        <Nav.Link href="/barang">Barang</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        // </Navbar>


    );
}
export default navbar;