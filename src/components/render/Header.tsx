import { useState } from "react";
import { PropsHeader } from "../../@types/shared-kernel";
import Auth from "../Auth";


export default function Header({isadmin, setisadmin}: PropsHeader) {
    const [auth, setAuth] = useState<boolean>(false)
    const [account, setAccount] = useState<string>("");

    return <>
        <div>
            {account !== "" ? <div className="admin">Вы авторизованы:<br/> {account}</div> : null}
            
            <h1 className='name' onClick={() => (document.getElementsByClassName("name")[0] as HTMLElement).hidden = true}>Hostel Mostel</h1>
            {!isadmin ? <button className='button' onClick={() => setAuth(true)}>Админ панель</button> :
                <button className='button' onClick={() => {
                    setisadmin(false); (document.getElementsByClassName("name")[0] as HTMLElement).hidden = false;
                    setAccount("")
                }}>Домой</button>}
            <Auth active={auth} setactive={setAuth} setadmin={setisadmin} setacc={setAccount} />
        </div>

    </>
}