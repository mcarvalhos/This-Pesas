import react from 'react';
import ListaDeDespesas from './components/ListaDeDespesas';

function App() {
  return (
    <section>
      <form action="">
        <input type="text" placeholder="Título"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Escreva sua Despesa..."></textarea>
        <button>Criar nota</button>
      </form>
      <ListaDeDespesas />
    </section>
  );
}

export default App;
