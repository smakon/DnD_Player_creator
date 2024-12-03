import { classes_list } from '../../functions/dnd_info';
import { useState, useEffect } from 'react';

const ClassSelect = () => {
   const [classes, setClasses] = useState(
      [
         {
         name: '',
         url: '',
         index:''
         }
      ]
   )

   useEffect(() => {
      classes_list()
				.then(classes => {
					console.log(classes.data.results)
					setClasses(classes.data.results)
				})
				.catch(err => console.error(err))
   }, [])
   
   
   
   return (
			<>
         <select>
            {classes.map(cls => (
               <option key={cls.index} value={cls.index}>{cls.name}</option>
            ))}
         </select>
			</>
		)
}

export default ClassSelect;
