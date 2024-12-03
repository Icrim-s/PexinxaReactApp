export async function registerBiometricCredential(username) {
    try {
      const publicKeyCredentialCreationOptions = {
        challenge: Uint8Array.from('random-challenge', c => c.charCodeAt(0)),
        rp: {
          name: 'Pexinxa App',
        },
        user: {
          id: Uint8Array.from(username, c => c.charCodeAt(0)),
          name: username,
          displayName: username,
        },
        pubKeyCredParams: [
          { type: 'public-key', alg: -7 }, // ECDSA com SHA-256
        ],
        authenticatorSelection: {
          authenticatorAttachment: 'platform',
          userVerification: 'required',
        },
        timeout: 60000,
        attestation: 'direct',
      };
  
      const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions,
      });
  
      return credential;
    } catch (error) {
      console.error('Erro ao registrar biometria:', error);
      throw error;
    }
  }
  
  export async function authenticateBiometric() {
    try {
      const publicKeyCredentialRequestOptions = {
        challenge: Uint8Array.from('random-challenge', c => c.charCodeAt(0)),
        allowCredentials: [],
        timeout: 60000,
        userVerification: 'required',
      };
  
      const assertion = await navigator.credentials.get({
        publicKey: publicKeyCredentialRequestOptions,
      });
  
      return assertion;
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      throw error;
    }
  }