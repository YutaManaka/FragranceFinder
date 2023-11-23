/** ラジオボタン設定 */
interface Choice {
    label: string
    value: string
}
interface Page {
    pageId: number
    question: string
    choices: Choice[]
    result: string
    text: string
    url: string
}
type Pages = {
    [key: number]: Page
}
type Answers = {
    [key: number]: string
}
type AnswerPageIds = {
    [key: string]: number
}
export type {Choice, Answers}
export const PAGES: Pages = {
    0: {
        pageId: 0,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    1: {
        pageId: 1,
        question: '探しているのは？',
        choices: [
            {label: '女性用香水', value: 'female'},
            {label: '男性用香水', value: 'male'},
            {label: 'どちらでもよい', value: 'both'}
        ],
        result: '',
        text: '',
        url: ''
    },
    2: {
        pageId: 2,
        question: '探しているのは？',
        choices: [
            {label: '自分の好きな香り', value: 'like'},
            {label: '自分に似合う香り', value: 'match'}
        ],
        result: '',
        text: '',
        url: ''
    },
    3: {
        pageId: 3,
        question: 'ペットと暮らすなら',
        choices: [
            {label: '犬', value: 'dog'},
            {label: '猫', value: 'cat'}
        ],
        result: '',
        text: '',
        url: ''
    },
    4: {
        pageId: 4,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    5: {
        pageId: 5,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    6: {
        pageId: 0,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    7: {
        pageId: 7,
        question: 'どれくらい香水に詳しい？',
        choices: [
            {label: '初心者', value: 'beginner'},
            {label: '上級者', value: 'professional'}
        ],
        result: '',
        text: '',
        url: ''
    },
    8: {
        pageId: 8,
        question: '甘い香りは',
        choices: [
            {label: '好き', value: 'like'},
            {label: '嫌い', value: 'dislike'}
        ],
        result: '',
        text: '',
        url: ''
    },
    91: {
        pageId: 91,
        question: 'どの香りが好き？',
        choices: [
            {label: '花の香り', value: 'flower'},
            {label: 'セクシーな香り', value: 'musk'},
            {label: 'お菓子の香り', value: 'sweets'}
        ],
        result: '',
        text: '',
        url: ''
    },
    92: {
        pageId: 92,
        question: 'どの香りが好き？',
        choices: [
            {label: '柑橘の香り', value: 'citrus'},
            {label: 'フルーツの香り', value: 'fruity'},
            {label: '石鹸の香り', value: 'soap'},
            {label: '海の香り', value: 'marine'}
        ],
        result: '',
        text: '',
        url: ''
    },
    93: {
        pageId: 93,
        question: 'どの香りが好き？',
        choices: [
            {label: '柑橘の香り', value: 'citrus'},
            {label: '森林の香り', value: 'green'},
            {label: '海の香り', value: 'marine'}
        ],
        result: '',
        text: '',
        url: ''
    },
    94: {
        pageId: 94,
        question: 'どの香りが好き？',
        choices: [
            {label: '柑橘の香り', value: 'citrus'},
            {label: 'フルーツの香り', value: 'fruity'},
            {label: '石鹸の香り', value: 'soap'}
        ],
        result: '',
        text: '',
        url: ''
    },
    10: {
        pageId: 10,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    11: {
        pageId: 11,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    9901: {
        pageId: 9901,
        question: '',
        choices: [],
        result: '「柑橘(シトラス)系メンズ香水」',
        text: '柑橘(シトラス)系とは、レモンやグレープフルーツなどの香りです。/甘さが控えめで軽やかな印象であることが特徴です。',
        url: 'citrus-mens-perfume-genealogy/'
    },
    9902: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    9903: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    9904: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    905: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    906: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    907: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    908: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    909: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    910: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    911: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    912: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    913: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    914: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    915: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    916: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    },
    917: {
        pageId: 9,
        question: '',
        choices: [],
        result: '',
        text: '',
        url: ''
    }
}
export const ANSWERS: Answers = {}
export const ANSWER_IDS: AnswerPageIds = {
    citrus_male: 9901,
    citrus_female: 9902,
    citrus_both: 9902,
}
