import { Metadata } from "next"

type Item = {
    id: number 
    name: string
    price: number
}
const handleSuccess = async (res: Response) => {
    const data = await res.json()
    if (!res.ok) {
        throw new Error(res.statusText)
    }
    return data
}

export async function generateMetadata(): Promise<Metadata> {
    const items: Item[] = await fetch('http://localhost:8080/api/items').then(handleSuccess).catch((e) => {
        throw new Error(e)
    })

    return { title: `${items.map(item => item.name).join(' | ')}`}
}

export default async function ItemsPage() {

    const items: Item[] = await fetch('http://localhost:8080/api/items').then(handleSuccess).catch((e) => {
        throw new Error(e);
    })

    return  (
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.id}>{item.name}</li>
                )
            })}
        </ul>
    )

}