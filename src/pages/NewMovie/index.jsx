import { Link } from "react-router-dom";

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import { Conteiner, Form } from './styles';

export function NewMovie() {
   
    return(
        <Conteiner>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/">
                            < FiArrowLeft />
                            Voltar
                        </Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="title">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>

                    <Textarea placeholder="Observações"/>
                    
                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="Aventura"/>
                            <NoteItem isNew placeholder="Novo marcador"/>
                        </div>
                    </Section>

                    <div className="btn">
                        <Button title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Conteiner>
    )
}