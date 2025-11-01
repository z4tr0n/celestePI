import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  User, 
  Lock, 
  Ship, 
  ArrowRight, 
  MapPin, 
  Shirt, 
  ParkingCircle, 
  Clock, 
  Users, 
  ChevronDown, 
  CalendarDays,
  Menu,
  X
} from 'lucide-react';

// --- Componentes ---

// Componente de Botão
const Button = ({ children, variant = 'solid', className = '', ...props }) => {
  const baseStyle = 'w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 shadow-md';
  
  const variants = {
    solid: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    outline: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 active:bg-blue-100',
    green: 'bg-green-600 text-white hover:bg-green-700',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 shadow-none',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Componente de Input
const Input = ({ icon, placeholder, type = 'text', className = '', ...props }) => {
  return (
    <div className={`relative w-full ${className}`}>
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full py-3 ${icon ? 'pl-10' : 'pl-4'} pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
        {...props}
      />
    </div>
  );
};

// Componente de Select
const Select = ({ label, children, className = '', ...props }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <select
        className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      >
        {children}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <ChevronDown size={20} />
      </div>
      {label && <label className="absolute -top-2 left-3 px-1 bg-white text-xs text-gray-500">{label}</label>}
    </div>
  );
};

// Rodapé
const GeometricFooter = () => (
  <footer className="relative w-full h-32 overflow-hidden">
    <div className="absolute -bottom-10 -left-10 w-full h-40 bg-gradient-to-r from-blue-800 to-blue-600 transform -skew-y-3"></div>
    <div className="absolute -bottom-5 -right-5 w-3/4 h-32 bg-gradient-to-r from-indigo-700 to-indigo-500 transform -skew-y-6 opacity-80"></div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black">
      <Ship size={40} />
    </div>
  </footer>
);

// Cabeçalho
const GeometricHeader = ({ userName, profilePicUrl }) => (
  <header className="relative w-full h-48 bg-gradient-to-br from-blue-700 to-indigo-600 text-white p-6 shadow-lg overflow-hidden">
    <div className="absolute -top-10 -right-20 w-64 h-64 bg-blue-500 opacity-20 rounded-full"></div>
    <div className="absolute top-10 -left-20 w-48 h-48 bg-indigo-400 opacity-20 rounded-full"></div>

    <div className="relative z-10 flex items-center justify-between">
      <img
        src={profilePicUrl}
        alt="Foto de Perfil"
        className="w-16 h-16 rounded-full border-4 border-white shadow-md"
        onError={(e) => e.target.src = 'https://placehold.co/64x64/e0e0e0/757575?text=User'}
      />
      <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
        <Menu size={24} className="text-white" />
      </button>
    </div>
    <div className="relative z-10 mt-4">
      <h1 className="text-xl font-semibold">Seja bem-vindo, {userName}!</h1>
    </div>
    
    <div 
      className="absolute bottom-0 left-0 w-full h-16 bg-gray-50" 
      style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
    ></div>
    <div 
      className="absolute bottom-0 left-0 w-full h-16 bg-gray-100" 
      style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)', transform: 'translateY(1px)' }}
    ></div>

  </header>
);


