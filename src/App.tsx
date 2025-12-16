import { Route, Routes, useLocation } from 'react-router'
import MainPage from './pages/Main/MainPage'
import ProductPage from './pages/Product/ProductPage'
import ProductModal from './pages/Product/ProductModal'

function App() {
    const location = useLocation()
    const { state } = location

    return (
        <>
            <Routes location={state?.background || location}>
                <Route path="/">
                    <Route index element={<MainPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                </Route>
            </Routes>

            {state?.background && (
                <Routes>
                    <Route path="/products/:id" element={<ProductModal />} />
                </Routes>
            )}
        </>
    )
}

export default App

