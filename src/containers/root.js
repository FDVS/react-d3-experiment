import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Label } from 'semantic-ui-react'

// import { resSelectors } from '../store/resReducers'

/* This component recieves a root element and sends the props down to D3 */
class Root extends React.Component {
  render() {
    const { root, key } = this.props
    return (
      <Segment raised key={key}>
        <Header size="small">
          {root.name !== '' && <Label floated="right">{root.name}</Label>}
        </Header>
        <svg />
      </Segment>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
