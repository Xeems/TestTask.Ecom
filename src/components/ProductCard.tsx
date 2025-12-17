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
        <div className="flex w-60 flex-col items-center gap-y-4 rounded-xl border border-solid border-gray-200 bg-white p-4">
            <img
                src={`/product-images/${image}`}
                className="w-full object-cover"
            />

            <div className="flex w-full flex-col items-start">
                <p className="text-sm font-normal text-gray-500">{category}</p>
                <p className="text-md line-clamp-1 text-start font-medium text-black">
                    {title}
                </p>
                <p className="text-sm font-bold text-black">{price}₽</p>
            </div>

            <Button className="w-full" onClick={handlePoductClick}>
                Add to cart
            </Button>
        </div>
    )
}
