import { SyntheticEvent, useState } from "react";
import { PropsAdmin } from "../../@types/shared-kernel";
import Room from "../Room";
import EditItem from "./EditItem";

function RoomsRenderAdmin({ rooms, isadmin, setnewrooms, removeroom, roomforedit }: PropsAdmin) {

  const [edit, setEdit] = useState('');
  const [name, setName] = useState('');
  const [side, setSide] = useState('');
  const [city, setCity] = useState('');
  const [desc, setDesc] = useState('');
  const [book, setBook] = useState('');

  function removeItem(id: number) {
    removeroom(roomforedit.filter((room: any) => room.id !== id));
  }

  async function editItem(idx: string, e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    //e.stopPropagation()
    const oldname = (document.getElementsByName("name")[0] as HTMLInputElement).value;
    const oldside = (document.getElementsByName("side")[0] as HTMLInputElement).value;
    const oldcity = (document.getElementsByName("city")[0] as HTMLInputElement).value;
    const olddesc = (document.getElementsByName("desc")[0] as HTMLInputElement).value;

    let newitems = [...roomforedit];

    newitems.map((room, index) => {
      if (room.id === rooms[idx].id) {
        idx = index.toString();
      }
      return null
    })
    newitems[idx as keyof typeof newitems] = {
      ...newitems[idx as keyof typeof newitems],
      name: name === '' ? oldname : name,
      sideworld: side === '' ? oldside : side,
      city: city === '' ? oldcity : city,
      desc: desc === '' ? olddesc : desc,
      booked: book === '' ? newitems[idx as keyof typeof newitems].booked : book
    }
    setnewrooms(newitems)
    setEdit('')
  }

  return rooms.map((room: any, idx: string) => {
    return (
      <>
        <Room room={room} setedit={setEdit} remove={removeItem} isadmin={isadmin} />

        {room.id === edit &&
        <EditItem 
        setactive={setEdit} 
        idx={idx} 
        edititem={editItem} 
        room={room} 
        setname={setName} 
        setside={setSide} 
        setcity={setCity} 
        setdesc={setDesc} 
        setbook={setBook} /> 
        }
      </>)
  })
}

export default RoomsRenderAdmin;
