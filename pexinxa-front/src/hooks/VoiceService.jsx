export function initializeVoiceRecognition(onResultCallback) {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Seu navegador não suporta comandos de voz.');
      return null;
    }
  
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'pt-BR'; // Configura o idioma para português do Brasil
    recognition.continuous = false; // Para de ouvir após o comando ser detectado
    recognition.interimResults = false; // Retorna apenas resultados finais
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      onResultCallback(transcript);
    };
  
    recognition.onerror = (event) => {
      console.error('Erro no reconhecimento de voz:', event.error);
    };
  
    return recognition;
  }
  