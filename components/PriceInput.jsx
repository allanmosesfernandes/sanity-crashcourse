import React from 'react'
import {TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'

export default function CustomPriceInput(props) {
  const {elementProps, onChange, value = ''} = props

  const handleChange = (event) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set(Number(nextValue)) : unset())
  }

//   const FormatMoney = Intl.NumberFormat('en_GB', {
//     style: 'currency',
//     currency: 'GBP',
//   }).format;


  return (
    <>
      <h5>Price - {`${(value / 100).toFixed(2)}£`}</h5>
      <TextInput {...elementProps} onChange={handleChange} value={Number(value)} />
    </>
  )
}
