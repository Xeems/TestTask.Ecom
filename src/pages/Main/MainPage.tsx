import ProductCard from '../../components/ProductCard'
import SearchBar from '../../components/SearchBar'
import { useState } from 'react'
import { useProductSearch } from '../../hooks/useProductSearch'

export default function MainPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const { filteredProducts } = useProductSearch({ search: searchQuery })

    return (
        <main className="flex w-full flex-col items-center bg-gray-50 p-6">
            <h1 className="text-3xl font-medium">Товары</h1>
            <div className="flex w-full flex-col gap-6 p-6 lg:max-w-3xl">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {filteredProducts.map((product) => {
                        return <ProductCard {...product} key={product.id} />
                    })}
                </div>
            </div>
        </main>
    )
}
