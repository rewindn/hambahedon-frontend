/* eslint-disable object-curly-newline */
/* eslint-disable quote-props */
import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
    tittle: string;
    active: boolean;
    link: string;
    icon: string;
    onClick: () => void;
}
export default function MenuItem(props: MenuItemProps) {
    const { tittle, active, link, icon, onClick } = props;
    const classnames = cx({
        // eslint-disable-next-line quote-props
        // eslint-disable-next-line quotes
        item: true,
        'mb-30': true,
        active,
    });
    return (
        <div className={classnames} onClick={onClick}>
            <div className="me-3">
                <Image
                    // className="me-3"
                    alt="overview"
                    src={`/icon/${icon}.svg`}
                    width="25"
                    height="25"
                />
            </div>

            <p className="item-title m-0">
                {onClick ? (
                    <a className="text-lg text-decoration-none">{tittle}</a>
                ) : (
                    <Link href={`/${link}`}>
                        <a className="text-lg text-decoration-none">{tittle}</a>
                    </Link>
                )}
            </p>
        </div>
    );
}
