import axios from 'axios';
import * as React from "react";
import { ApiUri } from '../_config';

const authContext = React.createContext();

function useAuth() {
    const [authed, setAuthed] = React.useState(true); //false

    return {
        authed,
        async login(data) {
            return new Promise((res) => {
                axios.post(ApiUri('admin/login'), data)
                .then((e) => {
                    localStorage.setItem('token', e.data.result.access_token);
                    localStorage.setItem('userdata', e.data.result);
                    setAuthed(true)
                    res();
                })
            })
        },
        logout() {
            return new Promise((res) => {
                setAuthed(false)
                localStorage.removeItem('token');
                res();
            })
        }
    }
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
