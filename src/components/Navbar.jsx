import { Navbar as NavbarBS, Nav, Container, Button } from "react-bootstrap";

const Navbar = () => {
    // Variables requeridas por el desafío
    const total = 25000;
    const token = true; // Puedes cambiarlo a true para probar los otros botones

    return (
        <NavbarBS bg="dark" variant="dark" expand="lg" className="px-3">
            <Container fluid>
                {/* Nombre de la Pizzería */}
                <NavbarBS.Brand href="#home">Pizzería Mamma Mía!</NavbarBS.Brand>

                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                
                <NavbarBS.Collapse id="basic-navbar-nav">
                    {/* Opciones de navegación a la izquierda */}
                    <Nav className="me-auto">
                        <Button variant="outline-light" size="sm" className="me-2 mb-1 mb-lg-0">
                            🍕 Home
                        </Button>

                        {/* Operador ternario para el Token */}
                        {token ? (
                            <>
                                <Button variant="outline-light" size="sm" className="me-2 mb-1 mb-lg-0">
                                    🔓 Profile
                                </Button>
                                <Button variant="outline-light" size="sm" className="me-2 mb-1 mb-lg-0">
                                    🔒 Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="outline-light" size="sm" className="me-2 mb-1 mb-lg-0">
                                    🔐 Login
                                </Button>
                                <Button variant="outline-light" size="sm" className="me-2 mb-1 mb-lg-0">
                                    🔐 Register
                                </Button>
                            </>
                        )}
                    </Nav>

                    {/* Botón de Total a la derecha formateado con toLocaleString() */}
                    <Nav>
                        <Button variant="outline-info" size="sm">
                            🛒 Total: ${total.toLocaleString()}
                        </Button>
                    </Nav>
                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
    );
};

export default Navbar;