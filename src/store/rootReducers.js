// import { FORM_SBM, FORM_UPD } from './formTypes'
import flat from '../data/flareFlat.json'
import flinks from '../data/flareLinks.json'

import { formSelectors } from '../store/formReducers'

const initialState = {
  tree: {}
}

export default function rootReducer(state = initialState, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {
    default:
      return state
  }
}

const getRelatives = (direction, node, maxDepth) => {
  const filterDirection = l =>
    direction === 'children' ? l.parent === node.name : l.child === node.name
  const mapDirection = l => (direction === 'children' ? l.child : l.parent)

  //Get all the nodes that have links and check if the current node maps to the other side of the link
  const nodes = flat.filter(
    f =>
      flinks
        .filter(filterDirection)
        .map(mapDirection)
        .indexOf(f.name) !== -1
  )

  //Cutoff at user's depth limit, but let us know if there are more relatives
  if (maxDepth === node.depth || -maxDepth === node.depth)
    return nodes.length || null

  if (nodes.length === 0) return null
  nodes.forEach(n => {
    n.depth = direction === 'children' ? node.depth + 1 : node.depth - 1
    n[direction] = getRelatives(direction, n, maxDepth) //go deep son xD
  })

  return nodes
}

const tree = (state, props) => {
  const formData = formSelectors.formData(state)
  const maxDepth = formData.depth
  //in the Root component, props.root was being changed (reference/hoisting?) i still don't quite get this in JS
  const root = Object.assign({}, props.root)

  root.depth = 0
  root.children = getRelatives('children', root, maxDepth)
  root.parents = getRelatives('parents', root, maxDepth)
  console.log(root)
  return root
}

export const rootSelectors = {
  tree
}
