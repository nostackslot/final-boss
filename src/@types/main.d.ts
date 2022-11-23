interface Window {
    ethereum: ExternalProvider
}

interface PropsRoom {
    room: any,
    setid: React.Dispatch<React.SetStateAction<string>>,
    isadmin: boolean,
    setedit: React.Dispatch<React.SetStateAction<string>>,
    remove: (id: number) => void
}