import guessWordReducer from '../../../redux/reducers/guessWord.reducer'
import { actionTypes } from '../../../redux/actions/guessWord.action'

test("returns default initial state of 'false'", () => {
   const { data } = guessWordReducer()

   expect(data.isCorrectWord).toBe(false)
})

test("returns state of true upon receiving an action type 'CORRECT_GUESS'", () => {
   const { data } = guessWordReducer(undefined, {
      type: actionTypes.GUESS_WORD_SUCCESS
   })

   expect(data.isCorrectWord).toBe(true)
})
