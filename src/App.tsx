import './App.css';

import { useEffect, useState } from 'react';
import { rooms } from './components/BaseRooms';
import RoomsRender from './components/render/RoomsRender';
import RoomsRenderAdmin from './components/admin/AdminPanel';
import AddRoom from './components/admin/AddRoom';
import RenderBookPanel from './components/admin/render/RenderBookPanel';
import FiltersRender from './components/render/FiltersRender';
import Header from './components/render/Header';


function App() {

  const [filter, setFilter] = useState(false);

  const [isadmin, setIsAdmin] = useState(false);
  const [newrooms, setNewRooms] = useState(() => {
    const localrooms = localStorage.getItem("rooms");
    if (localrooms === null) {
      return rooms;
    }
    return JSON.parse(localrooms);
  });
  const [roomSort, setRoomSort] = useState<object>(newrooms)
  const [addRoom, setAddroom] = useState(false);

  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(newrooms));
  }, [newrooms]);


  return (<>
    <div className='App'>
      <div>
        <Header isadmin={isadmin} setisadmin={setIsAdmin} />
        <FiltersRender setnewrooms={setRoomSort} rooms={roomSort} cleanrooms={newrooms} setfilter={setFilter} admin={isadmin}/>
      </div>
      <div>Cписок комнат:</div>
      <div>Всего: {newrooms.length}</div>

      <RenderBookPanel admin={isadmin} setaddroom={setAddroom} setnewbook={setNewRooms} rooms={newrooms} />
      <ul className='listrooms'>

        {addRoom && <AddRoom active={addRoom} setactive={setAddroom} addroom={setNewRooms} rooms={newrooms} />}

        {!isadmin ? <RoomsRender rooms={filter ? roomSort : newrooms} isadmin={isadmin} setnewbook={setNewRooms} roomforbook={newrooms} /> :
          <RoomsRenderAdmin rooms={filter ? roomSort : newrooms} isadmin={isadmin} setnewrooms={setNewRooms} removeroom={setNewRooms} roomforedit={newrooms}/>}
      </ul>
    </div>
  </>);
}

export default App;
