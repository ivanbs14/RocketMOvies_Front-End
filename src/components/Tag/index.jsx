import { Conteiner } from "./styles";

export function Tag({ title, ...rest }) {

    return (
        <Conteiner {...rest}>
            {title}
        </Conteiner>
    )
}