import { Link, useSearchParams, useLocation } from "react-router-dom"
import { useProducts } from "../../context/index";
import "./style.css"
const Products = () => {
    const products = useProducts();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(location.state)
    return (
        <div>
            <h1>Produtos</h1>
            <p>Received with useLocation "{location.state}"</p>
            <p>{searchParams.get('page')}</p>
            {products.length > 0 ? (
                products.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                ))
            ) : (
                <p>Carregando produtos...</p>
            )}
            <br/>
            <Link to={`/product/5`} state={'state from Link'}>Produto 5</Link>
            <ul className="pagination">
                <li><button onClick={() => setSearchParams({page: 1})}>1</button></li>
                <li><button onClick={() => setSearchParams({page: 2})}>2</button></li>
                <li><button onClick={() => setSearchParams({page: 3})}>3</button></li>
                <li><button onClick={() => setSearchParams({page: 4})}>4</button></li>
            </ul>
        </div>
    )
}

export default Products;
