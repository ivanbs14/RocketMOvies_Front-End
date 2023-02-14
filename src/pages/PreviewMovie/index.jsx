import { useState, useEffect } from "react";
import { Conteiner, Content, Profile } from "./styles";

import { useAuth } from '../../hooks/auth';

import { api } from "../../services/api";

import moment from 'moment-timezone';

import { Link, useParams, useNavigate } from "react-router-dom";

import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function PreviewMovie() {
  const [dataMovie, setDataMovie] = useState([]);
  
  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const formattedDate = moment.utc(dataMovie.update_at).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');

  function handleBack() {
    navigate(-1)
  }

  async function handleRemoveMovie() {
    const confirm = window.confirm("Deseja remover o filme?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);
      setDataMovie(response.data)
    }

    fetchMovie();
  })

  return (
    <Conteiner>
      <Header>
        <Input 
            placeholder="Pesquisar pelo título"
          />
      </Header>

      {
        dataMovie &&
        <main>
          <Content>
            <Link to={handleBack}>
              < FiArrowLeft />
              Voltar
            </Link>

            <Section title={dataMovie.title} >
              <Rating grade={dataMovie.rating} isBigSize />
              <Profile to="/profile">
                <img 
                    src={avatarURL} 
                    alt={user.name} 
                />

                <div className="subtitle">
                    <strong>Por {user.name}</strong>
                    <strong>
                      <FiClock />
                    
                    </strong>
                    <p>
                        {formattedDate}
                    </p>
                </div>
              </Profile>
            </Section>
              
            {
              dataMovie.tags &&
              <div>
                {
                  dataMovie.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </div>
            }

            <p>
              {dataMovie.description}
            </p>

            <Button 
                title="Excluir Filme" 
                onClick={handleRemoveMovie}
            />

          </Content>
        </main>
      }
    </Conteiner>
  )
}