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
        question: '香りと合わせたいのは？',
        choices: [
            {label: 'ファッション', value: 'fashion'},
            {label: '気分', value: 'mood'}
        ],
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
            {label: '花の香り', value: 'floral'},
            {label: 'セクシーな香り', value: 'musk'},
            {label: 'お菓子の香り', value: 'vanilla'}
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
        question: 'どんな香りが好き？',
        choices: [
            {label: '爽やかな香り', value: 'fresh'},
            {label: '濃厚な香り', value: 'rich'},
            {label: 'どちらでもない', value: 'middle'}
        ],
        result: '',
        text: '',
        url: ''
    },
    111: {
        pageId: 111,
        question: 'どの香りが好き？',
        choices: [
            {label: 'シトラス', value: 'citrus'},
            {label: 'ティー(紅茶)', value: 'tea'},
            {label: 'グリーン', value: 'green'},
            {label: 'ミント', value: 'mint'}
        ],
        result: '',
        text: '',
        url: ''
    },
    112: {
        pageId: 112,
        question: 'どの香りが好き？',
        choices: [
            {label: 'シトラス', value: 'citrus'},
            {label: 'ティー(紅茶)', value: 'tea'}
        ],
        result: '',
        text: '',
        url: ''
    },
    113: {
        pageId: 113,
        question: 'どの香りが好き？',
        choices: [
            {label: 'フローラル', value: 'floral'},
            {label: 'マリン', value: 'marine'}
        ],
        result: '',
        text: '',
        url: ''
    },
    114: {
        pageId: 114,
        question: 'どの香りが好き？',
        choices: [
            {label: 'フルーティー', value: 'fruity'},
            {label: 'フローラル', value: 'floral'},
            {label: '石鹸', value: 'soap'}
        ],
        result: '',
        text: '',
        url: ''
    },
    115: {
        pageId: 115,
        question: 'どの香りが好き？',
        choices: [
            {label: 'フルーティー', value: 'fruity'},
            {label: 'フローラル', value: 'floral'},
            {label: 'マリン', value: 'marine'},
            {label: '石鹸', value: 'soap'}
        ],
        result: '',
        text: '',
        url: ''
    },
    116: {
        pageId: 116,
        question: 'どの香りが好き？',
        choices: [
            {label: 'ウッディー', value: 'woody'},
            {label: 'ムスク', value: 'musk'},
            {label: 'バニラ', value: 'vanilla'}
        ],
        result: '',
        text: '',
        url: ''
    },
    9901: {
        pageId: 9901,
        question: '',
        choices: [],
        result: '「シトラス系メンズ香水」',
        text: 'シトラス系とは、レモンやグレープフルーツなどの柑橘の香りです。/甘さが控えめで軽やかな印象であることが特徴です。',
        url: 'citrus-mens-perfume-genealogy/'
    },
    9902: {
        pageId: 9902,
        question: '',
        choices: [],
        result: '「シトラス系レディース香水」',
        text: 'シトラス系とは、レモンやオレンジなどの柑橘の香りです。/爽やかな香りで、香水初心者でも使いこなしやすいのが特徴です。',
        url: 'citrus-ladies-perfume-genealogy/'
    },
    9903: {
        pageId: 9903,
        question: '',
        choices: [],
        result: '「紅茶系メンズ香水」',
        text: '紅茶系の香りとは「ベルガモット+ジャスミン」の組み合わせです。/上品な香りで、大人っぽく落ち着いた印象を演出できます。',
        url: 'tea-mens-perfume-genealogy/'
    },
    9904: {
        pageId: 9904,
        question: '',
        choices: [],
        result: '「ティー系レディース香水」',
        text: 'グリーンティーの香りは、「東洋の神秘的な香り」と言われています。/その爽やかな香りは今でも万人ウケする香りとして好評です。',
        url: 'greentea-ladies-perfume-genealogy/'
    },
    9905: {
        pageId: 9905,
        question: '',
        choices: [],
        result: '「グリーン系メンズ香水」',
        text: 'グリーン系の香りは、植物の力強さを感じる甘さ控えめの香りです。/清潔感のあるクールな印象に仕上げたい時に向いた香りです。',
        url: 'green-mens-perfume-genealogy/'
    },
    9906: {
        pageId: 9906,
        question: '',
        choices: [],
        result: '「フルーティー系香水」',
        text: 'フルーティー系の香りは、果物の甘さと酸味が楽しめる香りです。/明るさや可愛らしさ、親しみ易さを演出したい時に向いています。',
        url: 'fruity-ladies-perfume-genealogy/'
    },
    9907: {
        pageId: 9907,
        question: '',
        choices: [],
        result: '「ミント系メンズ香水」',
        text: 'ミント系の香りは、メントールのクールで涼しげな香りが特徴です。/優しくすっきりした香りのため、初心者におすすめです。',
        url: 'mint-mens-perfume-genealogy/'
    },
    9908: {
        pageId: 9908,
        question: '',
        choices: [],
        result: '「フローラル系メンズ香水」',
        text: 'フローラル系は、爽やかさと甘さのバランスが良いのが特徴です。/穏やかさや優しさをアピールしやすい香りが多いです。',
        url: 'floral-mens-perfume-genealogy/'
    },
    9909: {
        pageId: 9909,
        question: '',
        choices: [],
        result: '「フローラル系レディース香水」',
        text: 'フローラル系は、爽やかさと甘さのバランスが良い香りの王道です。/幸せな気分に浸りたい時に特におすすめしたい香りです。',
        url: 'floral-ladies-perfume-genealogy/'
    },
    9910: {
        pageId: 9910,
        question: '',
        choices: [],
        result: '「石鹸系レディース香水」',
        text: '石鹸の香りは清潔感があり、フレッシュなイメージを演出できます。/香水が初めての人にもおすすめの香りです。',
        url: 'savon-ladies-perfume-genealogy/'
    },
    9911: {
        pageId: 9911,
        question: '',
        choices: [],
        result: '「マリン系メンズ香水」',
        text: 'マリン系の香りは、みずみずしくてフレッシュな香りが特徴です。/ゆったりした雰囲気を醸し出したい時に向いています。',
        url: 'marine-mens-perfume-genealogy/'
    },
    9912: {
        pageId: 9912,
        question: '',
        choices: [],
        result: '「ウッディー系メンズ香水」',
        text: 'ウッディー系の香りは、木や森を思わせる、ナチュラルな香りです。/大人っぽさを演出したい時に特におすすめです。',
        url: 'woody-mens-perfume-genealogy/'
    },
    9913: {
        pageId: 9913,
        question: '',
        choices: [],
        result: '「ウッディー系レディース香水」',
        text: 'ウッディー系の香水は、木や森を思わせる落ち着いた匂いが特徴です。/知性やクールさ、ナチュラルなイメージをまといたい時に向いているものが多いです。',
        url: 'woody-ladies-perfume-genealogy/'
    },
    9914: {
        pageId: 9914,
        question: '',
        choices: [],
        result: '「ムスク系メンズ香水」',
        text: 'ムスク系の香水は、コクと温かみを感じられる香りが特徴です。/現在は清潔感のある「ホワイトムスク」系の香りがにトレンドです。',
        url: 'musk-mens-perfume-genealogy/'
    },
    9915: {
        pageId: 9915,
        question: '',
        choices: [],
        result: '「ムスク系レディース香水」',
        text: 'ムスク系の香水は、コクと温かみを感じられる香りが特徴です。/大人っぽさやセクシーなイメージをまといたい時におすすめです。',
        url: 'musk-ladies-perfume-genealogy/'
    },
    9916: {
        pageId: 9916,
        question: '',
        choices: [],
        result: '「バニラ系メンズ香水」',
        text: 'バニラ系の香りは、暖かみを感じられる深い甘さが特徴です。/ダンディで包容力のある大人っぽさを演出するのにおすすめです。',
        url: 'vanilla-mens-perfume-genealogy/'
    },
    9917: {
        pageId: 9917,
        question: '',
        choices: [],
        result: '「バニラ系レディース香水」',
        text: 'バニラ系の香水は甘く、温かみのある香りが特徴です。/近年は、甘さを前面に出した香水が流行しており、注目です。',
        url: 'vanilla-ladies-perfume-genealogy/'
    }
}
export const ANSWERS: Answers = {}
export const ANSWER_IDS: AnswerPageIds = {
    citrus_male: 9901,
    citrus_female: 9902,
    citrus_both: 9902,
    tea_male: 9903,
    tea_female: 9904,
    tea_both: 9904,
    green_male: 9905,
    green_both: 9905,
    fruity_female: 9906,
    fruity_both: 9906,
    mint_male: 9907,
    mint_both: 9907,
    floral_male: 9908,
    floral_female: 9909,
    floral_both: 9909,
    soap_female: 9910,
    soap_both: 9910,
    marine_male: 9911,
    marine_both: 9911,
    woody_male: 9912,
    woody_female: 9913,
    woody_both: 9913,
    musk_male: 9914,
    musk_female: 9915,
    musk_both: 9915,
    vanilla_male: 9916,
    vanilla_female: 9917,
    vanilla_both: 9917
}
