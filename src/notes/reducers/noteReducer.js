
const initialState = {
  notes: []
}
const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_NOTES':
      return {
        ...state,
        notes: action.payload
      }
    case 'DELETE_NOTE':
      let newNotes = state.notes.filter( (note) => {
        return action.id !== note.id
      })
      return {
        ...state,
        notes: newNotes
      }
    default:
      return state;
  }
}

export default noteReducer;
