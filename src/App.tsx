import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'

function App() {

	return (
		<>
		{/* Provê o contexto de navegação e sincroniza a UI com a URL do navegador. */}
			<BrowserRouter>
			{/* Navbar e Footer são renderizados em todas as rotas */}
				<Navbar />
				<div className="min-h-[80vh]">
					{/* Routes agrupa e escolhe qual Route renderizar com base na URL */}
					<Routes>
						 {/* Define as rotas e os componentes renderizados para cada path */}
						<Route path="/" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/cadastro" element={<Cadastro />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	)

}

export default App