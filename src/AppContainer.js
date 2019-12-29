import App from "./App";
import {connect} from "react-redux";
import {changeKeyboardAC, changeTopicAC, checkStatusGameAC, findLetterAC, startNewGameAC} from "./redux/HangmanReducer";

const mapStateToProps = (state) => {
	return {
		topic: state.topic,
		retries: state.retries,
		viewWord: state.viewWord,
		keyboard: state.keyboardData,
		statusGame: state.statusGame
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeTopic: (value) => {
			return dispatch(changeTopicAC(value));
		},
		findLetter: (value) => {
			return dispatch(findLetterAC(value))
		},
		changeKeyboard: (value, status) => {
			return dispatch(changeKeyboardAC(value, status))
		},
		startNewGame: () => {
			return dispatch(startNewGameAC())
		},
		checkStatusGame: () => {
			return dispatch(checkStatusGameAC())
		}
	}
};

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
