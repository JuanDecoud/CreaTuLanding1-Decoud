import CartWidget from "./CartWidget"

function ItemListContainer ({text}){
    return (
        <>
            <div class ="container-fluid w-100 h-100 mt-2 p-3 bg-body shadow shadow-m rounded">
                <div class ="container rounded-pill p-4 border border-1 border-dark">
                    <p>{text}</p>
                </div>

            </div>

        </>
    )
}

export default ItemListContainer