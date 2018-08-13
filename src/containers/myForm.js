import React from 'react'
import { connect } from 'react-redux'
import { Container, Form, Button } from 'semantic-ui-react'

import formActions from '../store/formActions'
import { formSelectors } from '../store/formReducers'

class MyForm extends React.Component {
  handleChange = (e, { name, value }) => {
    if (typeof value === 'string') value = value.toUpperCase()
    this.props.formUpd(name, value)
  }

  handleSubmit = () => {
    const { search, depth } = this.props
    const formData = { search, depth }

    // if nothing is going to be done, leave
    if (formData.search === '' || formData.depth === 0) return
    this.props.formSbm(formData)
    // this.props.getObjs()
  }

  render() {
    const { search, depth, loading } = this.props
    return (
      <Container>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              name="search"
              label="Search"
              placeholder="Search"
              value={search}
              onChange={this.handleChange}
            />
            <Form.Input
              name="depth"
              type="number"
              label="Depth"
              value={depth}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            content="Search"
            icon="search"
            loading={loading}
            onClick={this.handleSubmit}
          />
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: formSelectors.search(state),
    depth: formSelectors.depth(state),
    loading: formSelectors.loading(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formUpd: (name, value) => dispatch(formActions.formUpd(name, value)),
    formSbm: formData => dispatch(formActions.formSbm(formData))
    // getObjs: () => dispatch(actions.getObjs())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyForm)
