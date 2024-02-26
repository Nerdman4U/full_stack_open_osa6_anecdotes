import reducer from "./anecdoteReducer";
import { initialState } from "./anecdoteReducer";

describe("anecdoteReducer", () => {
  
  beforeEach(() => {})

  describe('basics', () => {

    it("returns initial state", () => {
      const action = { type: "unknown" };
      const state = reducer(undefined, action);
      expect(state).toEqual(initialState);
    });
  
  })

  describe('actions', () => {

    it('votes', () => {
      const a = initialState[0]
      const action = {
        type: 'anecdotes/vote',
        payload: { id: a.id }
      }
      const state = reducer(initialState, action)
      expect(state[0].votes).toBe(1)
    })

    it('throws an error when no id', () => {
      const action = {
        type: 'anecdotes/vote'
      }     
      expect(() => reducer(initialState, action)).toThrow()
    })

    it('creates new anecdote', () => {
      const data = 'new amazing anecdote is better than no anecdote at all'
      const action = {
        type: 'anecdotes/newAnecdote',
        payload: data
      }
      const old_length = initialState.length
      const state = reducer(initialState, action)
      expect(state.length).toBe(old_length + 1)
      expect(state[state.length - 1].content).toBe(data)
    })
  })

})

