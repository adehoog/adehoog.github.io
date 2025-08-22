import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Publications from './components/Publications';

function HomePage() {
  return (
    <>
      <Header></Header>
      <Home></Home>
    </>
  )
}

function ProjectsPage() {
  return (
    <>
      <Header></Header>
      <Projects></Projects>
    </>
  )
}

function PublicationsPage() {
  return (
    <>
      <Header></Header>
      <Publications></Publications>
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<HomePage/>}/>
          <Route path={"/projects"} element={<ProjectsPage/>}/>
          <Route path={"/publications"} element={<PublicationsPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
