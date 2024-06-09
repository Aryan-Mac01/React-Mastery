function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a', //it means what tag to target (div, p, a, etc...)
    props: { // these are the properties that particular tag holds, here 'a' have properties like href, target etc.
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to visit google' // What it shows
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)