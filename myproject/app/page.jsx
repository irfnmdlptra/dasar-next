const Button = (props) => {
    return <button onClick={onClick}>{props.desc}</button>
}
export default function Home() {
    function text() {
        return <p>saya</p>
    }
    return (
        <>
        <Button onClick={text} desc="NAMA"/>
        <Button desc="NAMA"/>
        </>
    )
}
