import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Link } from "react-router-dom";

import { Conteiner, Form, Avatar } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {

    return(
        <Conteiner>
            <header>
                <Link to="/">
                    < FiArrowLeft />
                    Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/ivanbs14.png" 
                        alt="imagem do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                            id='avatar'
                            type="file" 
                        />
                    </label>
                </Avatar>

                <Input 
                     placeholder="Nome"
                     type="text"
                     icon={FiUser} 
                />
                
                <Input 
                     placeholder="E-mail"
                     type="text"
                     icon={FiMail} 
                />
                
                <Input 
                     placeholder="Senha atual"
                     type="password"
                     icon={FiLock} 
                />

                <Input 
                     placeholder="Nova senha"
                     type="password"
                     icon={FiLock} 
                />

                <Button title="Salvar"/>

            </Form>

        </Conteiner>
    )
}