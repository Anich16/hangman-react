import App from "./App";
import {connect} from "react-redux";
import {changeTopicAC, findLetterAC} from "./redux/HangmanReducer";

const mapStateToProps = (state) => {
	return {
		topic: state.topic,
		retries: state.retries,
		viewWord: state.viewWord,
		keyboard: state.keyboardData
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeTopic: (value) => {
			return dispatch(changeTopicAC(value));
		},
		findLetter: (value) => {
			return dispatch(findLetterAC(value))
		}
	}
};

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
