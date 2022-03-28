import Link from 'next/link';
import cx from 'classnames';

interface ButtonTabProps {
    label: String;
    active?: boolean;
    onClick: () => void;
}
export default function ButtonTab(props: Partial<ButtonTabProps>) {
    const { label, active, onClick } = props;
    const className = cx({
        'btn btn-status rounded-pill text-sm me-3': true,
        'btn-active': active,
    });
    return (
        <button type="button" onClick={onClick} className={className}>
            {label}
        </button>
    );
}
