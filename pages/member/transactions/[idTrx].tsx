import jwtDecode from 'jwt-decode';
import TransactionDetailContent from '../../../components/organs/TransactionDetailContent';
import { getTransactionsDetail } from '../../../services/player';


interface tras {
    type: string;
}

export default function TransactionDetail(props: tras) {
    const { transactionDetail } = props;

    
    return (
        <section className="transactions-detail overflow-auto">
            <TransactionDetailContent data={transactionDetail} />
        </section>
    );
}

export async function getServerSideProps({ req, params }: any) {


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
 
    const response = await getTransactionsDetail(params.idTrx, jwtToken);


    return {
        props: {
            transactionDetail: response.data,
        },
    };
}
