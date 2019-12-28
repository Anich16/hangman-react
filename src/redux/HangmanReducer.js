const CHANGE_TOPIC = 'CHANGE_TOPIC';
const FIND_LETTER = 'FIND_LETTER';

const initialState = {
	wordsTopics: {
		wordsFoodArr: ['chicken', 'sausages', 'margarine', 'yoghurt', 'blackberry', 'blackcurrant', 'blueberry', 'grapefruit',
			'strawberry', 'baguette', 'marmalade', 'spaghetti', 'artichoke', 'broccoli', 'tomatoes', 'potatoes', 'chocolate'],
		wordsFurnitureArr: ['armchair', 'fauteuil', 'footstool', 'hammock', 'headboard', 'nightstand', 'wardrobe'],
		wordsAnimalsArr: ['alligator', 'chimpanzee', 'crocodile', 'elephant', 'giraffe', 'hamster', 'hippopotamus', 'kangaroo', 'monkey',
			'scorpion', 'squirrel', 'zebra']
	},
	topic: 'wordsFoodArr',
	retries: 5,
	word: ['c', 'h', 'i', 'c', 'k', 'e', 'n'],
	viewWord: ['', '', '', '', '', '', ''],
	keyboardData: [
		[ {value: 'q', status: false}, {value: 'w', status: false},
			{value: 'e', status: false},{value: 'r', status: false},
			{value: 't', status: false}, {value: 'y', status: false},
			{value: 'u', status: false}, {value: 'i', status: false},
			{value: 'o', status: false}, {value: 'p', status: false}],
		[ {value: 'a', status: false},{value: 's', status: false},
            {value: 'd', status: false}, {value: 'f', status: false},
            {value: 'g', status: false}, {value: 'h', status: false},
            {value: 'j', status: false}, {value: 'k', status: false},
            {value: 'l', status: false}],
		[ {value: 'z', status: false}, {value: 'x', status: false},
            {value: 'c', status: false}, {value: 'v', status: false},
            {value: 'b', status: false}, {value: 'n', status: false},
            {value: 'm', status: false}]
	]
};

const HangmanReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_TOPIC: {
			let wordIndex = Math.floor(Math.random() * state.wordsTopics[action.value].length);
			let newWord = state.wordsTopics[action.value][wordIndex].split('');
			let newViewWord = newWord.map(el => {
				return el = ''
			});
			return {...state, topic: action.value, word: newWord, viewWord: newViewWord}
		}
		case FIND_LETTER: {
			let status = state.word.find(el => el === action.value);
			if (status) {
				let newViewWord = state.word.map(el => {
					if (el === action.value) {
						return el;
					} else {
						return ''
					}
				});
				return {...state, viewWord: newViewWord}
			} else {
				return {...state, retries: state.retries - 1}
			}
		}
		default:
			return state;
	}
};

export default HangmanReducer;

export const changeTopicAC = (value) => ({type: CHANGE_TOPIC, value});
export const findLetterAC = (value) => ({type: FIND_LETTER, value});

