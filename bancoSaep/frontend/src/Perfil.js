function Perfil({ foto, openLoginModal }) {
    return (
        <div className="perfil">
            <button onClick={openLoginModal}>Entrar</button>
            <img src={foto} id="faculHub" alt={foto} />
            <h1>FaculHub</h1>
            <p>Inscrições: 7</p>
        </div>
    );
}

export default Perfil;
