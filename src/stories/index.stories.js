import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import { AddButton, DropdownContainer, ColorCircle, ColorCircleContainer,
  Label, Title } from "../components/index"
import { colors } from '../styles'

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('Add to Bag Button', () => (
    <AddButton>Add to Bag</AddButton>
  ))
  .add('Dropdown', () => (
    <DropdownContainer title="Band Size">
      <option>1</option>
      <option>2</option>
    </DropdownContainer>
  ))
  .add('Color Circle', () => (
    <ColorCircleContainer>
      <ColorCircle tabindex="1" color={colors.naked1}/>
      <ColorCircle tabindex="2" color={colors.naked2}/>
      <ColorCircle tabindex="3" color={colors.naked3}/>
      <ColorCircle tabindex="4" color={colors.naked4}/>
      <ColorCircle tabindex="5" color={colors.naked5}/>
    </ColorCircleContainer>
  ))
  .add('Label Container', () => (
    <Fragment>
      <Label>Band Size: </Label><Label bold>50</Label>
      <div>
        <Label bold> Details</Label>
      </div>
    </Fragment>
  ))
  .add('Title', () => (
    <Title>24/7 Classic Perfect Coverage Bra</Title>
  ))