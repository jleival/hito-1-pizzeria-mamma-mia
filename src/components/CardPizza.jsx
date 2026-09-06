import { Card, Button } from "react-bootstrap";

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <Card className="tarjeta-pizza m-2 shadow-sm h-100">
            <Card.Img variant="top" src={img} style={{ height: '200px', objectFit: 'cover' }} />

            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <hr />
                    {/* ⚡ Usamos un contenedor con altura fija o min-height para que la caja de ingredientes siempre mida lo mismo */}
                    <div style={{ minHeight: '85px' }} className="d-flex flex-column justify-content-center">
                        <Card.Text className="text-muted text-center mb-0">
                            Ingredientes: <br />
                            🍕 {Array.isArray(ingredients) ? ingredients.join(', ') : ingredients}
                        </Card.Text>
                    </div>
                    <hr className="mt-3" />
                </div>

                <div>
                    <div className="text-center mb-3">
                        <h5 className="fw-bold">Precio: ${price}</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Button variant="outline-dark" size="sm">Ver Más 👁️</Button>
                        <Button variant="dark" size="sm">Añadir 🛒</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPizza;