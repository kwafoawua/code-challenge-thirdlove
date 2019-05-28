import React from 'react'
import axios from 'axios'
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
    axios.get('https://www.mocky.io/v2/5c6c3a92320000e83bbef971')
      .then(res => {
        const { title, body_html: description, images, variants } = res.data.product

        this.setState({
          product: {
            title,
            description,
            images,
            variants,
          },
        })
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
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