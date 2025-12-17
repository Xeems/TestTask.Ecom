import { useLocation, useNavigate } from 'react-router'
import type { ProductType } from '../types/ProductType'
import Button from './Button'

export default function ProductCard({
    id,
    title,
    price,
    image,
    category,
}: ProductType) {
    const navigate = useNavigate()
    const location = useLocation()

    function handlePoductClick() {
        navigate(`/products/${id}`, {
            state: { background: location },
        })
    }

    return (
        <div className="flex flex-col items-center justify-between gap-y-4 rounded-xl border border-solid border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg">
            <div className="flex h-52 items-center justify-center overflow-hidden">
                <img
                    src={`/product-images/${image}`}
                    alt={title}
                    className="h-full w-full bg-transparent object-contain"
                />
            </div>

            <div className="w-full space-y-4">
                <div className="flex w-full flex-col items-start">
                    <p className="text-sm font-normal text-gray-500">
                        {category}
                    </p>
                    <p className="text-md line-clamp-1 text-start font-medium text-black">
                        {title}
                    </p>
                    <p className="text-sm font-bold text-black">{price}₽</p>
                </div>

                <Button className="w-full" onClick={handlePoductClick}>
                    Добавить в корзину
                </Button>
            </div>
        </div>
    )
}
