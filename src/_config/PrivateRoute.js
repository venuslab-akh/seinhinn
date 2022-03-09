import { Navigate } from "react-router-dom";
import useAuth from '../cores/useAuth';

const ProtectedRoute = ({ children }) => {
    const { authed } = useAuth();
    const token = localStorage.getItem('token');
    // console.log(token);
    if (!authed && token) {
        return children;
    } else if (!authed) {
        
        console.log('auth');
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;

// export default function PrivateRoute({ children, ...rest }) {
    
//     const { authed } = useAuth();
//     return <Outlet {...rest}>{
//         authed?children : <Navigate to={'/login'}/>
//     }</Outlet>
// }