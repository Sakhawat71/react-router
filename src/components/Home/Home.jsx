import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="text-center my-5  py-5 rounded-xl font-bold text-2xl">Welcome Back</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;