import { Conteiner } from './style';
import { Tag } from '../Tag'
import { Rating } from '../Rating';

export function Note({ data, title, rating, description, tags, ...rest }) {

    return (
        <Conteiner {...rest}>
            <h3>{data.title}</h3>
            
            <Rating grade={data.rating} isBigSize={false}/>

            <div className='text'>
                <p>{data.comments}</p>
            </div>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => 
                            <Tag key={tag.id}
                                title={tag.name}
                            />
                        )
                    }
                </footer>
            }
        </Conteiner>
    )
}