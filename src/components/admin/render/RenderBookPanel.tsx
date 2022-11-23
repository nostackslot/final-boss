import { PropsRBookPanel } from "../../../@types/shared-kernel";
import { BookPanel } from "../BookPanel";

export default function RenderBookPanel({admin, setaddroom, setnewbook, rooms}: PropsRBookPanel) {
    return <>
    {admin &&
        <><button className='button' onClick={() => setaddroom(true)}>Добавить комнату </button>
        <p className='blockbooked'> Список брони: </p> <div className="listbooked"><BookPanel setnewbook={setnewbook} rooms={rooms}/></div>
        </>}
        </>
}