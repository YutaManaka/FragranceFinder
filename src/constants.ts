/** ラジオボタン設定 */
interface Choice {
    label: string
    value: string
}
interface Page {
    pageId: number
    question: string
    choices: Choice[]
}
type Pages = {
    [key: number]: Page
}
type Answers = {
    [key: number]: string
}
export type {Choice, Answers}
export const PAGES: Pages = {
    0: {
        pageId: 0,
        question: '',
        choices: []
    },
    1: {
        pageId: 1,
        question: '探しているのは？',
        choices: [
            {label: '女性用香水', value: 'female'},
            {label: '男性用香水', value: 'male'},
            {label: 'どちらでもよい', value: 'both'}
        ]
    },
    2: {
        pageId: 2,
        question: '探しているのは？',
        choices: [
            {label: '自分の好きな香り', value: 'like'},
            {label: '自分に似合う香り', value: 'match'}
        ]
    },
    3: {
        pageId: 3,
        question: 'ペットと暮らすなら',
        choices: [
            {label: '犬', value: 'dog'},
            {label: '猫', value: 'cat'}
        ]
    },
    4: {
        pageId: 4,
        question: '',
        choices: []
    },
    5: {
        pageId: 5,
        question: '',
        choices: []
    },
    6: {
        pageId: 0,
        question: '',
        choices: []
    },
    7: {
        pageId: 7,
        question: 'どれくらい香水に詳しい？',
        choices: [
            {label: '初心者', value: 'beginner'},
            {label: '上級者', value: 'professional'}
        ]
    },
    8: {
        pageId: 8,
        question: '甘い香りは',
        choices: [
            {label: '好き', value: 'like'},
            {label: '嫌い', value: 'dislike'}
        ]
    },
    9: {
        pageId: 9,
        question: '',
        choices: []
    },
    10: {
        pageId: 10,
        question: '',
        choices: []
    },
    11: {
        pageId: 11,
        question: '',
        choices: []
    }
}
export const ANSWERS: Answers = {
    1: '',
    2: '',
    3: '',
    4: '',
    51: '',
    52: '',
    61: '',
    62: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: ''
}