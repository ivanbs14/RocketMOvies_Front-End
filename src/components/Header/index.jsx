import { Search, Conteiner, Profile } from './styles';
import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

export function Header() {
    const { signOut } = useAuth();

    function handleProfile() {
        return signOut
    }

    return(
        <Conteiner>
            <h1>NoteMovies</h1>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" />

            </Search>

            <Profile to="/profile">
                <div>
                    <strong>Ivan Barbosa</strong>
                </div>

                <img 
                    src="https://github.com/ivanbs14.png" 
                    alt="imagem do usuário" 
                />
            </Profile>
            
            <ButtonText 
                title="Voltar" 
                onClick={signOut}
            />

        </Conteiner>
    );
}