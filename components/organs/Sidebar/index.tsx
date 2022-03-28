import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

interface SideBarProps {
    ActiveSidebar:
        | 'overview'
        | 'transactions'
        | 'message'
        | 'card'
        | 'reward'
        | 'setting'
        | 'logout';
}
export default function Sidebar(props: SideBarProps) {
    const { ActiveSidebar } = props;

    const router = useRouter();
    const onLogOut = () => {
        Cookies.remove('token');
        router.push('/');
    };
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem
                        tittle="Overview"
                        active={ActiveSidebar === 'overview'}
                        link="member"
                        icon="overview"
                    />
                    <MenuItem
                        tittle="Transactions"
                        active={ActiveSidebar === 'transactions'}
                        link="member/transactions"
                        icon="transactions"
                    />
                    <MenuItem
                        tittle="Message"
                        active={ActiveSidebar === 'message'}
                        link="member"
                        icon="message"
                    />
                    <MenuItem
                        tittle="Card"
                        active={ActiveSidebar === 'card'}
                        link="member"
                        icon="card"
                    />
                    <MenuItem tittle="Rewards" link="member" icon="reward" />
                    <MenuItem
                        tittle="Settings"
                        active={ActiveSidebar === 'setting'}
                        link="member/edit-profile"
                        icon="setting"
                    />
                    <MenuItem
                        tittle="Log Out"
                        active={ActiveSidebar === 'logout'}
                        icon="logout"
                        onClick={onLogOut}
                    />
                </div>
                <Footer />
            </div>
        </section>
    );
}
