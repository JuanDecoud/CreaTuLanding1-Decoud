import CartWidget from "./CartWidget"
function NavBar (){
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-4 rounded ">
                <div class="container-fluid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-back" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                    </svg>
                    <a class="navbar-brand mx-1" href="#">E-PRODUCTS</a>
                    <div class="collapse navbar-collapse mx-4 " id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Celulares</a></li>
                                    <li><a class="dropdown-item" href="#">Pc</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget/>
            </nav>

        </>
    )
}

export default NavBar