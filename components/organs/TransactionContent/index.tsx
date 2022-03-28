import { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { toast } from 'react-toastify';
import { getMemberOverview, getMemberTransactions } from '../../../services/player';
import ButtonTab from './ButtonTab';
import TableRow from './TableRow';

export default function TransactionContent() {
     const [datas, setData] = useState([]);
     const [tab,setTab] = useState('all')
     const [total, setTotal] = useState(0);
     


     const getMemberOverviewApi = useCallback( async (status) => {
        const response = await getMemberTransactions(status);
        

        if (response.error) {
            toast.error(response.msessage);
        } else {
            setData(response.data.data);
            setTotal(response.data.total);
            
           
        } 
     },[])
    useEffect( () => {
        getMemberOverviewApi('all')
        
    }, []);
       const IMG = process.env.NEXT_PUBLIC_IMG;


const onTabClick = (value)=>{
    setTab(value )
     getMemberOverviewApi(value)
}

    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                    My Transactions
                </h2>
                <div className="mb-30">
                    <p className="text-lg color-palette-2 mb-12">
                        You’ve spent
                    </p>
                    <h3 className="text-5xl fw-medium color-palette-1">
                      <NumberFormat
                            value={total}
                            prefix="Rp. "
                            displayType="text"
                            thousandSeparator="."
                            decimalSeparator=","
                        />
                    </h3>
                </div>
                <div className="row mt-30 mb-20">
                    <div className="col-lg-12 col-12 main-content">
                        <div id="list_status_title">
                            <ButtonTab onClick={()=> onTabClick('all')} label="All Trx" active={tab === 'all'} />
                            <ButtonTab onClick={()=> onTabClick('success')} label="Success" active={tab === 'success'}/>
                            <ButtonTab onClick={()=> onTabClick('pending')} label="Pending" active={tab === 'pending'}  />
                            <ButtonTab onClick={()=> onTabClick('failed')} label="Failed" active={tab === 'failed'} />
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
                                <th className="" scope="col">
                                    Game
                                </th>
                                <th scope="col">Item</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </thead>
                            <tbody id="list_status_item">
                                {datas.map((data) => {
                                    const image = `${IMG}/${data.historyVoucherTopup.thumbnail}`;
                                    return ( <TableRow
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
                                                id={data._id}
                                            />
                                
                                          
                                )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
function setData(data: any) {
    throw new Error('Function not implemented.');
}

