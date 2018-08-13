import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Label } from 'semantic-ui-react'

import { resSelectors } from '../store/resReducers'
import Root from './root'

/* This component lists all roots that will get displayed, based on user input */
class Result extends React.Component {
  createList(roots) {
    return roots.map((node, i) => <Root root={node} key={i} />)
  }

  render() {
    const { roots } = this.props
    if (roots.length === 0) return null
    return (
      <div>
        <p>Resulting trees:</p>
        {this.createList(roots)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    roots: resSelectors.roots(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)
