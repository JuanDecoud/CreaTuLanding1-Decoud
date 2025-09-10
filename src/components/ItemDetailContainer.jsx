import { useEffect, useState } from 'react'
import {Container} from 'react-bootstrap'
import { useParams } from 'react-router'
import ItemDetaill from './ItemDetaill'



function ItemDetailContainer (){
    const [product,setProduct] = useState({})

    const {id}= useParams()
    const productFetchUrl = `https://dummyjson.com/products/${id}`

    useEffect(()=>{
        if(id){
            fetch(productFetchUrl)
            .then(res => res.json())
            .then(product=>setProduct(product));
        }
        
    },[id])

    return(
        <>
            <Container>
                <ItemDetaill product ={product}>
                    
                </ItemDetaill>
  

            </Container>
        
        
        </>
    )

    

}


export default ItemDetailContainer