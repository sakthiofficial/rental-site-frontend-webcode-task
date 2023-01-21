import { useNavigate, Navigate } from 'react-router-dom';

export function Producted({ logIn, children }) {
    const navigate = useNavigate();

    if (logIn == false) {

        return <Navigate to="/signup" replace />;


    }
    return children;

}
