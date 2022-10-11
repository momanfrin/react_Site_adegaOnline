import React, { useCallback, useState } from 'react';
import * as C from './styles';

interface IFormState {
  nome: string,
  valor: number,
  descricao: string,
  quantidade: number,
  dataValidade: string,
  ativo: string,
  stayLoggedIn: boolean;
}

const FormProvider = () => {

  const [formState, setFormState] = useState<IFormState>({
    nome: '',
    valor: 0,
    descricao: '',
    quantidade: 0,
    dataValidade: '',
    ativo: '',
    stayLoggedIn: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { nome, valor, descricao, quantidade, dataValidade, ativo} = formState;

      if (!nome || !valor || !descricao || !quantidade|| !dataValidade || !ativo) {

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
      <C.Titulo>Produtos</C.Titulo>
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
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Valor</label>
              </C.InputTitle>
              <C.Input
                type='number'
                className='form-control'
                id='valor'
                name='valor'
                required
                value={formState.valor}

                onChange={(event) => setFormState({
                  ...formState,
                  valor: parseInt(event.currentTarget?.value) || 0,
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Descrição</label>
              </C.InputTitle>
              <C.Input
                type='txt'
                className='form-control'
                id='descricao'
                name='descricao'
                required
                value={formState.descricao}

                onChange={(event) => setFormState({
                  ...formState,
                  descricao: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Quantidade</label>
              </C.InputTitle>
              <C.Input
                type='number'
                className='form-control'
                id='quantidade'
                name='quantidade'
                required
                value={formState.quantidade}

                onChange={(event) => setFormState({
                  ...formState,
                  quantidade: parseInt(event.currentTarget?.value) || 0,
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Data Validade</label>
              </C.InputTitle>
              <C.Input
                type='number'
                className='form-control'
                id='dataValidade'
                name='dataValidade'
                required
                value={formState.dataValidade}

                onChange={(event) => setFormState({
                  ...formState,
                  dataValidade: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>

          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Ativo</label>
              </C.InputTitle>
              <C.Input
                type='text'
                className='form-control'
                id='ativo'
                name='ativo'
                required
                value={formState.ativo}

                onChange={(event) => setFormState({
                  ...formState,
                  ativo: event.currentTarget?.value || '',
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

export default FormProvider;