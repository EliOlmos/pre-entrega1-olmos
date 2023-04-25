import{useState} from 'react'

const Contador = (props)=>{

    const {initialValue} = props
    const [numero, setNumero] = useState(initialValue|| 0)

    const sumar =()=>{
       setNumero (numero + 1)
    }

    const restar =()=>{
        setNumero (numero - 1)
     }


return (
    <div className='container d-flex justify-content-center align-items-center card-text'>
        <div>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#a6be06"}} onClick={restar}>sacar del carrito </button>
        </div>
        <h3 className='card-text'>Total de productos : {numero}</h3> 
        {props.greeting}
        <div>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#a6be06"}} onClick={sumar}>Agregar al carrito</button>
        </div>
    </div>
)

}
export default Contador