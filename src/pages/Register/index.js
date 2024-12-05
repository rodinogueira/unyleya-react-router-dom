import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado...');
        navigate('/products', {state: 'passing state by navigate'});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nome:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" />
            </div>
            <div>
                <label htmlFor="">Senha:</label>
                <input type="password" />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Register;