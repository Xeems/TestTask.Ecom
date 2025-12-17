import mockProductsData from '../../lib/mockProducts'
import ProductCard from '../../components/ProductCard'
import { Outlet } from 'react-router'

export default function MainPage() {
    return (
        <main className="flex w-full flex-col items-center bg-gray-50">
            <h1 className="font-medium">Товары</h1>
            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-3xl">
                {mockProductsData.map((product) => {
                    return <ProductCard {...product} key={product.id} />
                })}
            </div>
            <Outlet />
        </main>
    )
}
