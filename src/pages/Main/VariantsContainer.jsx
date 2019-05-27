import React, { Fragment, Component } from 'react'
import * as R from 'ramda'

import {
  AddButton,
  ColorCircle,
  ColorCircleContainer,
  DropdownContainer,
  InnerContainer,
  Label, Price,
  InfoContainer,
} from '../../components'
import { colors } from '../../common'

const VARIANT_KEYS = [ 'naked-1', 'naked-2', 'naked-3', 'naked-4', 'naked-5' ]
const VARIANT_NAMES = [ 'naked1', 'naked2', 'naked3', 'naked4', 'naked5' ]
const MAX_STOCK = 10

class VariantsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedColor: '',
      bandSizes: [],
      cupSizes: [],
      price: '',
      inventoryQuantity: '',
      selectedBandSize: '',
      selectedCupSize: {},
      formattedVariants: []
    }
  }

  pickFields = (variant) => {
    return R.compose(
      R.assoc('band', R.match(/[1-9]\d+/, variant.option2)[0]),
      R.assoc('size', R.match(/[A-Z]/, variant.option2)[0]),
      R.pick(['id', 'price','inventory_quantity'])
      )(variant)
  }

  parseVariants = (nextVariants) => {
    let formattedVariants = { naked1: [], naked2: [], naked3: [], naked4: [], naked5: [] }
    R.map( variant => {
      if(R.gte(variant.inventory_quantity, MAX_STOCK))
      switch (variant.option1) {
        case VARIANT_KEYS[0]:
          formattedVariants.naked1.push(this.pickFields(variant))
          break
        case VARIANT_KEYS[1]:
          formattedVariants.naked2.push(this.pickFields(variant))
          break
        case VARIANT_KEYS[2]:
          formattedVariants.naked3.push(this.pickFields(variant))
          break
        case VARIANT_KEYS[3]:
          formattedVariants.naked4.push(this.pickFields(variant))
          break
        case VARIANT_KEYS[4]:
          formattedVariants.naked5.push(this.pickFields(variant))
          break
      }
    })(nextVariants)
    this.setState({formattedVariants}, () => this.setVariant(VARIANT_NAMES[0], VARIANT_KEYS[0]))
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.variants !== nextProps.variants) {
      this.parseVariants(nextProps.variants)
    }
  }

  convertVariantName = (variantName) => {
    return R.compose(
      R.toLower,
      R.join(''),
      R.split('-')
    )(variantName)
  }

  getAttributeById = (id, attribute) => {
    return R.compose(
      R.prop(attribute),
      R.nth(0),
      R.filter((selectedCupSize) => {
        return id == selectedCupSize.id
      })
    )(this.state.cupSizes)
  }

  getBandSizes = (variant) => {
    return R.compose(
      R.uniq,
      R.pluck('band'),
    )(this.state.formattedVariants[variant])
  }

  getCupSizes = (selectedBandSize, variant) => {
    return R.compose(
      R.map(selectedVariants => {
          return R.pick(['id', 'size', 'price', 'inventory_quantity'], selectedVariants)
      }),
      R.filter((variant) => {
        return variant.band === selectedBandSize
      })
    )(this.state.formattedVariants[variant])
  }

  setVariant = (variantName, variantKey) => {
    let selectedColor =  variantKey.toUpperCase()
    let inventoryQuantity = this.state.formattedVariants[variantName]
      [0].inventory_quantity
    let bandSizes = this.getBandSizes(variantName)
    let selectedBandSize = bandSizes[0]
    let cupSizes = this.getCupSizes(selectedBandSize,variantName)
    let selectedCupSize = cupSizes[0]
    let price = this.state.formattedVariants[variantName][0].price


    this.setState({selectedColor, inventoryQuantity, selectedBandSize, cupSizes, bandSizes,
      selectedCupSize, price})
  }
  getSelectedCupSize = (id) => {
    return R.compose(
    R.nth(0),
      R.filter((selectedCupSize) => {
        return id == selectedCupSize.id
      })
  )(this.state.cupSizes)
  }

  handleChangeCupSize = (e) => {
    let index = e.target.selectedIndex
    let optionElement = e.target.childNodes[index]
    let id =  optionElement.getAttribute('id')
    let price = this.getAttributeById(id, 'price')
    let inventoryQuantity = this.getAttributeById(id, 'inventory_quantity')
    let selectedCupSize = this.getSelectedCupSize(id)

    this.setState({price, inventoryQuantity, selectedCupSize})
  }

  handleChangeBandSize = (e) => {

    let cupSizes = this.getCupSizes(e.target.value, this.convertVariantName(this.state.selectedColor))
    let price = cupSizes[0].price
    let inventoryQuantity = cupSizes[0].inventory_quantity
    let selectedBandSize = e.target.value
    let selectedCupSize = cupSizes[0]
    this.setState({cupSizes, price, inventoryQuantity, selectedBandSize, selectedCupSize})
  }

  addToBag = () => {
    alert(`Added a ${this.props.productName} - ${this.state.selectedBandSize}${this.state.selectedCupSize.size} to the cart`)
  }

  render(){
    return (
      <Fragment>
        <Price> $ {Math.round(this.state.price)}</Price>
        <InfoContainer>
          <InnerContainer display="inline-flex">
            <Label>Color: </Label><Label bold>{this.state.selectedColor}</Label>
          </InnerContainer>
          <ColorCircleContainer>
            {
              VARIANT_KEYS.map((variantName, index) => {
                return (
                  <ColorCircle
                    onClick={() => this.setVariant(VARIANT_NAMES[index], VARIANT_KEYS[index])}
                    key={variantName}
                    tabindex={index}
                    color={colors[VARIANT_NAMES[index]]}/>
                  )
              })
            }
          </ColorCircleContainer>
          <InnerContainer display="inline-flex">
            <Label>Stock: </Label><Label bold>{this.state.inventoryQuantity}</Label>
          </InnerContainer>
          <InnerContainer display="inline-flex">
            <DropdownContainer
              title="Band Size"
              change={this.handleChangeBandSize}
              value={this.state.selectedBandSize}>
              {
                R.map(bandSize => {
                  return (
                    <option
                      key={bandSize+this.convertVariantName(this.state.selectedColor)}
                      value={bandSize}>{bandSize}
                    </option>
                  )
              })(this.state.bandSizes)
              }
            </DropdownContainer>
            <DropdownContainer
              title="Cup Size"
              change={this.handleChangeCupSize}
              value={this.state.selectedCupSize.size}>
              {
                R.map((cupSize) => {
                  return (
                    <option
                    key={cupSize.id}
                    id={cupSize.id}
                    value={cupSize.size}>
                    {cupSize.size}
                  </option>
                  )
                })(this.state.cupSizes)
              }
            </DropdownContainer>
          </InnerContainer>
          <AddButton onClick={this.addToBag}>Add to Bag</AddButton>
        </InfoContainer>
      </Fragment>
    )
  }
}

export default VariantsContainer