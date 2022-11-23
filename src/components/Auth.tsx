import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { PropsAuth } from "../@types/shared-kernel";
import { Modal } from "./EventModal";


export default function Auth({active, setactive, setadmin, setacc}: PropsAuth) {
    
    const [existMeta, setExistMeta] = useState<boolean>();
    const [account, setAccount] = useState<string>('');


    useEffect(() => {
        const { ethereum } = window;
        const isMeta: boolean = Boolean(ethereum && ethereum.isMetaMask);
        setExistMeta(isMeta)
    }, [existMeta]);


    useEffect(() => {
        if (window.ethereum && existMeta) {
            window.ethereum.on("accountsChanged", (accounts: any) => {
                setAccount(accounts[0])
            })
        }
        if (account != "") {
            setacc(account);
            setadmin(true);

            setTimeout(() => {
                setactive(false);
              }, 900)  
        }
    }, [existMeta, account]);

    async function handleConnectMeta() {
        if (existMeta) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x1" }],
                })
                const accounts = await provider.send("eth_requestAccounts", []);
                setAccount(accounts[0])
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <Modal active={active} setactive={setactive}>
            {existMeta ? <><button className="button" onClick={handleConnectMeta}>Авторизоваться Metamask</button><br /></> : 
            <p>Простите, у вас не обнаружен метамаск, вы можете скачать его <a href='https://metamask.io/' target='_blank'>здесь</a><br/>либо</p>}
            <button className="button" onClick={() => {setadmin(true); setactive(false)}}>Продолжить без Meta</button>
        </Modal>
    )
}
