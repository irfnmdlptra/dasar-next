import { useState } from "react";

function Button(props) {
    const [text, setText] = useState(0)
  function stext() {
    setText(text + 1);
  }
  return <button onClick={text}>{text}</button>;
}
export default function Home() {
  return (
    <>
      <Button desc="NAMA" />
      <Button desc="NAMA" />
    </>
  );
}
