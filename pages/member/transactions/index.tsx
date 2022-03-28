import jwtDecode from 'jwt-decode';
import Sidebar from '../../../components/organs/Sidebar';
import TransactionContent from '../../../components/organs/TransactionContent';
export default function Transactions() {
    return (
        <>
            <Sidebar ActiveSidebar="transactions" />
            <section className="transactions overflow-auto">
                <TransactionContent />
            </section>
        </>
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

    return {
        props: {},
    };
}
