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
    91: {
        pageId: 91,
        question: 'どの香りが好き？',
        choices: [
            {label: '花の香り', value: 'flower'},
            {label: 'セクシーな香り', value: 'musk'},
            {label: 'お菓子の香り', value: 'sweets'}
        ]
    },
    92: {
        pageId: 92,
        question: 'どの香りが好き？',
        choices: [
            {label: '柑橘の香り', value: 'citrus'},
            {label: 'フルーツの香り', value: 'fruity'},
            {label: '石鹸の香り', value: 'soap'},
            {label: '海の香り', value: 'marine'}

        ]
    },
    93: {
        pageId: 93,
        question: 'どの香りが好き？',
        choices: [
            {label: '柑橘の香り', value: 'citrus'},
            {label: '森林の香り', value: 'green'},
            {label: '海の香り', value: 'marine'}

        ]
    },
    94: {
        pageId: 94,
        question: 'どの香りが好き？',
        choices: [
            {label: '柑橘の香り', value: 'citrus'},
            {label: 'フルーツの香り', value: 'fruity'},
            {label: '石鹸の香り', value: 'soap'}

        ]
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
export const ANSWERS: Answers = {}
