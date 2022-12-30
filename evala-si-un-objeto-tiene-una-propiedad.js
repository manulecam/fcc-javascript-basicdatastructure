let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea
  let contador = 0;
  const nombres = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
  //Bucle
  for(let i=0;i <= 3;i++) {
    if(nombres[i] in userObj){
      contador+=1;
    }
  }
  //Si los 4 nombres estan..
  if(contador==4) {
    return true;
  } else {
    return false;
  }
  // Cambia solo el código encima de esta línea
}

isEveryoneHere(users);