%%raw("import './App.css'")
@module("../../static/logo.svg") external logo: string = "default"
@react.component
let make = () => {
  let (count, setCount) = React.useState(() => 0)

  <div className="align-center">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p> {`Hello Vite + Rescript + React 17`->React.string} </p>
      <p>
        <button onClick={_e => setCount(count => count + 1)}>
          {`count is: ${count->Belt.Int.toString}`->React.string}
        </button>
      </p>
      <p>
        {"Edit: "->React.string}
        <code> {"containers/App.res"->React.string} </code>
        {" and save to test HMR updates."->React.string}
      </p>
      <p>
        <a
          className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {"Learn React"->React.string}
        </a>
        {" | "->React.string}
        <a
          className="text-blue-300"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer">
          {"Vite Docs"->React.string}
        </a>
        {" | "->React.string}
        <a
          className="App-link"
          href="https://rescript-lang.org/docs/react/latest/introduction"
          target="_blank"
          rel="noopener noreferrer">
          {"ReScript Docs"->React.string}
        </a>
      </p>
    </header>
  </div>
}
