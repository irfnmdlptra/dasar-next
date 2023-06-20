function Button(props) {
  function text() {
    return <p>saya</p>;
  }
  return <button onClick={text}>{props.desc}</button>;
}
export default function Home() {
  return (
    <>
      <Button desc="NAMA" />
      <Button desc="NAMA" />
    </>
  );
}
