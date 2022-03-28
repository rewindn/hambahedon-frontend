import Image from 'next/image';
import Link from 'next/link';

interface GameList {
    id: string;
    image: string;
    gamename: string;
    type: string;
}
export default function index(props: GameList) {
    // eslint-disable-next-line object-curly-newline
    const { image, gamename, type, id } = props;
    return (
        <div className="featured-game-card position-relative">
            <Link href={`/detail/${id}`}>
                <a href="./src/detail.html">
                    <div className="blur-sharp">
                        <img
                            className="thumb"
                            src={`${image}`}
                            width={205}
                            height={270}
                            alt=""
                        />
                    </div>
                    <div className="cover position-absolute bottom-0 m-32">
                        <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                            <div className="game-icon mx-auto">
                                <Image
                                    src="/icon/gamepad.svg"
                                    width={54}
                                    height={36}
                                    alt="console"
                                />
                            </div>
                            <div>
                                <p className="fw-semibold text-white text-xl m-0">
                                    {gamename}
                                </p>
                                <p className="fw-light text-white m-0">
                                    {type}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}
