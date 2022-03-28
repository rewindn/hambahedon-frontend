export default function AllTable() {
    return (
        <>
            <tr className="align-middle">
                <TableRow
                    title="MLBB"
                    categorie="Mobile"
                    item={450}
                    price={1000000}
                    status="Pending"
                    image="overview-1.png"
                />
            </tr>
            <tr className="align-middle">
                <TableRow
                    title="Call Of Duty:Modern"
                    categorie="Mobile"
                    item={550}
                    price={740000}
                    status="Success"
                    image="overview-2.png"
                />
            </tr>
            <tr className="align-middle">
                <TableRow
                    title="Clash Of Clans"
                    categorie="Mobile"
                    item={100}
                    price={120000}
                    status="Failed"
                    image="overview-3.png"
                />
            </tr>
            <tr className="align-middle">
                <TableRow
                    title="The Royal Game"
                    categorie="Mobile"
                    item={225}
                    price={1000000}
                    status="Pending"
                    image="overview-4.png"
                />
            </tr>
        </>
    );
}
