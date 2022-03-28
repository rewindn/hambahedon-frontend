import Sidebar from '../../components/organs/Sidebar';
import Overview from '../../components/organs/Overview';
import jwtDecode from 'jwt-decode';

export default function index() {
    return (
        <section className="overview overflow-auto">
            <Sidebar ActiveSidebar={'overview'} />
            <Overview />
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
