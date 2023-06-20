import { useState } from "react";

function Button(props) {
    const [text, setText] = useState(0)
  function stext() {
    setText(text + 1);
  }
  return <button onClick={stext}>{props.desc{text}</button>;
}
export default function Home() {
  return (
    <>
      <Button desc="makan"/>
      <Button desc="minum"/>
    </>
  );
}
