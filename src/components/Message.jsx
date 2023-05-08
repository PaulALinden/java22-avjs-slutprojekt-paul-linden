
export default function MessageComponent({ status, setStatus }) {

  let message;

  switch (status) {
    case 'empty':
      message = 'Cart is empty';
      break;
    case 'outOfBalance':
      message = 'Product is out of balance';
      break;
    case 'error':
    case 'noData':
      message = 'An error occurred, try again later';
      break;
    default:
      message = '';
      break;
  }
  

  function returnToPage() {
    setStatus('');
  }

  return (
    <div id="statusMessage">
      <section>
        <h2>{message}</h2>
        <button onClick={returnToPage}>Return</button>
      </section>
    </div>
  );
};
