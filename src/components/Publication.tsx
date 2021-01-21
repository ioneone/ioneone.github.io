import React, { FunctionComponent } from "react"
import Spacing from "./Spacing"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Button from "./Button"
import styled from "../styled"

interface BlockProps {
  title: string
  description: string
  url: string
}

const Block: FunctionComponent<BlockProps> = props => {
  const { title, description, url } = props
  return (
    <div>
      <h3 sx={{ color: "primary" }}>{title}</h3>
      <div>{description}</div>
      <Spacing height={16} />
      <Button href={url}>See More</Button>
    </div>
  )
}

const Root = styled.div``

const Body = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  @media (max-width: 420px) {
    display: block;
  }
`

const BodyLeft = styled.div``

const BodyRight = styled.div`
  text-align: center;
`

const Image = styled.img`
  width: 256px;
  margin: 0 64px;
  @media (max-width: 420px) {
    margin: 0;
  }
`

export default function Publication() {
  return (
    <Root>
      <h1>📚 Publication</h1>
      <Body>
        <BodyLeft>
          <Block
            title="Getting Started with GraphQL"
            description="Published under Better Programming. Documented the development process 
        of Jflix and taught readers how to use GraphQL (Apollo) with React."
            url="/publication/getting-started-with-graphql"
          />
          <Spacing height={32} />
          <Block
            title="Machine Learning Diary"
            description="Studied machine learning from the beginning for 100 days in a row and recorded my learning process. 
        Explained various ML concepts in my own words to help readers easily understand."
            url="/publication/machine-learning-diary"
          />
        </BodyLeft>
        <Spacing height={64} />
        <BodyRight>
          <Image src="/publication.svg" alt="publication" />
        </BodyRight>
      </Body>
    </Root>
  )
}