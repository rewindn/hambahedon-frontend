import Image from 'next/image';
import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { toast } from 'react-toastify';
import { getMemberOverview } from '../../../services/player';
import TopUpCategories from '../TopUpCategories';
import TableRow from './TableRow';

export default function Overview() {
    const [datas, setData] = useState([]);

    useEffect(async () => {
        const response = await getMemberOverview();
        

        if (response.error) {
            toast.error(response.msessage);
        } else {
            setData(response.data.data);
           
        }
    }, []);

    const IMG = process.env.NEXT_PUBLIC_IMG;

    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                    Overview
                </h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">
                        Top Up Categories
                    </p>
                    <div className="main-content">
                        <div className="row">
                            <TopUpCategories />
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">
                        Latest Transactions
                    </p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">
                                        Game
                                    </th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas.map((data) => {
                                    const image = `${IMG}/${data.historyVoucherTopup.thumbnail}`;
                                    return (
                                        <tr className="align-middle">
                                            <TableRow
                                                key={data._id}
                                                title={
                                                    data.historyVoucherTopup
                                                        .gameName
                                                }
                                                categorie={
                                                    data.historyVoucherTopup
                                                        .category
                                                }
                                                item={`${data.historyVoucherTopup.coinQuantity} ${data.historyVoucherTopup.coinName} `}
                                                price= <NumberFormat
                            value={data.value}
                            prefix="Rp. "
                            displayType="text"
                            thousandSeparator="."
                            decimalSeparator=","
                        />
                                                status={data.status}
                                                image={image}
                                            />
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
