import { MetaMaskInpageProvider } from "@metamask/providers";

type PropsHeader = {
    isadmin: boolean,
    setisadmin: React.Dispatch<React.SetStateAction<boolean>>
}

type PropsAuth = {
    active: boolean,
    setactive: React.Dispatch<React.SetStateAction<boolean>>,
    setadmin: Dispatch<SetStateAction<boolean>>,
    setacc: React.Dispatch<React.SetStateAction<string>>
}

type PropsSort = {
    setnewrooms: React.Dispatch<React.SetStateAction<object>>,
    rooms: object,
    cleanrooms: Array<any>,
    setfilter: React.Dispatch<React.SetStateAction<boolean>>,
    admin: boolean
}

type PropsRooms = {
    rooms: object | Array,
    isadmin: boolean,
    setnewbook: React.Dispatch<any>,
    roomforbook: object | Array
}

type PropsRBookPanel = {
    admin: boolean,
    setaddroom: React.Dispatch<React.SetStateAction<boolean>>,
    setnewbook: React.Dispatch<any>,
    rooms: any
}

type PropsBookPanel = {
    setnewbook: React.Dispatch<any>,
    rooms: any
}

type PropsAddRoom = {
    active: boolean,
    setactive: React.Dispatch<React.SetStateAction<boolean>>,
    addroom: React.Dispatch<any>,
    rooms: any
}

type PropsModal = {
    children: JSX.Element|JSX.Element[],
    active: boolean,
    setactive: React.Dispatch<React.SetStateAction<boolean>> | Dispatch<SetStateAction<string>>
}

type PropsAdmin = {
    rooms: any,
    isadmin: boolean,
    setnewrooms: React.Dispatch<any>,
    removeroom: React.Dispatch<any>,
    roomforedit: any
}

type PropsEdit = {
    setactive: React.Dispatch<React.SetStateAction<string>>,
    idx: string,
    edititem: (idx: string, e: SyntheticEvent<HTMLFormElement>) => Promise<void>,
    room: any,
    setname: React.Dispatch<React.SetStateAction<string>>,
    setside: React.Dispatch<React.SetStateAction<string>>,
    setcity: React.Dispatch<React.SetStateAction<string>>,
    setdesc: React.Dispatch<React.SetStateAction<string>>,
    setbook: React.Dispatch<React.SetStateAction<string>>
}