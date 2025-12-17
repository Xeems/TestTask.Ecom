import mockdata from './mockdata.json'

export default function getProductById(id: string) {
    return mockdata.find((p) => p.id === id)
}
