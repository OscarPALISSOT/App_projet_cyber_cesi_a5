import './App.css'
import Navbar from "./component/Navbar.tsx";
import LoginModal from "./component/LoginModal.tsx";
import RegisterModal from "./component/RegisterModal.tsx";
import {useEffect, useState} from "react";
import setAuthTokenHeader from "./modules/SetToken.ts";
import {IsLogged} from "./modules/IsLogged.ts";

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
        <div className="container pt-4">
            <h1>Hello world</h1>
        </div>
    </>
  )
}

export default App
