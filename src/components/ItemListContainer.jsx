import { useEffect, useState } from "react"
import { Container, Row,Col } from "react-bootstrap"
import { useParams } from "react-router"
import ItemList from "./ItemList"

function ItemListContainer (){
    const [products,setProducts]=useState([])
    const {id} = useParams()
    const getAllLink = 'https://dummyjson.com/products?limit=100'
    const getByCategoryLink = `https://dummyjson.com/products/category/${id}`

    useEffect(() => {
        fetch(id ? getByCategoryLink : getAllLink)
        .then(res => res.json())
        .then(data=>{setProducts(data.products)});
    }, [id])
    
    
    return (
        <>
            <Container className="p-2"  >
                <Row className="gx-2 gy-3 text-center d-flex justify-content-center align-items-center" >
                     
                    {
                        products.map(
                            (prod,i)=>
                                (
                                    <Col key={i} className="d-flex justify-content-center">  
                                        <ItemList product={prod} />
                                    </Col>
                                )
                        )
                    }
                     
                </Row>
              
            </Container>

        </>
    )
}

export default ItemListContainer