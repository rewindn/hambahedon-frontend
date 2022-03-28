/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Router, { useRouter } from 'next/router';

export default function Auth() {
    const router = useRouter();
    const [isSignIn, setIsLogin] = useState(false);
    const [user, setUser] = useState({
        avatar: '',
    });

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const jwtToken = atob(token);
            const payload = jwtDecode(jwtToken);

            setUser(payload.player);
            setIsLogin(true);
        }
    }, []);
    const IMG = process.env.NEXT_PUBLIC_IMG;

    const avatar = `${IMG}/${user.avatar}`;

    const onLogOut = () => {
        Cookies.remove('token');
        router.push('/');
        setIsLogin(false);
    };
    if (isSignIn === true) {
        return (
            <li className="nav-item my-auto dropdown d-flex">
                <div className="vertical-line d-lg-block d-none" />
                <div>
                    <a
                        className="dropdown-toggle ms-lg-40"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src={avatar}
                            className="rounded-circle"
                            width="40"
                            height="40"
                            alt=""
                        />
                    </a>

                    <ul
                        className="dropdown-menu border-0"
                        aria-labelledby="dropdownMenuLink"
                    >
                        <li>
                            <Link href="/member">
                                <a className="dropdown-item text-lg color-palette-2">
                                    My Profile
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="dropdown-item text-lg color-palette-2">
                                    Wallet
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/edit-profile">
                                <a className="dropdown-item text-lg color-palette-2">
                                    Account Settings
                                </a>
                            </Link>
                        </li>
                        <li onClick={onLogOut}>
                            <a className="dropdown-item text-lg color-palette-2">
                                Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        );
    }
    return (
        <li className="nav-item my-auto">
            <Link href="/sign-in">
                <a
                    className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                    role="button"
                >
                    Sign In
                </a>
            </Link>
        </li>
    );
}
