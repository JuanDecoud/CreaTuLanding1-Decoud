import { NavLink } from 'react-router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemList({product}) {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary" as={NavLink} to={`/pdetaill/${product.id}`}>Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemList;