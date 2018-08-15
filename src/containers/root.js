import React from 'react'
import { connect } from 'react-redux'
import { Divider, Segment, Header, Label } from 'semantic-ui-react'

import { rootSelectors } from '../store/rootReducers'

/* This component recieves a root element and sends the props down to D3 */
class Root extends React.Component {
  render() {
    const { root, key, tree } = this.props
    return (
      <Segment raised key={key}>
        <Header size="small">
          {root.name !== '' && <Label floated="right">{root.name}</Label>}
        </Header>
        <pre>{JSON.stringify(tree, null, 2)}</pre>
        <svg />
      </Segment>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('stateRoot:', state)
  return {
    tree: rootSelectors.tree(state, props)
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
