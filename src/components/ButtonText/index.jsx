import { Conteiner } from './styles';

export function ButtonText({ title, isActive, ...rest }) {

    return (
        <Conteiner 
            type='button'
            isActive={isActive}
            { ...rest}
        >
            {title}
        </Conteiner>
    )
}