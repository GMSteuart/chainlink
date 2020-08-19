import { connect } from 'components/deviationHistory/react-redux'
import DeviationHistory from './DeviationHistory.component'
import { AppState } from 'components/deviationHistory/state'

const mapStateToProps = (state: AppState) => {
  return {
    answerHistory: state.aggregator.answerHistory,
  }
}

export default connect(mapStateToProps)(DeviationHistory)
