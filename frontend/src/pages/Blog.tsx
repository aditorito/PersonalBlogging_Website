import AppBar from "../components/Appbar";
import Footer from "../components/Footer";
import { useBlog } from "../hooks"
import FullBlogCard from "../components/FullBlogCard";
import { useParams } from "react-router-dom";
import Appbar from "../components/Appbar";
import { SkelatonComponents } from "../components/SkelatonComponents";

export const Blog = () => {
    const { id } = useParams();
    const {loading,Blog} = useBlog({
        id : id  || ""
    });
    if (loading) {
        return <div>
                    <AppBar/>
                    <SkelatonComponents/>
                    <Footer/>


        </div>
    }
    return <div>
        <Appbar/>
        <FullBlogCard blog = {Blog}/>
    </div>
}