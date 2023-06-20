export default function Home() {
    return (
        <>
        <Button desc="NAMA"/>
        <Button desc="NAMA"/>
        </>
    )
}

const Button = (props) => {
    return <button onClick={}>{props.desc}</button>
}