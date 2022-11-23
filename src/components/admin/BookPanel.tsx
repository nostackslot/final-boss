import { PropsBookPanel } from "../../@types/shared-kernel";

export function BookPanel({setnewbook, rooms}: PropsBookPanel) {


    function unBook(idx: number) {
        let newbook = [...rooms];
        newbook[idx as keyof typeof newbook] = { ...newbook[idx], booked: false, nameclient: null, phoneclient: null }
        setnewbook(newbook)
    }
    return rooms.map((room: any, idx: number) => {
        if(room.booked === true) {
           return <p className="booked">Имя: {room.nameclient} Телефон: {room.phoneclient} 
           <button onClick={() => unBook(idx)}> Разбронировать</button><br/> id: {room.id}</p>
        } 
        return null
    }
)}
