import { useState, useMemo, useEffect } from 'react'
import getProductsData from '../lib/getProductsData'

type useProductSearchType = {
    search: string
}

export function useProductSearch({ search = '' }: useProductSearchType) {
    const [debouncedQuery, setDebouncedQuery] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(search)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [search])

    const filteredProducts = useMemo(() => {
        const query = debouncedQuery.toLowerCase().trim()

        return getProductsData(query)
    }, [debouncedQuery])

    return {
        filteredProducts,
    }
}
