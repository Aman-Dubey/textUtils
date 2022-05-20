import React, { useState } from 'react'
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

const App = () => {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }

  const darkModeHandler = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#191970'
      showAlert("Dark Theme Applied Successfully", 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff'
      showAlert("Light Theme Applied Successfully", 'success');
    }
  }

  return (
    <div>
      <NavBar title="NavBar" about="About" home="Home" darkModeHandler={darkModeHandler} mode={mode} />
      <Alert alert={alert}/>
      <TextForm darkModeHandler={darkModeHandler} mode={mode} showAlert={showAlert}/>
    </div>
  )
}

export default App;