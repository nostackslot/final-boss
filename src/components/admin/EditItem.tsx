import { PropsEdit } from "../../@types/shared-kernel";
import { Modal } from "../EventModal";


export default function EditItem({ 
    setactive, 
    idx, 
    edititem, 
    room, 
    setname,
    setside,
    setcity,
    setdesc,
    setbook }: PropsEdit) {


    return <Modal active={true} setactive={setactive}>
        <form onSubmit={(e) => edititem(idx, e)}>
            <div>
                <p>Изменение номера: {room.name} <br /> Идентификатор: {room.id} <br /></p>
                <input type="text" name='name' defaultValue={room.name} placeholder="Название" onChange={(e) => setname(e.target.value)}></input><br />
                <label>Сторона:
                    <select defaultValue={room.sideworld} name='side' className="side" onChange={(e) => setside(e.target.value)}>
                        <option value=""> </option>
                        <option value="northeast">northeast</option>
                        <option value="west">west</option>
                    </select>
                </label><br />
                <label>Город:
                    <select defaultValue={room.city} name='city' className="city" onChange={(e) => setcity(e.target.value)}>
                        <option value=""> </option>
                        <option value="washington">Washington</option>
                        <option value="moscow">Moscow</option>
                    </select>
                </label><br />
                <label >Спальных мест:
                    <input type="text" defaultValue={room.desc} name='desc' onChange={(e) => setdesc(e.target.value)}></input>
                </label><br />

                <label >Состояние брони:<br />
                    <input type="radio" name="booked" value={'true'} defaultChecked={room.booked} onChange={(e) => setbook(eval(e.target.value))} />Забронировано
                </label>
                <label >
                    <input type="radio" name="booked" value={'true'} defaultChecked={!room.booked} onChange={(e) => setbook(eval(e.target.value))} />Нет брони
                </label><br />
                <button className='button' type="submit">Изменить</button>
            </div>
        </form>
    </Modal>
}