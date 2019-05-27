import React from 'react'
import { Container, Title } from '../../components'
import  VariantsContainer from './VariantsContainer'
import Gallery from "./Gallery"
import Description from './Description'
import { css, Global } from '@emotion/core'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
    }
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5c6c3a92320000e83bbef971')
      .then(response => {
        return response.json()
      })
      .then(json => {
        let product = {}
        product.title = json.product.title
        product.description = json.product.body_html
        product.images = json.product.images
        product.variants = json.product.variants

        this.setState({ product })
      })
  }

  render(){
    return(
      <Container>
        <Global
          styles={css`
        body {
          margin: 0 !important;
        }
      `}/>
        <Title>{this.state.product.title}</Title>
        <VariantsContainer
          variants={this.state.product.variants}
          productName={this.state.product.title}/>
        <Gallery images={this.state.product.images}/>
        <Description body={this.state.product.description}/>
      </Container>
    )
  }
}

export default Main