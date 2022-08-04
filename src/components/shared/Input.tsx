import React from 'react'

interface Icon {
    className?: string
}

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    containerClassName?: string;
    containerInputClassName?: string;
    labelClassName?: string;
    LeftIcon?: React.ComponentType<Icon>;
    RightIcon?: React.ComponentType<Icon>;
    label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        label,
        containerClassName,
        containerInputClassName,
        labelClassName,
        LeftIcon,
        RightIcon,
        className,
        ...inputProps
    } = props
    return (
        <div>Input</div>
    )
})

Input.displayName = "Input";

export default React.memo(Input)