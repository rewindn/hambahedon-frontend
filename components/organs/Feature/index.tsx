/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
import FeatureStep from "../../tissue/FeatureStep";

export default function Feature() {
    return (
        <section id="feature" className="feature pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
                    It’s Really That
                    <br />
                    Easy to Win the Game
                </h2>
                <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                    <FeatureStep
                        icon="step1"
                        tittle="1. Start"
                        desc1="Pilih salah satu game"
                        desc2="yang ingin kamu top up"
                    />
                    <FeatureStep
                        icon="step2"
                        tittle="2. Fill Up"
                        desc1="Top up sesuai dengan "
                        desc2="nominal yang sudah tersedia"
                    />
                    <FeatureStep
                        icon="step3"
                        tittle="3. Be a Winner"
                        desc1="Siap di gunakan untuk"
                        desc2="Improve permainan kamu"
                    />
                </div>
            </div>
        </section>
    );
}
