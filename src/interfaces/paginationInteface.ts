export interface IPagination<T> {
    total_items: number
    total_page: number
    prev: string
    next: string
    items: T[]
}