
function App() {

    const [displayCounter, setDisplayCounter] = React.useState(true)
    return (
        <div id='app'>
            <button onClick={() => setDisplayCounter(prevDisplayCounter => !prevDisplayCounter)}>Show/Hide Counter</button>
            {displayCounter && <Counter />}
        </div>
    )

}


function Counter() {

    const [count, setCount] = React.useState(0)
    const [taps, setTaps] = React.useState(0)
    function handleIncrement() {

        setCount((prevCount) => {
            return prevCount + 1
        })
        setTaps(prevTaps => prevTaps + 1)
    }
    const handleDecrement = () => {

        setCount(prevCount => prevCount - 1)
        setTaps(prevTaps => prevTaps + 1)
    }
    const resetTheCount = () => {
        setCount(0)
    }
    const resetAll = () => {
        setCount(0)
        setTaps(0)
    }
    return (
        <div className="counter" >
            <h1>Counter: {count}</h1>
            <h2>Taps: {taps}</h2>
            <button onClick={handleIncrement}>Increment +</button>
            <button onClick={handleDecrement} >Decrement -</button>
            <button className="reset-count" onClick={resetTheCount}>Reset Count</button>
            <button className='reset-all' onClick={resetAll}>Reset All</button>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))

