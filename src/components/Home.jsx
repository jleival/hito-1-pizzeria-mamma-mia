import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
    return (
        <div>
            <Header />
            <Container className="my-4">
                <Row className="g-4">
                    {/* ⚡ Agregamos d-flex justify-content-center aquí */}
                    <Col md={4} sm={6} xs={12} className="d-flex justify-content-center">
                        <CardPizza
                            name="Pizza Napolitana"
                            price="5.950"
                            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                            img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60"
                        />
                    </Col>

                    {/* ⚡ Y aquí también */}
                    <Col md={4} sm={6} xs={12} className="d-flex justify-content-center">
                        <CardPizza
                            name="Pizza Española"
                            price="6.950"
                            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                            img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60"
                        />
                    </Col>

                    {/* ⚡ Y en la última */}
                    <Col md={4} sm={6} xs={12} className="d-flex justify-content-center">
                        <CardPizza
                            name="Pizza Pepperoni"
                            price="6.950"
                            ingredients={["mozzarella", "pepperoni", "orégano"]}             
                            img="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=60"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;