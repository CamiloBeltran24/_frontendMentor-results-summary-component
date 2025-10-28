interface buttonProps {
    label: String,
}

export const Button = ({ label } : buttonProps) => {
    return(
        <>
            <button>{ label }</button>
        </>
    )
}