import React, { useCallback, useState } from 'react';
import Header from '../Header';
import * as C from './styles';

interface IFormState {
  nome: string,
  sobrenome: string,
  telefone: string,
  logradouro: string,
  numero: string,
  complemento: string,
  bairro: string,
  cep: string,
  stayLoggedIn: boolean;
}

const FormClient = () => {

  const [formState, setFormState] = useState<IFormState>({
    nome: '',
    sobrenome: '',
    telefone: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    stayLoggedIn: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { nome, sobrenome, telefone, logradouro, numero, complemento, bairro, cep} = formState;

      if (!nome || !sobrenome || !telefone || !logradouro|| !numero || !complemento|| !bairro || !cep) {

        window.alert('Preencha todos os campos!');

        setIsLoggedIn(false);

        return;
      }

      setIsLoggedIn(true);
    },
    [formState]
  );
  return (
    
    <C.Container>
      <C.Titulo>Cliente</C.Titulo>
      <div className='container mt-5'>
        <form onSubmit={handleSubmit}>
          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Nome</label>
              </C.InputTitle>
              <C.Input
                type='txt'
                className='form-control'
                id='nome'
                name='nome'
                required
                value={formState.nome}

                onChange={(event) => setFormState({
                  ...formState,
                  nome: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Sobrenome</label>
              </C.InputTitle>
              <C.Input
                type='text'
                className='form-control'
                id='sobrenome'
                name='sobrenome'
                required
                value={formState.sobrenome}

                onChange={(event) => setFormState({
                  ...formState,
                  sobrenome: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Telefone</label>
              </C.InputTitle>
              <C.Input
                type='number'
                className='form-control'
                id='telefone'
                name='telefone'
                required
                value={formState.telefone}

                onChange={(event) => setFormState({
                  ...formState,
                  telefone: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Logradouro</label>
              </C.InputTitle>
              <C.Input
                type='text'
                className='form-control'
                id='logradouro'
                name='logradouro'
                required
                value={formState.logradouro}

                onChange={(event) => setFormState({
                  ...formState,
                  logradouro: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Número</label>
              </C.InputTitle>
              <C.Input
                type='number'
                className='form-control'
                id='numero'
                name='numero'
                required
                value={formState.numero}

                onChange={(event) => setFormState({
                  ...formState,
                  numero: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Complemento</label>
              </C.InputTitle>
              <C.Input
                type='text'
                className='form-control'
                id='complemento'
                name='complemento'
                required
                value={formState.complemento}

                onChange={(event) => setFormState({
                  ...formState,
                  complemento: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Bairro</label>
              </C.InputTitle>
              <C.Input
                type='text'
                className='form-control'
                id='bairro'
                name='bairro'
                required
                value={formState.bairro}

                onChange={(event) => setFormState({
                  ...formState,
                  bairro: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>CEP</label>
              </C.InputTitle>
              <C.Input
                type='number'
                className='form-control'
                id='cep'
                name='cep'
                required
                value={formState.cep}

                onChange={(event) => setFormState({
                  ...formState,
                  cep: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          
        </form>
      </div>
      <C.Button>Enviar</C.Button>
    </C.Container>
  );
};

export default FormClient;