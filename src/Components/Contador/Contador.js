import{useState} from 'react'

const Contador = (props)=>{
    const [numero, setNumero] = useState(inicialValue || 0)

    const sumar =()=>{
       setNumero (numero + 1)
    }

    const restar =()=>{
        setNumero (numero - 1)
     }

     const resetear =()=>{
        setNumero (0)
     }


return (
    <div className='d-flex justify-araund'>
        <div>
            <button onClick={restar}>Restar</button>
        </div>
        <h3 className='text-center'>Número actuak es : {numero}</h3> 
        {props.greeting}
        <div>
            <button onClick={sumar}>Sumar</button>
        </div>
        <div>
            <button onClick={resetear}>Resetear</button>
        </div>

    </div>
)

}
export default Contador