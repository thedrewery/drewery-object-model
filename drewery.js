let globalId = 0
const componentState = new Map()

export function useState(initialState) {
    console.log(componentState)
    return [initialState, () => {}]
   //  return [state, setState] 
}


export function render(component, props, parent) {
    const state = componentState.get(parent) || { cache: [] }
    componentState.set(parent, { ...state, component, props })
    const output = component(props)
    globalId = 0
    parent.textContent = output;
}