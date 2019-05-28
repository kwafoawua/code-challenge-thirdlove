import React, { Component } from 'react'
import {
  BigImageGallery,
  CarouselGallery,
  PhotoGalleryContainer,
  VerticalGallery,
} from '../../components'

const PREFIX = 'https://'

class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      width: window.innerWidth,
      selectedImage: '',
      images:[],
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.images !== nextProps.images) {
      this.setState({ images: nextProps.images })
      this.setState({ selectedImage : PREFIX + nextProps.images[0].src600 })
    }
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  handleClickImage = (imageSet) => {
    let selectedImage = PREFIX + imageSet.src600
    this.setState({ selectedImage } )
  }

  render() {
    const isDesktop = this.state.width >= 769

    if (isDesktop) {
      return (
        <PhotoGalleryContainer>
          <VerticalGallery>
            {
              this.state.images.map((imageSet, index) => {
                return (
                  <img
                    src={PREFIX + imageSet.src100}
                    key={imageSet.src100}
                    tabIndex={index}
                    onClick={() => this.handleClickImage(imageSet)}/>
                )
              })
            }
          </VerticalGallery>
          <BigImageGallery src={this.state.selectedImage} />
        </PhotoGalleryContainer>
      )
    } else {
      return (
        <CarouselGallery>
          {
            this.state.images.map((imageSet) => {
              if(this.state.width < 376){
                return(<img src={PREFIX + imageSet.src600} key={imageSet.src600}/>)
              } else {
                return (<img src={PREFIX + imageSet.src1000} key={imageSet.src1000}/>)
              }
            })
          }
        </CarouselGallery>
      )
    }
  }
}

export default Gallery
