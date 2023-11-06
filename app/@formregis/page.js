import Link from "next/link"

const  FormRegistrHeader= ()=> {
    return (
            <div style={{backgroundColor: "black", minWidth: "100vw",height:"50px",position: "absolute", top: "250px", left:"0"}}>
                <Link href={"/regis"}>Регистрация</Link>
                <br />
                <Link href={"/regis"}>Вход</Link>
            </div>
    )
}
export default FormRegistrHeader