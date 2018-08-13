import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Label } from 'semantic-ui-react'

import { resSelectors } from '../store/resReducers'

class Result extends React.Component {
  createList() {
    const { roots } = this.props
    if (roots.length === 0) return
    return roots.map((node, i) => {
      const { name } = node
      return (
        <Segment raised key={i}>
          <Header size="small">
            {name !== '' && <Label floated="right">{name}</Label>}
          </Header>
        </Segment>
      )
    })
  }
  render() {
    return (
      <div>
        <p>Resulting trees:</p>
        {this.createList()}
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
