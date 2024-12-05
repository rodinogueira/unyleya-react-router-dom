import { useParams, Outlet, useLocation } from "react-router-dom"
import { useProducts } from "../../context/index";

const Product = () => {
    const {id} = useParams();
    const products = useProducts();
    const {state} = useLocation();
    
    console.log(state, 'Received state from Link by useLocation')
    
    const product = products.find((p) => p.id === Number(id));

    return (
        <div>
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <Outlet/>
                </>
            ) : (
                <p>Produto não encontrado.</p>
            )}
        </div>
    );
}

export default Product