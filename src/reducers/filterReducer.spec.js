import reducer from "./filterReducer";

describe("filterReducer", () => {

  describe('basics', () => {

    it("returns initial state", () => {
      const action = { type: "unknown" };
      const state = reducer(undefined, action);
      expect(state).toEqual("");
    });
      
  })

  describe('actions', () => {

    it("filters", () => {
      const action = {
        type: 'filter/createFilter',
        payload: 'new filter'
      }
      const state = reducer("old filter", action)
      expect(state).toEqual("new filter")
    })

  })
})