import { Link } from "react-router-dom";
import Header from "../components/atoms/Header";
import ListStudent from "../components/molecules/ListStudent";

function Home(){
    const listStudent = [
        {
            id: 1,
            name: "Dario",
        },{
            id:2,
            name:"Manuel",
        },{
            id:3,
            name: "Christian",
        },{
            id:4,
            name: "Martin"
        },{
            id:5,
            name: "Rocio"
        }
    ];
    return (
        <>
            <Header/>
            <ListStudent listStudent={listStudent}></ListStudent>
            <Link to="/login">Iniciar sesión</Link>
            
        </>
    )
}

export default Home;