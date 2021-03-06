import React from "react"
import styled from "../styled/index"

const Root = styled.div`
  text-align: center;
`

const CopyRight = styled.h5``

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <Root>
      <CopyRight>©︎ Junhong Wang {currentYear}</CopyRight>
    </Root>
  )
}
