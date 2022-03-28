import cx from 'classnames';
import Link from 'next/link';

interface MenuProps {
    tittle: string;
    active?: boolean;
    href: string;
}

export default function MenuHome(props: Partial<MenuProps>) {
    const { tittle, active, href = '/' } = props;
    const classTItle = cx({
        'nav-link': true,
        active,
    });
    return (
        <li className="nav-item my-auto">
            <Link href={href}>
                <a className={classTItle} aria-current="page">
                    {tittle}
                </a>
            </Link>
        </li>
    );
}
