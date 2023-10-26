import { BrowserRouter, Navigate, Route,  Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import GlobalStyles from "./style/GlobalStyles"
import AppLayout from "./ui/AppLayout"
import ProjectDetail from "./pages/ProjectDetail"
import MySelf from "./pages/MySelf"
import {ModeAndMenuProvider} from "./context/modeAndMenuProvider"



const App = () => {


  return (
    <>
    <ModeAndMenuProvider>

    <GlobalStyles/>
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      <Route index element={<Navigate replace to='portfolio'/>}/>
         <Route path='portfolio' element={<HomePage/>}/>
         <Route path='project/:projectId' element={<ProjectDetail/>}/>
         <Route path='myself' element={<MySelf/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </ModeAndMenuProvider>
   
   </>
  )
}

export default App