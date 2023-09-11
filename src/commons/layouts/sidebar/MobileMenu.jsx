import { BreakLine } from '@/commons/elements/BreakLine'
import React from 'react'
import { Navigation } from './Navigation'

export const MobileMenu = () => {
  return (
    <div className="">
        <BreakLine className="mt-2"></BreakLine>
        <Navigation></Navigation>
    </div>
  )
}
