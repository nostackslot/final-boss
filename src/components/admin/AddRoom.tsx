import { useState } from "react";
import { PropsAddRoom } from "../../@types/shared-kernel";
import { Modal } from "../EventModal";

export default function AddRoom({active, setactive, addroom, rooms}: PropsAddRoom) {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [side, setSide] = useState('');
    const [places, setPlaces] = useState('');

    function addItem(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const newroom = {
            name: name,
            desc: places,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSLm5wWb000h6xMw0PHhlLo9SH6vXvowGIW_iQLwgDgcJoUeelPNSqhPhA-VMth4mn6o&usqp=CAU",
            sideworld: side,
            city: city,
            id: crypto.randomUUID(),
            booked: false,
            nameclient: null,
            phoneclient: null
          };
        addroom([newroom, ...rooms])
        setactive(false)
    }

    return (
        <Modal active={active} setactive={setactive}>
            <form onSubmit={() => console.log('yo')}>
                <div>
                    <p>Добавить новую комнату <br /> Заполните поля:  <br /></p>
                    <input type="text" placeholder="Имя команты" onChange={(e) => setName(e.target.value)}></input><br />
                    <div >Выберите город: <select className="city" onChange={(e) => setCity(e.target.value)}>
                        <option value=""> </option>
                        <option value="washington">Washington</option>
                        <option value="moscow">Moscow</option>
                    </select></div>
                    <div>Выберите cторону: <select className="side" onChange={(e) => setSide(e.target.value)}>
                        <option value=""> </option>
                        <option value="northeast">northeast</option>
                        <option value="west">west</option>
                    </select></div><br />
                    <input type="text" placeholder="Спальных мест" onChange={(e) => setPlaces(e.target.value)}></input><br />
                    <button type="submit" className='button' onClick={(e) => addItem(e)}>Добавить</button>
                </div>
            </form>
        </Modal>
    )
}