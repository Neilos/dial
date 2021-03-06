import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PointerText extends Component {
  static propTypes = {
    pointerColor: PropTypes.string.isRequired,
    textBox: PropTypes.object,
    texts: PropTypes.arrayOf(PropTypes.object),
    xOffset: PropTypes.number.isRequired,
    yOffset: PropTypes.number.isRequired,
  }

  render () {
    const {
      pointerColor,
      textBox,
      texts,
      xOffset,
      yOffset,
    } = this.props

    const tspans = texts.map((text, index) => {
      return (
        <tspan
          key={index}
          fill={text.color || pointerColor}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          letterSpacing={text.letterSpacing}
          textAnchor={text.textAnchor}
        >{text.value}</tspan>
      )
    })

    const textBoxElement = textBox ? <rect
        stroke={textBox.borderColor}
        fill={textBox.fill}
        x={xOffset - textBox.width / 2}
        y={yOffset}
        width={textBox.width}
        height={textBox.height}
      /> :  null

    const maxFontSize = Math.max(...texts.map(text => text.fontSize))

    return (
      <g className="PointerText">
        {textBoxElement}

        <text
          x={xOffset}
          y={yOffset + maxFontSize}
          dominantBaseline="auto"
        >
          {tspans}
        </text>
      </g>
    )
  }
}

export default PointerText
