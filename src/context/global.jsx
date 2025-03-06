import {useState, useEffect} from 'react';
import {Global as Context} from '.';
import {getAllContacts} from '../service/action/contacts';

function GlobalState({children}) {
    const [userInfo, setUserInfo] = useState({
        id: undefined,
        name: undefined,
        token: undefined,
    });
    const [admContacts, setAdmContacts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [menu, setMenu] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');

    useEffect(() => {
        async function Jobs() {
            const fetchAdmContacts = await getAllContacts();
            setAdmContacts(fetchAdmContacts);
        }

        Jobs();
    }, []);

    const obj = {
        userInfo,
        setUserInfo,
        loader,
        setLoader,
        menu,
        setMenu,
        currentPage,
        setCurrentPage,
        admContacts,
    };

    return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;
