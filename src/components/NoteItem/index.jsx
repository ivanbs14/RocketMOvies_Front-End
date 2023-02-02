import { FiPlus, FiX } from 'react-icons/fi';

import { Conteiner } from './style';

export function NoteItem({ isNew, value, onClick, ...rest }) {
    return(
        <Conteiner isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                type='button'
                onClick={onClick}
                className={ isNew ? 'button-add' : 'button-delete'}
            >
                { isNew ? <FiPlus /> : <FiX />}
            </button>
        </Conteiner>
    )
}