import { Route,Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Search } from "../pages/search"
import { Details } from "../pages/detail"
import { Bookmark } from "../pages/bookmark"
function MainRoute(){

    return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/bookmark" element={<Bookmark/>}/>
      </Routes>
    )
}
export {MainRoute}