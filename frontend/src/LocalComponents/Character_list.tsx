import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterList = () => {
   let { id } = useParams();
   // TODO: Заполнить
   return (
      <div>
         <h2>Character List { id }</h2>
      </div>
   );
}

export default CharacterList;
