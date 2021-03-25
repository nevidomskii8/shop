import { useParams } from "react-router"
import {Footer} from "../../components/Footer/Footer"
import {Header} from "../../components/Header/Header"


export const ClientPage = () => {

    const {nav} = useParams() 

    return (
        <div className="container">
            <Header/>
            ClientPage
            <Footer/>
        </div>
    )
}