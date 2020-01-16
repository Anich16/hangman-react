const CHANGE_TOPIC = 'CHANGE_TOPIC';
const FIND_LETTER = 'FIND_LETTER';
const CHANGE_KEYBOARD = 'CHANGE_KEYBOARD';
const START_NEW_GAME = 'START_NEW_GAME';
const CHECK_STATUS_GAME = 'CHECK_STATUS_GAME';

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
	],
	statusGame: 'game'
};

const HangmanReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_TOPIC: {
			let topic = action.value ? action.value : state.topic;
			let wordIndex = Math.floor(Math.random() * state.wordsTopics[topic].length);
			let newWord = state.wordsTopics[topic][wordIndex].split('');
			let newViewWord = newWord.map(el => {
				return el = ''
			});
			return {...state, topic: topic, word: newWord, viewWord: newViewWord, retries: 5}
		}
		case FIND_LETTER: {
			let status = state.word.find(el => el === action.value);
			if (status) {
				let newViewWord = checkedViewWord([...state.viewWord], state.word, action.value);
				return {...state, viewWord: newViewWord}
			} else {
				return {...state, retries: state.retries - 1}
			}
		}
		case CHANGE_KEYBOARD: {
            let newKeyboard;
			if (action.status) {
				newKeyboard = state.keyboardData.map(el => {
					el.map(elem => {
						return elem.status = false;
					});
					return el;
				})
			} else {
                newKeyboard = state.keyboardData.map(el => {
                    el.map(elem => {
                        if(elem.value === action.value) {
                            return elem.status = true;
                        } else {
                            return elem;
                        }
                    });
                    return el;
                });
			}
            return {...state, keyboardData: newKeyboard};
		}
		case START_NEW_GAME: {
			return {...state, statusGame: 'game', retries: 5}
        }
		case CHECK_STATUS_GAME: {
			if (!state.retries){
				return {...state, statusGame: 'lose', viewWord: state.word}
			} else if (state.viewWord.indexOf('') < 0) {
				return {...state, statusGame: 'win'}
			} else {
				return {...state};
			}
		}
		default:
			return state;
	}
};

export default HangmanReducer;

export const changeTopicAC = (value) => ({type: CHANGE_TOPIC, value});
export const findLetterAC = (value) => ({type: FIND_LETTER, value});
export const changeKeyboardAC = (value, status) => ({type: CHANGE_KEYBOARD, value, status});
export const startNewGameAC = () => ({type: START_NEW_GAME});
export const checkStatusGameAC = () => ({type: CHECK_STATUS_GAME});


let checkedViewWord = (viewWord, word, value) => {
	let index = word.indexOf(value);
	while(index !== -1) {
		viewWord[index] = value;
		index = word.indexOf(value, index + 1)
	}
	return viewWord;
};