import axios from 'axios';

export const fetchNotes = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/v1/notes.json')
      .then( ({ data }) => {
        dispatch({ type: 'FETCH_NOTES', payload: data})
      })
  }
}

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTE',
    id
  }
}
