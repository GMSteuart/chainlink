import { FeedConfig } from 'config'
import React from 'components/aggregatorVis/react'
import { connect } from 'components/aggregatorVis/react-redux'
import { AppState } from 'components/aggregatorVis/state'
import { aggregatorSelectors } from 'components/aggregatorVis/state/ducks/aggregator'
import { Vis } from '../vis'

interface StateProps {
  config: FeedConfig
  latestOraclesState: any
  latestAnswerTimestamp: any
  latestAnswer: any
  pendingAnswerId: any
  oracleAnswers: any
  oracleList: any
  latestRequestTimestamp: any
  minimumAnswers: any
}

const AggregatorVis: React.FC<StateProps> = (props) => <Vis {...props}></Vis>

const mapStateToProps = (state: AppState) => ({
  latestOraclesState: aggregatorSelectors.latestOraclesState(state),
  latestAnswer: state.aggregator.latestAnswer,
  latestAnswerTimestamp: state.aggregator.latestAnswerTimestamp,
  pendingAnswerId: state.aggregator.pendingAnswerId,
  oracleAnswers: state.aggregator.oracleAnswers,
  oracleList: state.aggregator.oracleList,
  latestRequestTimestamp: state.aggregator.latestRequestTimestamp,
  minimumAnswers: state.aggregator.minimumAnswers,
})

export default connect(mapStateToProps)(AggregatorVis)
