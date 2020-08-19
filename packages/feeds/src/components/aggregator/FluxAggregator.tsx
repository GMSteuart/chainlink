import { FluxAggregatorVis } from 'components/aggregator/components/aggregatorVis'
import { AnswerHistory } from 'components/aggregator/components/answerHistory'
import { DeviationHistory } from 'components/aggregator/components/deviationHistory'
import { OracleTable } from 'components/aggregator/components/oracleTable'
import { FeedConfig } from 'config'
import React, { useEffect } from 'components/aggregator/react'
import { connect, MapDispatchToProps } from 'components/aggregator/react-redux'
import { fluxAggregatorOperations } from 'components/aggregator/state/ducks/aggregator'
import { DispatchBinding } from 'components/aggregator/@chainlink/ts-helpers'

interface OwnProps {
  config: FeedConfig
}

interface DispatchProps {
  initContract: DispatchBinding<typeof fluxAggregatorOperations.initContract>
  clearContract: DispatchBinding<typeof fluxAggregatorOperations.clearContract>
}

interface Props extends OwnProps, DispatchProps {}

const Page: React.FC<Props> = ({ initContract, config, clearContract }) => {
  useEffect(() => {
    try {
      initContract(config)
    } catch (error) {
      console.error('Could not initiate contract:', error)
    }
    return clearContract
  }, [initContract, clearContract, config])

  const history = config.history && [
    <AnswerHistory key="answerHistory" config={config} />,
    <DeviationHistory key="deviationHistory" config={config} />,
  ]

  return (
    <>
      <FluxAggregatorVis config={config} />
      {history}
      <OracleTable />
    </>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  initContract: fluxAggregatorOperations.initContract,
  clearContract: fluxAggregatorOperations.clearContract,
}

export default connect(null, mapDispatchToProps)(Page)
