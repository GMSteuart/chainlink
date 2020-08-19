import { connect } from 'components/answerHistory/react-redux'
import AnswerHistory from './AnswerHistory.component'
import { AppState } from 'components/answerHistory/state'

const mapStateToProps = (state: AppState) => {
  return {
    answerHistory: state.aggregator.answerHistory,
  }
}

export default connect(mapStateToProps)(AnswerHistory)
