import Form from "./Components/Form"
import FrontPage from "./Components/FrontPage"
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />}/>
          <Route path="/form" element={<Form />}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
