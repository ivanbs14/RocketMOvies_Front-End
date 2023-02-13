import { Search, Conteiner, Profile } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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
                    <strong>{user.name}</strong>
                </div>

                <img 
                    src={avatarUrl}
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