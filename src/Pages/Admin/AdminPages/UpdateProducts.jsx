

const UpdateProducts = () => {
  return (
    <section>
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <div>
                    <h1 className='font-bold text-center text-xl text-gray-300 mb-4 font-titleFont capitalize'>editar producto</h1>
                </div>
                <div>
                    <input type="text"
                    name='title'
                    className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-300 outline-none placeholder:text-gray-500' 
                    placeholder='Titulo'/>
                </div>
                <div>
                    <input type="text"
                    name='imageurl'
                    className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-300 outline-none placeholder:text-gray-500' 
                    placeholder='Imagen del producto'/>
                </div>
                <div>
                    <input type="text"
                    name='logourl'
                    className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-300 outline-none placeholder:text-gray-500' 
                    placeholder='Logo del producto'/>
                </div>
                <div>
                    <input type="text"
                    name='precio'
                    className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-300 outline-none placeholder:text-gray-500' 
                    placeholder='Precio del producto'/>
                </div>
                <div>
                    <input type="text"
                    name='categoria'
                    className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-200 outline-none placeholder:text-gray-500' 
                    placeholder='Categoria'/>
                </div>
                <div>
                    <textarea name="titulo" cols='30' rows='10'
                    className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-200 outline-none placeholder:text-gray-500'
                    placeholder='Descripción'></textarea>
                </div>
                <div className='flex justify-between mb-3'>
                    <button className='border rounded-xl hover:bg-gray-300 text-gray-300 hover:text-gray-700 font-bold w-full py-2 px-2 capitalize font-titleFont'>confirmar</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UpdateProducts