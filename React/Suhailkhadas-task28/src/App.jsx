// import Card from './components/cards'
// import './App.css'
import products from './data/products'
function App() {

  return (
    <>
      <div className='px-30 pt-13 justify-items-center bg-black'>
        <h1 className='text-amber-100'>All Cards are Here</h1>
        <div className="grid grid-cols-3 grid-rows-4 gap-7">
              {
                  products.map((product)=>(
                    <div className='bg-gradient-to-tr from-pink-300 to-blue-300 p-1  '>
                      <div className=' bg-black text-white justify-items-center'>
                      <div key={product.id} className=' p-1'>
                      <img src={product.image} alt="" />
                    </div>
                    <div >
                    {product.name} <br />
                  
                    </div>
                    <div>
                        {product.description} 
                    </div>
                    </div>
                    </div>

                    

                  ))
               }
        </div>
      </div>
    
    </>
  )
}

export default App
