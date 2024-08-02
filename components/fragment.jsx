import { useState } from "react"
import { Container, Button, Body } from "./fragment-style"
export default function Terserah() {
const [lamp, setLamp] = useState(false)
const handleLamp = () => {
    setLamp(lamp === true ? false : true)
}
    return(
 <>
 <Body> <Container ChangeBg={lamp}> 
    <Button onClick={handleLamp} ChangeCT={lamp}>{lamp === false ? "turu" : "tangi"}</Button>
 </Container></Body>

 </>)
}