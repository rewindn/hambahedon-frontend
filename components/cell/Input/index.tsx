/* eslint-disable react/jsx-props-no-spreading */
interface InputProps {
    title: string;
}

export default function Input(props: InputProps) {
    const { title, ...nativeProps } = props;
    return (
        <>
            <label
                htmlFor="name"
                className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
                {title}
            </label>
            <input
                type="text"
                className="form-control rounded-pill text-lg"
                id="name"
                name="name"
                aria-describedby="name"
                placeholder="Enter your name"
                {...nativeProps}
            />
        </>
    );
}
