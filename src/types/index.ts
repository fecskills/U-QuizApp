
export interface IQuestion {
    id: Number
    text: String
    options: {
        id: Number
        label: String
        text: String
        isCorrect: Boolean
    }[]
}