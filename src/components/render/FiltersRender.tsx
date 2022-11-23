import { useState } from "react";
import { PropsSort } from "../../@types/shared-kernel";

export default function FiltersRender({ setnewrooms, rooms, cleanrooms, setfilter, admin }: PropsSort) {

    const [sort, setSort] = useState<string>('');

    function cleanFilter(cleanrooms: Array<any>) {
        setfilter(false);
        setnewrooms(cleanrooms);
        setSort('');
        (document.querySelector('.sorter') as HTMLSelectElement).selectedIndex = 0o0;
    }

    function sortCityRooms(value: string, cleanrooms: Array<any>) {
        const filtercity = cleanrooms
        setnewrooms(filtercity.filter((room) => room.city === value))
    }

    function sortSideRooms(value: string, cleanrooms: Array<any>) {
        const filterside = cleanrooms
        setnewrooms(filterside.filter((room) => room.sideworld === value))
    }

    function viewBook() {
        const bookedrooms = cleanrooms
        setnewrooms(bookedrooms.filter((room) => room.booked === true))
    }

    return <>
        <div>Сортировать по <select className="sorter" onClick={() => setfilter(true)} onChange={(e) => setSort(e.target.value)}>
            <option value=""> </option>
            {admin && <option value="book">Бронь</option>}
            <option value="city">Столицам</option>
            <option value="side">Сторонам</option>
        </select></div>
        {sort === 'city' && (<div >Выберите город: <select className="city" onChange={(e) => sortCityRooms(e.target.value, cleanrooms)}>
            <option value=""> </option>
            <option value="washington">Washington</option>
            <option value="moscow">Moscow</option>
        </select></div>)}
        {sort === 'side' && (<div>Выберите cторону: <select className="side" onChange={(e) => sortSideRooms(e.target.value, cleanrooms)}>
            <option value=""> </option>
            <option value="northeast">northeast</option>
            <option value="west">west</option>
        </select></div>)}
        {sort === 'book' && <button className='button' onClick={viewBook}>Показать</button>}
        {sort !== '' && <button className='button' onClick={() => cleanFilter(cleanrooms)}>Cброс</button>}
    </>
}
