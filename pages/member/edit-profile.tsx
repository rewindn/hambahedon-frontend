import Image from 'next/image';
import { useEffect, useState } from 'react';
import Input from '../../components/cell/Input';
import Sidebar from '../../components/organs/Sidebar';
import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { updateProfile } from '../../services/player';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function EditProfile() {
    const router = useRouter();
    const [imagePreview, setImagePreview] = useState(null);
    const [user, setUser] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        avatar: '',
    });

    useEffect(() => {
        const token = Cookie.get('token');
        if (token) {
            const jwtToken = atob(token);
            const payload = jwtDecode(jwtToken);

            setUser(payload.player);
        }
    }, []);
    const IMG = process.env.NEXT_PUBLIC_IMG;

    const avatar = `${IMG}/${user.avatar}`;

    const onSubmit = async () => {
        const data = new FormData();
        data.append('image', user.avatar);
        data.append('name', user.username);
        data.append('phoneNumber', user.phoneNumber);

        const response = await updateProfile(data);
        if (response.error) {
            toast.error(response.error);
        } else {
            toast.success(' berhasil update akun');
            Cookie.remove('token');
            router.push('/sign-in');
        }
    };
    return (
        <>
            <Sidebar ActiveSidebar="setting" />
            <section className="edit-profile overflow-auto">
                <main className="main-wrapper">
                    <div className="ps-lg-0">
                        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                            Settings
                        </h2>
                        <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                            <form action="">
                                <div className="photo d-flex">
                                    <div className="image-upload">
                                        <label htmlFor="avatar">
                                            {imagePreview ? (
                                                <img
                                                    src={imagePreview}
                                                    width="90"
                                                    height="90"
                                                    style={{
                                                        borderRadius: '100%',
                                                    }}
                                                />
                                            ) : (
                                                <img
                                                    src={avatar}
                                                    width="90"
                                                    height="90"
                                                    style={{
                                                        borderRadius: '100%',
                                                    }}
                                                />
                                            )}
                                        </label>
                                        <input
                                            id="avatar"
                                            type="file"
                                            name="avatar"
                                            accept="image/png, image/jpeg"
                                            onChange={(event) => {
                                                const img =
                                                    event.target.files[0];
                                                setImagePreview(
                                                    URL.createObjectURL(img)
                                                );
                                                setUser({
                                                    ...user,
                                                    avatar: img,
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="pt-30">
                                    <Input
                                        title="Email Address"
                                        value={user.email}
                                        disabled
                                    />
                                </div>
                                <div className="pt-30">
                                    <Input
                                        title="Full Name"
                                        value={user.username}
                                        onChange={(event) => {
                                            return setUser({
                                                ...user,
                                                username: event.target.value,
                                            });
                                        }}
                                    />
                                </div>

                                <div className="pt-30">
                                    <Input
                                        title="Phone"
                                        value={user.phoneNumber}
                                        onChange={(event) => {
                                            setUser({
                                                ...user,
                                                phoneNumber: event.target.value,
                                            });
                                        }}
                                    />
                                </div>
                                <div className="button-group d-flex flex-column pt-50">
                                    <button
                                        type="button"
                                        className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                        onClick={onSubmit}
                                    >
                                        Save My Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}
