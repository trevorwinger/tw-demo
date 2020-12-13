import Test from './components/Test';
import goldy from './images/goldy.gif';
import goldy_hockey from './images/goldy_hockey.png';
import old_goldy from './images/old-goldy.jpg';


function App() {
  const test = [
    {name:'goldy gif', body:'making a test with the goldy gif', image:goldy},
    {name:'goldy hockey', body:'making a card with goldy hockey', image:goldy_hockey},
    {name:'old goldy', body:'making another card with an older goldy', image:old_goldy}]
  return (
    <div>
      <h1 class="text-4xl text-gray-700 text-center">Goldy Cards</h1>
      <div class="flex w-screen">
        {test.map(t =>
          <Test name={t.name} body={t.body} image={t.image}/>
        )}
        </div>
    </div>
  );
}

export default App;
