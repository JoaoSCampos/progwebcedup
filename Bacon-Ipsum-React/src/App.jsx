import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import baconImg from './assets/bacon.png'
import './App.css'

function App() 
{
  const [inputParagraphs, setInputParagraphs] = useState("")
  const [inputMeatOption, setInputMeatOption] = useState("meat")
  const [inputStartWithBaconIpsum, setInputStartWithBaconIpsum] = useState(true)
  const [respostaBacon, setRespostaBacon] = useState("")

  const rdInputChange = (event) => 
  {
    setInputMeatOption(event.target.value);
  };

  const ckInputChange = (event) =>
  {
    setInputStartWithBaconIpsum(event.target.checked);
  };

  const txInputChange = (event) =>
  {
    const inputValue = event.target.value;
    
    // This regex matches an empty string or a string with ONLY digits and MAXIMUM of three
    const regex = /^\d{1,3}$/;

    if ((inputValue === "") || (regex.test(inputValue))) 
    {
      setInputParagraphs(inputValue);
    }
  };

  const btnBaconClick = async () =>
  {
    var valParas = inputParagraphs
    var optMeat = inputMeatOption
    var blnStartsWith = 0

    if (valParas === "")
    {
      valParas = 5
    }

    if (inputStartWithBaconIpsum === true) 
    {
      blnStartsWith = 1
    }

    try 
    {
      const response = await fetch(`https://baconipsum.com/api/?type=${optMeat}&paras=${valParas}&start-with-lorem=${blnStartsWith}&format=json`)

      const query = valParas + " " + optMeat + " " + blnStartsWith

      console.log("FETCH URL", query)
      const dadosBrutos = await response.json()
      const reSize = Object.keys(dadosBrutos).length;
      var baconTxt = ""

      if (!dadosBrutos.error) 
      {
        for (const paragraph in dadosBrutos)
        {
          baconTxt += dadosBrutos[paragraph] + "\n\n"
        }

        setRespostaBacon(baconTxt)
      }
    } 
    catch (error) 
    {
      console.log("Erro ao buscar retorno da API Bacon Ipsum: ", error)
    }
  }

  const btnLimpar = () =>
  {
    setInputParagraphs("")
    setRespostaBacon("")
    setInputMeatOption("meat")
    setInputStartWithBaconIpsum(true)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={baconImg} className="base" width="170" height="179" alt="" />
        </div>
        
        <div>
          <h1>Bacon Ipsum - Gerador de texto</h1>
        </div>

        <div>
          <label htmlFor="inputParas">Quantidade de parágrafos: </label>
          <input
            id="inputParas"
            type="text"
            value={inputParagraphs} 
            onChange={txInputChange} 
            placeholder='5'
          />
        </div>

        <div>
          <label>Tipo: </label>

          <input 
          type="radio"
          id="rdMeat"
          name="meatType" 
          value="meat"
          onChange={rdInputChange}
          checked={inputMeatOption === 'meat'}
          //defaultChecked 
          required
          />
          <label htmlFor="rdMeat">Carne</label>

          <input 
          type="radio" 
          id="rdMeatAndFiller" 
          name="meatType" 
          value="meat-and-filler"
          onChange={rdInputChange}
          checked={inputMeatOption === 'meat-and-filler'}
          />
          <label htmlFor="rdMeatAndFiller">Carne e Recheio</label>
        </div>

        <div>
          <label>
            <input  
              type="checkbox" 
              id="ckStartWithBaconLorem"
              name="StartWithBaconLorem"
              checked={inputStartWithBaconIpsum}
              //checked="checked"
              onChange={ckInputChange} 
              />
            Começar com <b>'Bacon ipsum dolor amet...'</b>
          </label>
        </div>

        <div>
          <button
          type="button"
          className="btnBacon"
          onClick={btnBaconClick}
          >
            Eu quero Bacon
          </button>
        </div>

        <div>
          <button
          type="button"
          className="btnLimpar"
          onClick={btnLimpar}
          >
            Limpar
          </button>
        </div>

        <div>
          <label htmlFor="inputRespostaBacon">Meu Bacon: </label>
          <br></br>
            <textarea
            style={{ resize: 'none' }}
            id="inputRespostaBacon"
            //defaultValue={respostaBacon}
            value={respostaBacon}
            rows={15}
            cols={80}
            placeholder="Retire seu bacon aqui!"
            />
        </div>
      </section>
    </>
  )
}

export default App