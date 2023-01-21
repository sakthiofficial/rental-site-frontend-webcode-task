import { useContext } from 'react';
import { user } from './App';

export function ProductLogOut({ children }) {
    // const logIn = useContext("login")
    const [logIn, setlogIn] = useContext(user);

    if (logIn) {
        return children;
        // setlogIn(false)
    } else {
        return null;

    }
}
