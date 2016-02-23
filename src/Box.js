
import React from 'react'
import styles from './styles'

/**
 * Sets padding and width and works independently or as a child of <Flex />.
 */

const Box = ({
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  flex,
  auto,
  col,
  style,
  className,
  ...props
}) => {

  const { breakpoints, scale } = styles

  function w(n) {
    return n ? (n / 12 * 100) + '%' : null
  }

  let width = w(col)

  if (typeof window !== 'undefined') {
    Object.keys(breakpoints).forEach(key => {
      if (props[key] && window.matchMedia(breakpoints[key]).matches) {
        width = w(props[key]) || width
      }
    })
  }

  const sx = Object.assign({}, style, {
    boxSizing: 'border-box',
    flex: auto ? '1 1 auto' : null,
    display: flex ? 'flex' : null,
    padding: p ? scale[p] : null,
    paddingTop:    py ? scale[py] : (pt ? scale[pt] : null),
    paddingBottom: py ? scale[py] : (pb ? scale[pb] : null),
    paddingLeft:   px ? scale[px] : (pl ? scale[pl] : null),
    paddingRight:  px ? scale[px] : (pr ? scale[pr] : null),
    width,
    flexBasis: width
  })

  const cx = className ? `Box ${className}` : 'Box'

  return <div
    {...props}
    style={sx}
    className={cx} />
}

Box.propTypes = {
  /** Sets flex: 1 1 auto */
  auto: React.PropTypes.bool,
  /** Sets display: flex */
  flex: React.PropTypes.bool,
  /** Sets width and flex-basis based on a 12 column grid */
  col: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /** Sets padding based on a scale of 0–4 */
  p: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Sets padding-left and padding-right based on a scale of 0–4 */
  px: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Sets padding-top and padding-bottom based on a scale of 0–4 */
  py: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Sets padding-top based on a scale of 0–4 */
  pt: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Sets padding-bottom based on a scale of 0–4 */
  pb: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Sets padding-left based on a scale of 0–4 */
  pl: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Sets padding-right based on a scale of 0–4 */
  pr: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
}

export default Box
