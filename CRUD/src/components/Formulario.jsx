import React, { useState, useEffect } from 'react';
import TextInput from './TextInput';
import NumberInput from './NumberInput';
import RadioGroup from './RadioGroup';
import SelectInput from './SelectInput';
import Checkbox from './Checkbox';

export const Formulario = () => {
    const obtenerRegistros = () => {
        var datos = localStorage.getItem("registrosls");
        if(datos){
            return JSON.parse(datos);
        }
        else{
            return [];
        }
    }

    const [registrosls, setRegistrosLS] = useState(obtenerRegistros());
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const [estudios, setEstudios] = useState("");
    const [terminos, setTerminos] = useState("");

    const botonGuardar = (e) => {
        e.preventDefault();
        var miObjeto = {nombre, edad, sexo, estudios, terminos}
        setRegistrosLS([...registrosls,miObjeto]);
    }

    useEffect(() => {
        localStorage.setItem("registrosls", JSON.stringify(registrosls));
    }, [registrosls])

    const botonEliminar = (miIndex) => {
        if(window.confirm("¿Seguro que desea eliminar el registro?")){
            var registrosFiltrados = registrosls.filter((e, index) => {
                return miIndex !== index
            });
            setRegistrosLS(registrosFiltrados);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Formularioooooooo</h1>
                </div>
            </div>
            <form id="miFormulario" onSubmit={botonGuardar}>
                <div className="row">
                    <div className="col-6">
                        <TextInput
                            id="txtnom"
                            label="Digite El Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder=""
                            required
                        />
                        <NumberInput
                            id="txteda"
                            label="Digite La Edad"
                            value={edad}
                            onChange={(e) => setEdad(e.target.value)}
                            placeholder=""
                            min={1}
                            max={150}
                            required
                        />
                        <RadioGroup
                            name="opsex"
                            options={[
                                { id: "op1", value: "Masculino", label: "Masculino" },
                                { id: "op2", value: "Femenino", label: "Femenino" },
                                { id: "op3", value: "No Especifica", label: "No Especifica" }
                            ]}
                            onChange={(e) => setSexo(e.target.value)}
                        />
                        <SelectInput
                            id="cboest"
                            label="Seleccione Nivel De Estudios"
                            value={estudios}
                            onChange={(e) => setEstudios(e.target.value)}
                            options={[
                                { value: "Sin Estudios", label: "Sin Estudios" },
                                { value: "Basica", label: "Basica" },
                                { value: "Media", label: "Media" },
                                { value: "Superior", label: "Superior" }
                            ]}
                            required
                        />
                        <Checkbox
                            id="chk1"
                            label="Acepto Los Términos y Condiciones"
                            checked={terminos}
                            onChange={(e) => setTerminos(e.target.checked)}
                            required
                        />
                        <br />
                        <input type="submit" id="btnsave" value="Guardar" className="btn btn-primary" />
                        &nbsp;
                        <input type="reset" id="btnclean" value="Limpiar    os" className="btn btn-primary" />
                    </div>
                </div>
            </form>

            <br />

            <div className="table-responsive col-8">
                {registrosls.length > 0 &&
                    <>
                        <table className="table table-bordered table-hover">
                            <thead className="table-primary text-center">
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Edad</th>
                                    <th>Sexo</th>
                                    <th>Estudios</th>
                                    <th>Terminos</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody className="text-center align-baseline">
                                {registrosls.map((miObjeto, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{miObjeto.nombre}</td>
                                        <td>{miObjeto.edad}</td>
                                        <td>{miObjeto.sexo}</td>
                                        <td>{miObjeto.estudios}</td>
                                        <td>{miObjeto.terminos ? "Aceptados" : "Rechazados"}</td>
                                        <td className='text-center'>
                                            <button type='button' className='btn btn-outline-danger' onClick={() => botonEliminar(index)}>
                                                <i className="bi bi-trash3"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-danger btn-md col-12" onClick={() => setRegistrosLS([])}>
                            <h5>Borrar Todos Los Elementos!!</h5>
                        </button>
                    </>
                }
                {registrosls.length < 1 && <><h2>No hay registros</h2></>}
            </div>
        </div>
    )
}

