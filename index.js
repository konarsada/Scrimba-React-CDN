/* 
const navbar = (
    <nav>
        <h1>Sada's website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
*/

/*
function MainContent() {
    return (
        <h3>I'm learning React!</h3>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
        
        <ul>
            <li>abc</li>
            <li>123</li>
        </ul>
    </div>,
    document.getElementById("root")
)
*/

/*
// JSX - jsx returns plain JavaScript objects
// ReactDOM.render() converts jsx to DOM elements

const jsx_element = <h1 className="header">Hello world</h1>
console.log(jsx_element);

// output -
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "Hello world"
    }, 
    _owner: null, 
    _store: {}
}
*/

/*
const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

// [object Object] - string representation of JS object
// to make this object appear we stringify using JSON
document.getElementById("root").append(JSON.stringify(page))
*/

/*
const page = (
    <div>
        <img src="./react-logo.png" width="40px" />
        <h2>Fun facts about React</h2>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars in GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprice apps, including mobile apps</li>
        </ul>
    </div>
)

function ReactFacts() {
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h2>Fun facts about React</h2>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars in GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprice apps, including mobile apps</li>
            </ul>
        </div>
    )
}

// ReactDOM.render(page, document.getElementById("root"))
// ReactDOM.render(ReactFacts(), document.getElementById("root"))
ReactDOM.render(<ReactFacts />, document.getElementById("root"))
*/

// import React from "react"
// import ReactDOM from "react-dom"

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2022 Konar development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))