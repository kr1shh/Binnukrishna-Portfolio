import background from './assets/Bg.jpg'

function App() {

  const style = {
    backgroundImage: `url(${background})` 
  }

  return (
    <>
    <div
    style={style} 
    className="bg-cover flex justify-center items-center h-screen w-full">

      <h1 className="mt-[190px] text-primary text-5xl font-extrabold">Portfolio Updated Soon.</h1>

    </div>
    </>
  )
}

export default App
