import { Route, Routes } from "react-router-dom";

import VoliPreview from '../voli-preview/voli-preview.component'
import Category from '../category/category.component';


const Voli = () => {
    
    return(
        <Routes>
            <Route index element = {<VoliPreview/>} />
            <Route path = ':category' element = {<Category/>} />
        </Routes>
    )
}

export default Voli;