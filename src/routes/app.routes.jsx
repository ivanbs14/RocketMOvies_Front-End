import { Routes, Route } from "react-router-dom";

import { NewMovie } from '../pages/NewMovie';
import { Home } from '../pages/Home';
import { PreviewMovie } from '../pages/PreviewMovie';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/newmovie" element={<NewMovie />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/details/:id" element={<PreviewMovie />}/>

        </Routes>
    )
}