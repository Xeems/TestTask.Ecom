import { useParams } from 'react-router'
import mockProductsData from '../../lib/mockProducts'
import Button from '../../components/Button'

export default function ProductPage() {
    const { id } = useParams()

    const product = mockProductsData.find((p) => p.id === id)
    if (!product) return <p>Product not found</p>

    return (
        <main className="flex h-full w-full items-start justify-center text-black">
            <div className="flex w-full flex-col gap-6 p-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-8 lg:p-6">
                <div className="flex items-center justify-center">
                    <img
                        src={`/product-images/${product.image}`}
                        alt={product.title}
                        className="max-w-full self-center object-cover"
                    />
                </div>

                <div className="flex flex-col gap-6 lg:p-8">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold lg:text-3xl">
                            {product.title}
                        </h1>
                        <p className="text-lg text-gray-500">
                            {product.category}
                        </p>
                    </div>

                    <span className="text-2xl font-bold lg:text-3xl">
                        {product.price}₽
                    </span>

                    <Button className="h-12 text-lg font-semibold lg:h-14 lg:text-xl">
                        Купить
                    </Button>
                </div>
                <div className="col-span-2 space-y-3">
                    <h2 className="text-xl font-semibold lg:text-2xl">
                        Описание
                    </h2>
                    <p className="leading-relaxed text-gray-500 lg:text-lg">
                        {product.description}
                    </p>
                </div>
            </div>
        </main>
    )
}
