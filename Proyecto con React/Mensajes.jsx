import React, { useState, useEffect } from 'react'
// useState: definir estados,controla el contenido de ciertos elementos, como una variable.
// useEffect: bloque de codigo que se ejecuta automaticamente cuando se detectan cambios
//            en los registros de localStorage.
export const Mensajes = () => {
  //evita que se pierda el contenido del localstorage al actualizar, lo recupera.
  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registros");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }
  //esta linea depende del bloque de codigo anterior.
  const [registros, setRegistros] = useState(obtenerRegistros());

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

//Funcion flecha
  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = { nombre, correo, mensaje }
    setRegistros([...registros, miObjeto]);
    limpiarFormulario();
  }
//Funcion normal
  function botonGuardarSimple(e){
    e.preventDefault();
    var miObjeto = { nombre, correo, mensaje }
    setRegistros([...registros, miObjeto]);
    limpiarFormulario();
  }


  const limpiarFormulario = () => {
    setNombre("");
    setCorreo("");
    setMensaje("");
    document.getElementById("miFormulario").reset();
  }
  //Guardar en localstorage
  useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros));
  }, [registros]);


  return (
      <center>
        <div className="container" style={{width:"70%", marginTop:20, background:"#A8BCFF", padding:20}}>
            <form id="miFormulario" onSubmit={botonGuardarSimple}>
                <h1 className='h1'>Mensajes</h1>
                <input style={{marginBottom:20}} className="form-control form-control-lg" type="text" placeholder="Digite su Nombre" onChange={(e)=>setNombre(e.target.value)} />
                <input style={{marginBottom:20}} className="form-control form-control-lg" type="email" placeholder="Digite su Correo" onChange={(e)=>setCorreo(e.target.value)} />
                <textarea style={{marginBottom:20}} className="form-control form-control-lg" placeholder="Digite su Mensaje" onChange={(e)=>setMensaje(e.target.value)}>
                </textarea>

                <button className='btn btn-primary btn-lg'>
                    Enviar Mensaje
                </button>
            </form>
        </div>
    </center>
  )
}