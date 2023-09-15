import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Inserir from "pages/CadFilmes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Cabecalho />
        <Container>
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
                <Route path='/favoritos' element={<Favoritos />}></Route>
                <Route path='/inserir' element={<Inserir/>}></Route>
            </Routes>
        </Container>
        <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;