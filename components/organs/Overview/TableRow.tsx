import cx from 'classnames';
interface TableRowProps {
    title: string;
    categorie: 'Desktop' | 'Mobile' | 'PC';
    item: string;
    price: number;
    status: 'Pending' | 'Success' | 'Failed';
    image:
        | 'overview-1.png'
        | 'overview-2.png'
        | 'overview-3.png'
        | 'overview-4.png'
        | 'overview-5.png';
}
export default function TableRow(props: TableRowProps) {
    const { title, categorie, item, price, status, image } = props;
    const className = cx({
        'float-start icon-status': true,
        pending: status === 'pending',
        success: status === 'success',
        failed: status === 'failed',
    });
    return (
        <>
            <th scope="row">
                <img
                    className="float-start me-3 mb-lg-0 mb-3"
                    src={`${image}`}
                    width={80}
                    height={60}
                    alt="game thumb"
                />
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">
                        {title}
                    </p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">
                        {categorie}
                    </p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0">{item}</p>
            </td>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0">
                    {price}
                </p>
            </td>
            <td>
                <div>
                    <span className={className} />
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {status}
                    </p>
                </div>
            </td>
        </>
    );
}
