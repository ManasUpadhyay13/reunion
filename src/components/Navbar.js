import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" variant="dark">

                <Container>

                    <Navbar.Brand href="#home">Rentify</Navbar.Brand>

                    <Nav className="  me-auto">

                        <Nav.Link href="#home">Rent</Nav.Link>
                        <Nav.Link href="#features">Buy</Nav.Link>
                        <Nav.Link href="#pricing">Sell</Nav.Link>

                        <NavDropdown title="Manage Property" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">demo1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                demo2
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">demo1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                demo2
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button className='mx-3' variant="primary">LogIn</Button>
                    <Button className='mx-3' variant="secondary">SignUp</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;