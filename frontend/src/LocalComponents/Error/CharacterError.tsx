import { useNavigate } from 'react-router-dom';
import '../../Scss/Error/characterError.css';

const CharacterError = () => {
   const navigate = useNavigate();

   return (
      <div className="character-error-container">
         <div className="character-error-box">
            <h1 className="character-error-title">Такого персонажа не существует!</h1>
            <p className="character-error-message">К сожалению, запрашиваемый персонаж не найден в базе данных.</p>
            <button 
               className="character-error-button"
               onClick={() => navigate('/')}
            >
               Вернуться на главную
            </button>
         </div>
      </div>
   );
}

export default CharacterError;
