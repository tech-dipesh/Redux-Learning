import {produce} from "immer"

const baseState = [
    {
        title: "Learn TypeScript",
        done: true
    },
    {
        title: "Try Immer",
        done: false
    }
]

export const nextState = produce(baseState, draftState => {
    draftState.push({title: "Tweet about it"})
    draftState[1].done = true
})