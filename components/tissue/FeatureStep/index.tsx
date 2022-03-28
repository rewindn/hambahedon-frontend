/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
interface StepProps {
    icon: "step1" | "step2" | "step3";
    tittle: string;
    desc1: string;
    desc2: string;
}
export default function FeatureStep(props: StepProps) {
    const { icon, tittle, desc1, desc2 } = props;
    return (
        <div className="col-lg-4">
            <div className="card feature-card border-0">
                <img
                    className="mb-30"
                    src={`/icon/${icon}.svg`}
                    width={80}
                    alt="icon step"
                    height={80}
                />
                <p className="fw-semibold text-2xl mb-2 color-palette-1">
                    {tittle}
                </p>
                <p className="text-lg color-palette-1 mb-0">
                    {desc1}
                    <br />
                    {desc2}
                </p>
            </div>
        </div>
    );
}
