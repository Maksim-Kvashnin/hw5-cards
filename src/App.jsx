import './App.css'

const Card = ({ children, img }) => {
  return (
    <>
      <div style={{ width: "18rem", border: "1px solid #00000020", borderRadius:
      "5px" }}>{img}{children}</div>
    </>
  )
}

const Img = () => <img className="card-img-top" src="https://img.freepik.com/free-vector/abstract-organic-pattern-design-background_1048-19286.jpg" alt="some image"></img>

const CardContent = () => {
  return <div className='card-body'>
    <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
}

function App() {
  return (
    <Card img={<Img />}>
      <CardContent/>
    </Card>
  )
}

export default App
