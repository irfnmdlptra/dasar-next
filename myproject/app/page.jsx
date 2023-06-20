export default function Home() {
    function text() {
        return <p>saya</p>
    }
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