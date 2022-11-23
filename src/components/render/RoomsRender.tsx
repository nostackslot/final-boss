import { useState } from "react"
import { PropsRooms } from "../../@types/shared-kernel";
import { Modal } from "../EventModal"
import Room from "../Room";

function RoomsRender({ rooms, isadmin, setnewbook, roomforbook }: PropsRooms) {
  const [clickid, setClickId] = useState('')

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  
  function Booked(idx: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    let newbook = [...roomforbook];

    newbook.map((room, index) => {
        if (room.id === rooms[idx].id) {
            idx = index;
        }
        return null
    })

    newbook[idx] = { ...newbook[idx], booked: true, nameclient: name, phoneclient: phone }
    setnewbook(newbook)
    setClickId('')
  }

  return rooms.map((room: any, idx: number) => {
    return (<>
      <Room room={room} setid={setClickId} isadmin={isadmin} />
      {room.id === clickid &&
        <Modal active={true} setactive={setClickId} >
          <form>
            <div>
              <p>Бронирование номера: {room.name} <br /> Идентификатор: {room.id} <br /></p>
              <input type="text" value={phone} placeholder="Введите ваш номер" onChange={(e) => setPhone(e.target.value)}></input><br />
              <input type="text" value={name} placeholder="Ваше имя" onChange={(e) => setName(e.target.value)}></input><br />
              <button className='button' onClick={(e) => Booked(idx, e)}>Позвоните мне</button>
            </div>
          </form>
        </Modal>
      }

    </>)
  })

}

export default RoomsRender;


