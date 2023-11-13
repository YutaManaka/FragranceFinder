/** ラジオボタン設定 */
interface Answer {
    label: string
    value: string
}
interface Page {
    pageId: number
    question: string
    answers: Answer[]
}
type Pages = {
    [key: number]: Page
}
export type {Answer}
export const PAGES: Pages = {
    0: {
        pageId: 0,
        question: '',
        answers: []
    },
    1: {
        pageId: 1,
        question: '探しているのは？',
        answers: [
            {label: '女性用香水', value: 'female'},
            {label: '男性用香水', value: 'male'},
            {label: 'どちらでもよい', value: 'both'}
        ]
    }
}