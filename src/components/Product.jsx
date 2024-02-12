import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         {product.description.slice(0,70)}...
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;