import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import { AddButton, DropdownContainer, ColorCircle, ColorCircleContainer, Label, Title, Price,
  HorizontalRule, Container, InnerContainer, VerticalGallery,
  PhotoGalleryContainer, BigImageGallery, CarouselGallery } from '../components/index'
import { colors } from '../common'

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
  .add('Price', () => (
    <Price>$68</Price>
  ))
  .add('HorizontalRule', () => (
    <HorizontalRule/>
  ))
  .add('Container', () => (
    <Container>
      <Title>24/7 Classic Perfect Coverage Bra</Title>
      <Price>$68</Price>
      {/* eslint-disable-next-line max-len */}
      <img src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_1000x.jpg"/>
      <InnerContainer display="inline-flex">
        <Label>Color: </Label><Label bold>Naked</Label>
      </InnerContainer>
      <ColorCircleContainer>
        <ColorCircle tabindex="1" color={colors.naked1}/>
        <ColorCircle tabindex="2" color={colors.naked2}/>
        <ColorCircle tabindex="3" color={colors.naked3}/>
        <ColorCircle tabindex="4" color={colors.naked4}/>
        <ColorCircle tabindex="5" color={colors.naked5}/>
      </ColorCircleContainer>
      <InnerContainer display="inline-flex">
        <Label>Stock: </Label><Label bold>20</Label>
      </InnerContainer>
      <InnerContainer display="inline-flex">
        <DropdownContainer title="Band Size">
          <option>1</option>
          <option>2</option>
        </DropdownContainer>
        <DropdownContainer title="Cup Size">
          <option>1</option>
          <option>2</option>
        </DropdownContainer>
      </InnerContainer>
      <AddButton>Add to Bag</AddButton>
      <Label>Details</Label>
      <HorizontalRule/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate veli.</p>
      <ul>
        <li>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi.
        </li>
        <li>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atq exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi.
        </li>
        <li>
          Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </li>
      </ul>

    </Container>
  ))
  .add('Gallery 1440', () => (
    <Container>
      <PhotoGalleryContainer>
        <VerticalGallery>
          {/* eslint-disable-next-line max-len */}
          <img tabIndex="1" src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_100x.jpg"></img>
          {/* eslint-disable-next-line max-len */}
          <img tabIndex="2" src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_100x.jpg"></img>
          {/* eslint-disable-next-line max-len */}
          <img tabIndex="3" src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_100x.jpg"></img>
          {/* eslint-disable-next-line max-len */}
          <img tabIndex="4"  src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_100x.jpg"></img>
          {/* eslint-disable-next-line max-len */}
          <img tabIndex="5" src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_100x.jpg"></img>
        </VerticalGallery>
        {/* eslint-disable-next-line max-len */}
        <BigImageGallery src={"http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_600x.jpg"} />
      </PhotoGalleryContainer>
    </Container>
  ))
  .add('Gallery Carousel', () =>(
    <Container>
      <CarouselGallery>
        {/* eslint-disable-next-line max-len */}
        <img tabIndex="1" src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_600x.jpg"></img>
        {/* eslint-disable-next-line max-len */}
        <img tabIndex="2" src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_600x.jpg"></img>
        {/* eslint-disable-next-line max-len */}
        <img tabIndex="3" src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_600x.jpg"></img>
        {/* eslint-disable-next-line max-len */}
        <img tabIndex="4"  src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_600x.jpg"></img>
        {/* eslint-disable-next-line max-len */}
        <img tabIndex="5" src="http://static.thirdlove.com/frontend-challenge/black-lace-plunge/Black_LacePlunge_Black_LaceCheeky_HYB_NY_2018_03_079_600x.jpg"></img>
      </CarouselGallery>
    </Container>
  ))