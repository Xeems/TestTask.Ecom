import mockdata from './mockdata.json'

export default function getProductsData(query: string) {
    if (query === '') return mockdata
    return mockdata.filter((product) => {
        const titleMatch = product.title.toLowerCase().includes(query)

        return titleMatch
    })
}
