import { PropsModal } from "../@types/shared-kernel";

const Modal = ({ children, active, setactive }: PropsModal) => {
    return (<div className={active ? "modal active" : "modal"} onClick={() => setactive(false)}>
        <div className={active ? "modalcontent active" : "modalcontent"} onClick={e => e.stopPropagation()}>
             {children}
        </div>
    </div>)
}
export { Modal };