// Tela 1
const OnboardingScreen1 = ({ setScreen }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-blue-300 p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 m-4 text-gray-400 hover:text-gray-700" onClick={() => setScreen('login')}>
          <X size={24} />
        </div>
        
        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <Search size={48} className="text-white" />
        </div>

        <h2 className="text-2xl font-bold text-black mt-6">Encontre Quadras</h2>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          Navegue por centenas de quadras esportivas disponíveis na sua região. Filtre por cidade, estado e tipo de esporte.
        </p>

        <div className="flex items-center justify-between mt-8">
          <button className="text-gray-300 cursor-not-allowed p-2" disabled>
            <ChevronLeft size={28} />
          </button>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === 1 ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>

          <button className="text-blue-600 p-2 rounded-full hover:bg-blue-100" onClick={() => setScreen('onboarding2')}>
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Tela 2
const OnboardingScreen2 = ({ setScreen }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-green-300 p-8 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 m-4 text-gray-400 hover:text-gray-700" onClick={() => setScreen('login')}>
          <X size={24} />
        </div>

        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <Calendar size={48} className="text-white" />
        </div>

        <h2 className="text-2xl font-bold text-black mt-6">Agende Facilmente</h2>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          Reserve quadras em poucos cliques. Escolha data, horário e convide seus amigos para jogar junto.
        </p>

        <div className="flex items-center justify-between mt-8">
          <button className="text-blue-600 p-2 rounded-full hover:bg-blue-100" onClick={() => setScreen('onboarding1')}>
            <ChevronLeft size={28} />
          </button>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === 2 ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>

          <button className="text-blue-600 p-2 rounded-full hover:bg-blue-100" onClick={() => setScreen('login')}>
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Tela 3
const LoginScreen = ({ setScreen }) => {
  return (
    <div className="flex flex-col min-h-full bg-white">
      <div className="flex-grow flex flex-col items-center justify-center p-8 space-y-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">Bem-vindo!</h1>
        
        <Input 
          icon={<User size={20} />}
          placeholder="Usuário" 
        />
        
        <Input 
          icon={<Lock size={20} />}
          placeholder="Senha"
          type="password"
        />

        <a href="#" className="text-sm text-blue-600 hover:underline self-start">
          Esqueceu sua senha?
        </a>

        <div className="w-full pt-4 space-y-4">
          <Button variant="outline" onClick={() => setScreen('profile')}>
            Login
          </Button>
          <Button variant="solid" onClick={() => setScreen('emailVerification')}>
            Cadastrar
          </Button>
        </div>
      </div>
      <GeometricFooter />
    </div>
  );
};

// Tela 4
const EmailVerificationScreen = ({ setScreen }) => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputsRef = React.useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== '' && index < 4) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-white">
      <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
        <div className="p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-black mb-3">Verifique seu Email</h2>
          <p className="text-sm text-gray-600 mb-8 max-w-xs">
            Enviamos um código para seu endereço para que possamos confirmar sua identidade.
          </p>

          <div className="flex justify-center space-x-2 md:space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => inputsRef.current[index] = el}
                type="tel"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          <Button 
            variant="solid" 
            className="mt-8"
            onClick={() => setScreen('profile')} 
          >
            Confirmação
          </Button>
        </div>
      </div>
      <GeometricFooter />
    </div>
  );
};

