import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(0);

  function tambah() {
    setState(state + 1);
  }
  return <>

<h1>{state}!</h1>;
<button onClick={tambah}></button>

  </>
  

}
