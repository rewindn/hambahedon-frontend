import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getMemberOverview } from '../../../services/player';
import TopUpList from '../../tissue/TopUpList';

export default function TopUpCategories() {
    const [count, setCount] = useState([]);
    const [data, setData] = useState([]);

    useEffect(async () => {
        const response = await getMemberOverview();
     

        if (response.error) {
            toast.error(response.msessage);
        } else {
          
            setCount(response.data.count);
            setData(response.data.data);
        }
    }, []);
    return count.map((item) => {
        return (
            <TopUpList image={item.name} price={item.value}>
                {item.name}
            </TopUpList>
        );
    });
}
