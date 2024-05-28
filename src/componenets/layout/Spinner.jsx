import spinner from './assets/spinner.gif'

function Spinner() {
  return <div className="w-full">
    <img 
        src={spinner} 
        alt="Loading..." 
        width={150} 
        className='mx-auto' 
    />
  </div>
}

export default Spinner