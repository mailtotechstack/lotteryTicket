export default function Button({text="Buy", clkFunc}){
    return <button onClick={clkFunc}>{text}</button>
}