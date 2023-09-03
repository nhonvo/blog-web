export interface Topic {
    id: number
    name: string
}
export interface Blog {
    id: number
    title: string
    description: string
    topics: Topic[]
    content: string
    author: string
    date: Date
}