import { Link } from "react-router-dom"
import React, { useState } from "react"

export default function Home() {
    const [list, setList] = useState('Rodrigo Santos');

    return (
        <>
            <div>Home</div>
            <div>{list || 'Rodrigo Nogueira'}</div>
            <Link to="/login">login</Link>
            <Link to="/products">products</Link>
        </>
    )
}