import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import { Conteiner, Form } from './styles';

export function NewMovie() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemove(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewMovie() {
        await api.post("/notes", {
            title,
            rating,
            tags,
            description,
        });

        alert("Nota criada com sucesso!");
    }

    function handleDiscardMovie() {
        const userConfirmation = confirm(
          "Todas as alterações serão perdidas... Tem certeza que deseja descartar e voltar?"
        );
    
        if (userConfirmation) {
          navigate(-1);
        }
      }
   
    return(
        <Conteiner>
            <Header>
                <Input 
                    placeholder="Pesquisar pelo título"
                />
            </Header>

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
                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <Textarea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />
                    
                    <Section title="Marcadores">
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemove(tag)}
                                    />
                                ))
                            }

                            <NoteItem 
                                isNew 
                                placeholder="Nova tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div className="btn">
                        <Button 
                            title="Descartar e voltar" 
                            onClick={handleDiscardMovie}
                        />

                        <Button 
                            title="Salvar alterações" 
                            onClick={handleNewMovie}
                        />
                    </div>
                </Form>
            </main>
        </Conteiner>
    )
}