import { Search, Conteiner, Profile } from './styles';

import { Input } from '../../components/Input';

export function Header() {

    return(
        <Conteiner>
            <h1>NoteMovies</h1>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" />

            </Search>

            <Profile to="/profile">
                <div>
                    <strong>Ivan Barbosa</strong>
                    <a href='/'>Sair</a>
                </div>

                <img 
                    src="https://github.com/ivanbs14.png" 
                    alt="imagem do usuário" 
                />
            </Profile>

        </Conteiner>
    );
}