// This file allows test if the eslint configuration is valid

(function() {

  let switchCase = 'case';

  function thing() {
    let wat;

    if (switchCase !== true) {
      wat = 1 + 2;
    } else if (
      switchCase
    ) {
      switchCase = 'nope';
    }

    switchCase = wat;
  }

  function chain() {
    return {
      chain: chain,
    };
  }

  thing();

  chain.chain().chain();

  chain
    .chain()
    .chain();

  switch (switchCase) {
    case 'case':
      thing();
      break;
    default:
      return true;
  }

  new window.Promise((resolve) => {
    resolve();
  })
    .then(() => true)
    .then(() => {
      throw new Error(false);
    })
    .catch(error => error);

})();
