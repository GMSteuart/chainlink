import React from 'components/shared/react'
import { Icon, Tooltip } from 'components/shared/antd'
import { TooltipProps } from 'components/shared/antd/lib/tooltip'

const TooltipQuestion: React.FC<TooltipProps> = (props) => {
  return (
    <Tooltip {...props}>
      <Icon type="question-circle" />
    </Tooltip>
  )
}

export default TooltipQuestion
