import NumberFormat from 'react-number-format';

interface RowProps {
    label: string;
    value: string | number;
    classname?: string;
}

export default function Row(props: Partial<RowProps>) {
    const { label, value, classname } = props;
    return (
        <p className="text-lg color-palette-1 mb-20">
            {label}

            <span className={`purchase-details ${classname}`}>
                {typeof value === 'string' ? (
                    value
                ) : (
                    <NumberFormat
                        value={value}
                        prefix="Rp. "
                        displayType="text"
                        thousandSeparator="."
                        decimalSeparator=","
                    />
                )}
            </span>
        </p>
    );
}
