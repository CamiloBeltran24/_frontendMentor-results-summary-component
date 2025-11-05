interface buttonProps {
    label: String,
}

export const Button = ({ label } : buttonProps) => {
    return(
        <>
            <button className="text-preset-5__bold" type="button">{ label }</button>
        </>
    )
}