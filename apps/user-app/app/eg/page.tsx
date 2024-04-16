"use client"

//@ts-ignore
import {useBalance} from "@repo/store/useBalance"
import React from 'react'

const page = () => {
    const balance = useBalance()
  return (
    <div>
      balance is {balance}
    </div>
  )
}

export default page
