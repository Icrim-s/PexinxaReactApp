import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { registerBiometricCredential, authenticateBiometric } from '../hooks/WebAuthnService';

const AuthContext = createContext();

const registerBiometric = async (username) => {
  try {
    await registerBiometricCredential(username);
    alert('Registro de biometria concluído!');
  } catch (error) {
    alert('Falha ao registrar biometria.');
  }
};

const loginWithBiometric = async () => {
  try {
    const assertion = await authenticateBiometric();
    setUser({ name: 'Usuário Biométrico' });
    alert('Login biométrico bem-sucedido!');
  } catch (error) {
    alert('Erro ao realizar login biométrico.');
  }
};

export const AuthProvider = ({ children }) => { 
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout, loginWithBiometric, registerBiometric }}>
      {children} 
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};


export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthContext;