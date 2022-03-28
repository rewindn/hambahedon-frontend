import Image from 'next/image';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export default function Profile() {
    const [user, setUser] = useState({
        avatar: '',
        username: '',
        email: '',
    });
    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const jwtToken = atob(token);
            const payload = jwtDecode(jwtToken);

            setUser(payload.player);
            
        }
    }, []);

    const IMG = process.env.NEXT_PUBLIC_IMG;

    const avatar = `${IMG}/${user.avatar}`;

    return (
        <div className="user text-center pb-50 pe-30">
            <img
                alt="pp"
                src={avatar}
                width="90"
                height="90"
                className="img-fluid mb-20 rounded-circle"
            />
            <h2 className="fw-bold text-xl color-palette-1 m-0">
                {user.username}
            </h2>
            <p className="color-palette-2 m-0">{user.email}</p>
        </div>
    );
}
