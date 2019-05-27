import React from 'react'
import { DescriptionContainer, Label, HorizontalRule } from '../../components'

const Description = (props) => (
  <DescriptionContainer>
    <Label bold>Details</Label>
    <HorizontalRule/>
    <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
  </DescriptionContainer>
)

export default Description
