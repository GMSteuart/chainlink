import React from 'components/header/react'
import { Input, Button } from 'components/header/antd'

const GoButton = () => <Button type="link">Go</Button>

const CustomAddress = () => {
  return (
    <>
      <Input
        style={{ width: '220px', marginLeft: '20px' }}
        suffix={<GoButton />}
        placeholder="Contract Address"
      />
    </>
  )
}

export default CustomAddress
