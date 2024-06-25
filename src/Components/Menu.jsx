import React from "react";



const MenuItem = ({titulo,menuActivo, setMenuActivo}) => {
    return (
        <li><button style={menuActivo === titulo ? {backgroundColor: 'grey'}:{}} onClick= {()=>setMenuActivo(titulo)}>{titulo}</button></li>
    )
}

const Menu = (props) => {    
    const {menuActivo, setMenuActivo} = props;
    
    return(
        <div>
            <ul className="Menu-item">    
                <MenuItem titulo={"Nosotros"} menuActivo= {menuActivo} setMenuActivo={setMenuActivo} />
                <MenuItem titulo={"Instalaciones"} menuActivo= {menuActivo} setMenuActivo={setMenuActivo}/>
                <MenuItem titulo={"Opciones"} menuActivo= {menuActivo} setMenuActivo={setMenuActivo}/>
                <MenuItem titulo={"Contacto"} menuActivo= {menuActivo} setMenuActivo={setMenuActivo}/>

            </ul>

            <h1>Quinta Panambi Hovy</h1>
            <p>Nos lo tomamos con calma</p>

            <button>Iniciar Sesion para ver mas</button>
            
        </div>
    )
}


export default Menu;