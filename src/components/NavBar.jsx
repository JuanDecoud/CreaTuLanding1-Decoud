import { useEffect, useState } from "react"
import CartWidget from "./CartWidget"
import {Navbar,Container,Nav ,NavDropdown } from 'react-bootstrap'
import {NavLink} from 'react-router'
function NavBar (){
    const [categories,setCategories]= useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data=>setCategories(data));

    },[])

    return (
        <>
            <Navbar expand="lg" className="bg-light p-3">
            <Container className="d-flex align-items-center justify-content-between">
                <Navbar.Brand className="fw-bold fs-4" as={NavLink} to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-back" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                </svg>
                E-PRODUCTS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavDropdown" />
                <Navbar.Collapse id="navbarNavDropdown">
                <Nav className="me-auto">
                    <NavDropdown title="Categorias">
                        {
                            categories.map((cat, i) =>
                                (
                                    <NavDropdown.Item as={NavLink} key={i} to={`/categorias/${cat.slug}`}>
                                    {cat.name}
                                    </NavDropdown.Item>
                                )
                            )
                        }
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>

                <CartWidget />
            </Container>
            </Navbar>

        </>
    )
}

export default NavBar