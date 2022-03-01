import { render } from './drewery.js'
import Component from './component.js'

let propCount = 0
document.getElementById('btn-prop').addEventListener('click', () => {
    propCount++ 
    console.log(Component)
    console.log("mad props!")
    renderComponent()
})


function renderComponent() {
    render(Component, { propCount, buttonElem: document.getElementById('btn-count') }, document.getElementById("root"))
    render(Component, { propCount, buttonElem: document.getElementById('btn-count-2') }, document.getElementById("root-2"))
}

renderComponent();