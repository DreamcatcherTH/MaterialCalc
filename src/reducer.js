export default function build(state = [], action) {
    switch (action.type) {
      case 'ADD_BUILDING':
        return state.concat([action.text])
      default:
        return state
    }
  }