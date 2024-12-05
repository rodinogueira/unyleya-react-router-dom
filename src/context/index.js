import React, { createContext, useContext, useEffect, useState } from "react";
import {getProducts} from '../mocks/productsMock'

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     // Busca os produtos na API
    //     fetch("/api/products")
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data))
    //         .catch((err) => console.error(err));
    // }, []);

    // const getProducts = async () => {
    //     try {
    //         const products = await fetch("/api/products")
    //         const response = await products.json();
    //         console.log(response)
    //     }catch(err) {
    //         console.error("Erro ao buscar os produtos simulados:", err);        
    //     }
    // }

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            console.log(response);
            setProducts(response);
        } catch (err) {
            throw new Error(`Falha ao buscar os produtos simulados: ${err.message}`);
        }
    };

    useEffect(() => {
        fetchProducts();        
    }, []);

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

// Hook para consumir o contexto
export const useProducts = () => {
    return useContext(ProductsContext);
};