// --- Componentes tela 5 ---
const CourtCard = ({ img, type, typeColor, name, location, icons, price }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
    <div className="relative">
      <img 
        src={img} 
        alt={name} 
        className="w-full h-40 object-cover" 
        onError={(e) => e.target.src = 'https://placehold.co/600x400/e0e0e0/757575?text=Quadra'}
      />
      <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold ${typeColor}`}>
        {type}
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500 flex items-center mt-1">
        <MapPin size={14} className="mr-1.5" /> {location}
      </p>
      <div className="flex space-x-4 text-sm text-gray-600 mt-3">
        {icons.map((icon, index) => (
          <span key={index} className="flex items-center">
            {icon.icon} <span className="ml-1.5">{icon.label}</span>
          </span>
        ))}
      </div>
      <div className="border-t border-gray-100 mt-4 pt-4 flex items-center justify-between">
        <div>
          <span className="text-xl font-bold text-gray-900">R$ {price}</span>
          <span className="text-sm text-gray-500"> / hora</span>
        </div>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700">
          Reservar
        </button>
      </div>
    </div>
  </div>
);

// Tela 5
const SearchScreen = ({ setScreen }) => {
  const courts = [
    { 
      img: 'https://placehold.co/600x400/2E7D32/FFFFFF?text=Quadra+de+Tênis', 
      type: 'Tênis', 
      typeColor: 'bg-green-600',
      name: 'Arena Sports Center',
      location: 'Anápolis, GO',
      icons: [
        { icon: <Shirt size={14} />, label: 'Vestiário' },
        { icon: <ParkingCircle size={14} />, label: 'Estacionamento +2' },
      ],
      price: '150,00' 
    },
    { 
      img: 'https://placehold.co/600x400/1E88E5/FFFFFF?text=Quadra+de+Vôlei', 
      type: 'Vôlei', 
      typeColor: 'bg-blue-600',
      name: 'Quadra do Parque',
      location: 'R. Floro Ramos, 363-233 - Jundiaí',
      icons: [
        { icon: <Shirt size={14} />, label: 'Vestiário' },
        { icon: <ParkingCircle size={14} />, label: 'Estacionamento +2' },
      ],
      price: '150,00' 
    },
  ];

  return (
    <div className="min-h-full bg-gray-50">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900">Encontre sua Quadra</h1>
        <p className="text-md text-gray-600 mt-1">Reserve quadras esportivas na sua cidade</p>
      </div>

      <div className="p-6 bg-white shadow-sm border-y border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <Select label="Estado">
            <option>Goiás</option>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
          </Select>
          <Select label="Cidade">
            <option>Anápolis</option>
            <option>Goiânia</option>
          </Select>
        </div>
        <Select label="Tipo de Quadra" className="mt-4">
          <option>Todos os Tipos</option>
          <option>Tênis</option>
          <option>Vôlei</option>
          <option>Futebol</option>
        </Select>
        <Input 
          icon={<Search size={20} />}
          placeholder="Busque pelo nome"
          className="mt-4"
        />
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-600 mb-4">Foram encontradas {courts.length} quadras</p>
        <div className="space-y-6">
          {courts.map((court, index) => (
            <CourtCard key={index} {...court} />
          ))}
        </div>
      </div>

      <div className="p-6 text-center text-gray-500 text-xs border-t border-gray-200 mt-6">
        <p className="font-semibold">Talvez a quadra que esteja procurando ainda não seja uma afiliada a nosso site</p>
        <p className="mt-2">
          Nos informe a localização e seu nome, seu feedback vai nos ajudar a trazer cada vez mais quadras, demonstrar seu interesse deixa mais fácil levá-la até você
        </p>
      </div>

      <Button variant="ghost" className="mt-4" onClick={() => setScreen('history')}>
        Ver Histórico (Simulação) <ArrowRight size={16} className="ml-2" />
      </Button>
    </div>
  );
};

// --- Componentes tela 6 ---
const ReservationHistoryCard = ({ name, date, members, status, progress, paid, total }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'Parcial':
        return {
          barBg: 'bg-green-200',
          barFill: 'bg-green-500',
          badge: 'bg-green-100 text-green-700',
          text: 'text-green-700'
        };
      case 'Pago':
        return {
          barBg: 'bg-green-500',
          barFill: 'bg-green-500',
          badge: 'bg-green-600 text-white',
          text: 'text-green-600'
        };
      case 'Cancelado':
        return {
          barBg: 'bg-gray-200',
          barFill: 'bg-gray-400',
          badge: 'bg-black text-white',
          text: 'text-gray-500'
        };
      default:
        return {
          barBg: 'bg-gray-200',
          barFill: 'bg-gray-500',
          badge: 'bg-gray-100 text-gray-700',
          text: 'text-gray-700'
        };
    }
  };
  
  const styles = getStatusStyles();

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${styles.badge}`}>
          {status}
        </span>
      </div>
      <div className="flex items-center text-gray-600 text-sm space-x-5 mb-4">
        <span className="flex items-center">
          <CalendarDays size={16} className="mr-1.5" /> {date}
        </span>
        <span className="flex items-center">
          <Users size={16} className="mr-1.5" /> {members} membros
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className={`text-sm font-semibold ${styles.text}`}>{progress}%</span>
          <span className="text-sm text-gray-500">
            R${paid} / R${total}
          </span>
        </div>
        <div className={`w-full h-2 rounded-full ${styles.barBg} overflow-hidden`}>
          <div 
            className={`h-full rounded-full ${styles.barFill}`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Tela 6
const HistoryScreen = ({ setScreen }) => {
  const history = [
    { name: 'Arena Solar', date: '09/05', members: 7, status: 'Parcial', progress: 70, paid: '140,00', total: '200,00' },
    { name: 'Arena Solar', date: '09/05', members: 7, status: 'Pago', progress: 100, paid: '300,00', total: '300,00' },
    { name: 'Arena Solar', date: '09/05', members: 7, status: 'Cancelado', progress: 0, paid: '0,00', total: '100,00' },
  ];

  return (
    <div className="flex flex-col min-h-full bg-gray-100">
      <div className="p-6 flex-grow">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Histórico de Reservas</h1>
        <div className="space-y-5">
          {history.map((item, index) => (
            <ReservationHistoryCard key={index} {...item} />
          ))}
        </div>
        
        <button className="w-full flex items-center justify-center py-4 text-gray-700 font-semibold mt-6 hover:bg-gray-200 rounded-lg">
          Mais <ChevronDown size={20} className="ml-1" />
        </button>
      </div>

      <Button variant="ghost" className="mt-4" onClick={() => setScreen('profile')}>
        Ver Perfil (Simulação) <ArrowRight size={16} className="ml-2" />
      </Button>

      <GeometricFooter />
    </div>
  );
};

// Tela 7
const ProfileScreen = ({ setScreen }) => {
  return (
    <div className="flex flex-col min-h-full bg-gray-100">
      <GeometricHeader 
        userName="Lucas"
        profilePicUrl="https://placehold.co/64x64/333333/FFFFFF?text=L"
      />
      
      <main className="flex-grow p-6 -mt-16 relative z-20 space-y-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5">
          <p className="text-sm font-semibold text-gray-500 mb-2">Quadra Sport mandou uma mensagem</p>
          <p className="text-gray-800">
            “Boa tarde, você consegue chegar 10 minutos mais cedo?”
          </p>
        </div>

        {/* Seção Minhas Reservas */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">Minhas Reservas</h2>
          <p className="text-sm text-gray-500 mt-1">Próximas reservas 14/08 - Quadra Central</p>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 mt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quadra de Esportes Fortes</h3>
            <div className="flex justify-between text-center mb-4">
              <div>
                <p className="text-xs text-gray-500">Total Pago</p>
                <p className="text-xl font-bold text-green-600">R$ 46,90</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">A Receber</p>
                <p className="text-xl font-bold text-red-600">R$ 290,10</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-600 space-x-3">
                <span className="flex items-center"><CalendarDays size={16} className="mr-1.5" /> Hoje</span>
                <span className="flex items-center"><Users size={16} className="mr-1.5" /> 12 membros</span>
              </div>
              <div className="flex -space-x-2">
                <img src="https://placehold.co/32x32/ffc107/FFFFFF?text=A" alt="Membro 1" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://placehold.co/32x32/f44336/FFFFFF?text=B" alt="Membro 2" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://placehold.co/32x32/4caf50/FFFFFF?text=C" alt="Membro 3" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Reservas Ativas Dropdown */}
        <Select label="Reservas Ativas">
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        
        <Button variant="outline" className="mt-8" onClick={() => setScreen('search')}>
          Buscar Quadras (Simulação)
        </Button>
         <Button variant="ghost" className="mt-4" onClick={() => setScreen('onboarding1')}>
          Voltar ao Onboarding
        </Button>
      </main>

      <GeometricFooter />
    </div>
  );
};


// --- Componente Principal ---
export default function App() {
  const [screen, setScreen] = useState('onboarding1');

  const renderScreen = () => {
    switch (screen) {
      case 'onboarding1':
        return <OnboardingScreen1 setScreen={setScreen} />;
      case 'onboarding2':
        return <OnboardingScreen2 setScreen={setScreen} />;
      case 'login':
        return <LoginScreen setScreen={setScreen} />;
      case 'emailVerification':
        return <EmailVerificationScreen setScreen={setScreen} />;
      case 'search':
        return <SearchScreen setScreen={setScreen} />;
      case 'history':
        return <HistoryScreen setScreen={setScreen} />;
      case 'profile':
        return <ProfileScreen setScreen={setScreen} />;
      default:
        return <OnboardingScreen1 setScreen={setScreen} />;
    }
  };

  return (
    <div className="font-sans bg-gray-300 flex justify-center items-start min-h-screen py-0 md:py-10">
      <div className="relative w-full max-w-md min-h-screen md:min-h-[800px] md:max-h-[800px] bg-white shadow-2xl overflow-y-auto overflow-x-hidden md:rounded-3xl border-4 md:border-8 border-black">
        {renderScreen()}
      </div>
    </div>
  );
}
