import Link from 'next/link';
import TableRowdefault from '../Overview/TableRow';
interface TableRowProps {
    title: string;
    categorie: 'Desktop' | 'Mobile' | 'other';
    item: number;
    price: number;
    status: 'Pending' | 'Success' | 'Failed';
    image: string;
    id: string;
}
export default function TableRow(props: TableRowProps) {
    const { title, categorie, item, price, status, image, id } = props;

    return (
        <tr data-category="pending" className="align-middle">
            <TableRowdefault
                title={title}
                categorie={categorie}
                item={item}
                price={price}
                status={status}
                image={image}
            />
            <td>
                <Link href={`/member/transactions/${id}`}>
                    <a className="btn btn-status rounded-pill text-sm">
                        Details
                    </a>
                </Link>
            </td>
        </tr>
    );
}
