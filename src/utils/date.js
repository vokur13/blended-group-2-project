import { formatDistanceToNow } from 'date-fns'

export const DateToNow = (data) => {
    return formatDistanceToNow(new Date(data), { addSuffix: true })
}