import './App.css'
import Navbar from "./component/Navbar.tsx";
import LoginModal from "./component/LoginModal.tsx";
import RegisterModal from "./component/RegisterModal.tsx";
import {useEffect, useState} from "react";
import setAuthTokenHeader from "./modules/SetToken.ts";
import {IsLogged} from "./modules/IsLogged.ts";
import FrisbeeTable from "./component/FrisbeeTable.tsx";
import CreateFrisbeeModal from "./component/CreateFrisbeeModal.tsx";

function App() {

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setAuthTokenHeader(localStorage.getItem('JWT_auth_KillerBee'));
        IsLogged().then((logged) => {
            setIsLogged(logged as boolean);
        });
    }, []);


  return (
    <>
        <Navbar
            isLogged={isLogged}
            setIsLogged={setIsLogged}
        />
        <LoginModal
            setIsLogged={setIsLogged}
        />
        <RegisterModal/>
        <CreateFrisbeeModal/>
        <div className="container pt-4">
            <button type="button" className="btn btn-outline-warning mb-4" data-bs-toggle="modal" data-bs-target="#create">Ajouter un frisbee</button>
            <FrisbeeTable

            />
        </div>
    </>
  )
}

export default App
