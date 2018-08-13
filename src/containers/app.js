import React from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

import MyForm from './myForm'
import Result from './result'

class App extends React.Component {
  render() {
    return (
      <div>
        <MyForm />
        <Divider />
        <Result />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
