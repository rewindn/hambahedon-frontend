import jwtDecode from 'jwt-decode';
import Image from 'next/image';
import CheckoutConfirmation from '../components/organs/CheckoutConfirmation';
import CheckoutDetail from '../components/organs/CheckoutDetail';
import CheckoutItem from '../components/organs/CheckoutItem';

export default function Checkout(props: any) {
    const { user } = props;

    return (
        <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
            <div className="container-fluid">
                <div className="logo text-md-center text-start pb-50">
                    <a className="" href="/#">
                        <Image src="/icon/logo.svg" width="60" height="60" />
                    </a>
                </div>
                <div className="title-text pt-md-50 pt-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-10">
                        Checkout
                    </h2>
                    <p className="text-lg color-palette-1 mb-0">
                        Waktunya meningkatkan cara bermain
                    </p>
                </div>
                <CheckoutItem />
                <hr />
                <CheckoutDetail />
                <CheckoutConfirmation />
            </div>
        </section>
    );
}

export async function getServerSideProps({ req }: any) {
    const { token } = req.cookies;
    if (!token) {
        return {
            redirect: {
                destination: '/sign-in',
                permanent: false,
            },
        };
    }

    const jwtToken = Buffer.from(token, 'base64').toString('ascii');

    const payload = jwtDecode(jwtToken);

    const userFromToken = payload.player;
    const IMG = process.env.NEXT_PUBLIC_IMG;
    userFromToken.avatar = `${IMG}/${payload.avatar}`;

    return {
        props: {
            user: userFromToken,
        },
    };
}
