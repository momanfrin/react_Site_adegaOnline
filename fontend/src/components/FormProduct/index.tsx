import React, { useCallback, useState } from 'react';
import * as C from './styles';

interface IFormState {
  cnpj: string,
  razaoSocial: string,
  email: string,
  telefone: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  cep: string,
  stayLoggedIn: boolean;
}

const FormProduct = () => {

  const [formState, setFormState] = useState<IFormState>({
    cnpj: '',
    razaoSocial: '',
    email: '',
    telefone: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    cep: '',
    stayLoggedIn: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { cnpj, razaoSocial, email, telefone, logradouro, complemento, cep, bairro} = formState;

      if (!cnpj || !razaoSocial || !email || !telefone|| !logradouro || !complemento|| !cep || !bairro) {

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
      <C.Titulo>Fornecedor</C.Titulo>
      <div className='container mt-5'>
        <form onSubmit={handleSubmit}>
          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>CNPJ</label>
              </C.InputTitle>
              <C.Input
                type='number'
                className='form-control'
                id='cnpj'
                name='cnpj'
                required
                value={formState.cnpj}

                onChange={(event) => setFormState({
                  ...formState,
                  cnpj: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Razão Social</label>
              </C.InputTitle>
              <C.Input
                type='number'
                className='form-control'
                id='razaoSocial'
                name='razaoSocial'
                required
                value={formState.razaoSocial}

                onChange={(event) => setFormState({
                  ...formState,
                  razaoSocial: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Email</label>
              </C.InputTitle>
              <C.Input
                type='text'
                className='form-control'
                id='email'
                name='email'
                required
                value={formState.email}

                onChange={(event) => setFormState({
                  ...formState,
                  email: event.currentTarget?.value || '',
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

export default FormProduct;