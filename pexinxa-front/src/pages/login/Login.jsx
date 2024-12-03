import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication'; 
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const { googleSignIn, emailPasswordSignIn } = useAuthentication();
  const [errorMessage, setErrorMessage] = useState('')  
  const [successMessage, setSuccessMessage] = useState('') 
  const navigate = useNavigate();
  const { loginWithBiometric, registerBiometric } = useAuth();

  const handleRegister = () => {
    registerBiometric(username);
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await googleSignIn();
      console.log('Successfully signed in with Google:', user);
      setSuccessMessage('Login feito com sucesso!'); 
      setTimeout(() => navigate('/'), 2000); 
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await emailPasswordSignIn(email, password);
      console.log('Successfully signed in with email and password:', user);
      setSuccessMessage('Login feito com sucesso!'); 
      setTimeout(() => navigate('/'), 2000); 
    } catch (error) {
      console.error('Error signing in:', error.message); 
      setErrorMessage('Senha ou E-mail Invalido.');
    } 
  };

  const backgroundImage = "/background.png";
  const ovalLogo = "/OvalLogo.svg";

  return (
    <div className="flex h-screen items-center justify-center"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "auto",       
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
      
    }}
  >
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md relative">
      <button 
        onClick={() => navigate("/")} 
        className="absolute top-4 left-4 text-orange-500 hover:text-gray-900">
        <FaArrowLeft size={24} />
      </button>
        <div className="mb-8 text-center">
          <img src={ovalLogo} alt="Logo" width={64} height={64} className="mx-auto" />
          <h2 className="mt-4 text-2xl font-bold text-orange-500">Acesse sua Conta</h2>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <span className="flex items-center justify-center">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
              <path fill="none" d="M1 1h22v22H1z" />
            </svg>
            Fazer login com o Google
          </span>
        </button>
        <div className="mt-6 text-center text-sm">
          <span className="px-2 bg-white text-gray-500">ou</span>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            {successMessage && (
              <div className="mb-4 p-4 text-green-800 bg-green-200 rounded-md text-center">
                {successMessage}
              </div>
            )}
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu E-mail"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? 'text' : 'password'} 
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua Senha"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)} // Alterna a visibilidade da senha
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500"
              >
                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>
          {errorMessage && (
            <div className="mb-3 p-4 text-red-800 bg-red-200 rounded-md text-center">
              {errorMessage}
            </div>
          )}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-orange-500 undeline hover:text-orange-400 ">
                Esqueci minha senha
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Entrar
            </button>

            <button
              onClick={loginWithBiometric}
              className="w-full flex justify-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Entrar com Biometria
            </button>

          </div>
        </form>
        <div className="mt-4 text-center text-sm text-orange-500 font-medium">
          Não tem uma conta?{' '}
          <Link to="/register" className="text-orange-500 hover:text-orange-600 font-medium underline">
            Cadastre-se  
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
