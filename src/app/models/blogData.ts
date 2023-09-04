import { TopicData } from "./topicData"

export interface BlogData {
    id: number
    title: string
    description: string
    topics: TopicData[]
    content: string
    author: string
    date: Date
}