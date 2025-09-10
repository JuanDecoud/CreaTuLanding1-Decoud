import { Container, Row, Col, Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

function ItemDetaill({ product }) {
  return (
        <Container className="my-4">
        <Card className="shadow-lg border-0">
            <Card.Header  className=" fs-2 fw-bold bg-secondary text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-box-seam mx-2" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
            </svg>
            {product.title}
            </Card.Header>

            <Card.Body>
            <Row className="d-flex justify-content-center align-items-center mt-3 w-100 ">
                <Col xs={12} md={4} l={4} xxl={4} className="text-center mb-3 mb-md-0">
                    <Card.Img src={product.thumbnail} alt={product.title} className="rounded shadow-sm" />
                </Col>
                
                <Col xs={12} md={8} l={8} xxl={8}  className=" d-flex justify-content-center align-items-center   ">
                    <Card.Text className="fs-5 fw-medium text-center">
                        {product.description}
                    </Card.Text>
                    
                </Col>
   
                <Col xs={12} l={12} md={12} xxl={12} className=" d-flex justify-content-start mt-4 ">
                    <ItemCount></ItemCount>
                </Col>



            </Row>
            </Card.Body>
        </Card>
        </Container>
  );
}

export default ItemDetaill;