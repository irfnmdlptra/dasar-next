export default function Home() {
    return (
        <>
        <Button desc="NAMA"/>
        <Button desc="NAMA"/>
        </>
    )
}

const Button = (props) => {
    return <button>{props.desc}</button>
}