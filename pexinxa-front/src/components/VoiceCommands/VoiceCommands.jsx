import React, { useState } from 'react';
import { initializeVoiceRecognition } from '../../hooks/VoiceService';

function VoiceCommands() {
  const [command, setCommand] = useState('');
  const [recognition, setRecognition] = useState(null);

  const handleStartListening = () => {
    const recognitionInstance = initializeVoiceRecognition(handleVoiceCommand);
    if (recognitionInstance) {
      recognitionInstance.start();
      setRecognition(recognitionInstance);
    }
  };

  const handleVoiceCommand = (transcript) => {
    setCommand(transcript);
    executeCommand(transcript);
  };

  const executeCommand = (transcript) => {
    if (transcript.toLowerCase().includes('criar lista')) {
      alert('Criando uma nova lista...');
      // Lógica para criar lista
    } else if (transcript.toLowerCase().includes('buscar promoção')) {
      alert('Buscando promoções...');
      // Lógica para buscar promoções
    } else if (transcript.toLowerCase().includes('navegar para')) {
      const destination = transcript.split('navegar para')[1].trim();
      alert(`Navegando para ${destination}...`);
      // Lógica para navegação
    } else {
      alert('Comando não reconhecido.');
    }
  };

  return (
    <div>
      <h2>Comandos de Voz</h2>
      <button onClick={handleStartListening}>Ativar Comandos de Voz</button>
      {command && <p>Último comando: {command}</p>}
    </div>
  );
}

export default VoiceCommands;