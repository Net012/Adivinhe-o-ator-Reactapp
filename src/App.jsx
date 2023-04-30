import { useState, useEffect } from "react";

function App() {
  const respostaCerta = "larissa manoela";
  let [resultado, setResultado] = useState("");
  let [contador, setContador] = useState(1);
  let [resposta, setResposta] = useState("");
  let [foto2, setFoto2] = useState("./images/preto.png");
  let [foto3, setFoto3] = useState("./images/preto.png");
  let [foto4, setFoto4] = useState("./images/preto.png");

  function testar(e) {
    e.preventDefault();
    if (resposta.toLowerCase() === respostaCerta) {
      setResultado(<h4 className="text-success m-5">Você acertou!</h4>);
    } else {
      setResultado(<h4 className="text-danger m-5">Você errou!</h4>);
    }
  }

  useEffect(() => {
    switch (contador) {
      case 1:
        setFoto2("./images/preto.png");
        setFoto3("./images/preto.png");
        setFoto4("./images/preto.png");
        break;
      case 2:
        setFoto2("./images/larissa-manoela2.png");
        setFoto3("./images/preto.png");
        setFoto4("./images/preto.png");
        break;
      case 3:
        setFoto2("./images/larissa-manoela2.png");
        setFoto3("./images/larissa-manoela3.png");
        setFoto4("./images/preto.png");
        break;
      case 4:
        setFoto2("./images/larissa-manoela2.png");
        setFoto3("./images/larissa-manoela3.png");
        setFoto4("./images/larissa-manoela4.png");
        break;
    }
  }, [contador]);

  function aumentaContador() {
    if (contador < 4) {
      setContador(contador + 1);
    } else {
      alert("Você chegou ao final das fotos!");
    }
  }

  function diminuiContador() {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Você não pode voltar mais!");
    }
  }

  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <img
              src="./images/logo.png"
              alt="Logo"
              width="100"
              class="d-inline-block"
            />
            <h3 className="m-3">Adivinhe o famoso</h3>
          </div>
        </div>
      </nav>

      <main>
        <div className="container d-flex justify-content-center mt-4">
          <h2 className=" px-4 py-1 border border-dark bg-secondary text-white">
            Você pode ver as 4 fotos...
          </h2>
        </div>
        <div className="container d-flex justify-content-center">
          <form className="border border-black p-3">
            <div className="d-flex align-items-center">
              <input
                className="btn btn-primary mx-4 "
                type="button"
                value="<< Anterior"
                onClick={() => diminuiContador()}
              />
              <div className="column">
                <img
                  className="m-1 row"
                  src="images/larissa-manoela1.png"
                  width="200"
                  height="200"
                />
                <img className="m-1" src={foto3} width="200" height="200" />
              </div>
              <div className="column">
                <img className="m-1 row" src={foto2} width="200" height="200" />
                <img className="m-1" src={foto4} width="200" height="200" />
              </div>

              <input
                className="btn btn-primary mx-4"
                type="button"
                value="Proxima >>"
                onClick={() => aumentaContador()}
              />
            </div>

            <div className="mt-5 d-flex align-items-center">
              <label htmlFor="">Nome do artista:</label>
              <input
                className="mx-3"
                type="text"
                onChange={(e) => setResposta(e.target.value)}
              />
              <input
                className="btn btn-primary"
                type="submit"
                value="Enviar Resposta"
                onClick={(e) => testar(e)}
              />
            </div>

            <div className="d-flex">
              <h2 className="mt-4">Resultado:</h2>
              {resultado}
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
