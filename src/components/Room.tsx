
export default function Room({ room, setid, isadmin, setedit, remove }: Partial<PropsRoom>) {

    return (
        <li key={room.id} className={isadmin ? "blockroomadm" : "blockroom"}>
        Название: {room.name}<br />
        Сторона: {room.sideworld}<br />
        Спальных мест: {room.desc}<br />
        <img src={room.image} alt={room.id} /><br />
        {isadmin  ? <><button className='button' onClick={() => setedit?.(room.id)}>Изменить</button>
          <button className='button' onClick={() => remove?.(room.id)}>Удалить</button></> :
         <button className='button' onClick={() => setid?.(room.id)}>Забронировать</button>}
        </li>
    )
}