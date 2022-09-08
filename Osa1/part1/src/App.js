const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by
      <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}


const App = () => {

  const nimi = 'Pekka'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Ville" age={26 + 10} />
      <Hello name={nimi} age={age} />
      <Footer />
    </>
  )
}
export default App