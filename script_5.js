const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
  let countBook = books.length;
  let listMoreThanOneRental = books.filter(book => book.rented >= 1);
  let countMoreThanOneRental = listMoreThanOneRental.length;
  let howManyNeverRented = countBook - countMoreThanOneRental;
  console.log(howManyNeverRented);

  console.log("Quel est livre le plus emprunté ?");
  let orderByRental = books.sort((a,b) => b.rented - a.rented);
  console.log(orderByRental[0]);

  console.log("Quel est livre le moins emprunté ?");
  console.log(orderByRental[books.length - 1]);

  console.log("Trouve le livre avec l'ID: 873495");
  let searchedBook = books.filter(book => book.id == 873495);
  console.log(searchedBook);

  console.log("Supprime le livre avec l'ID: 1337125");
  let indexDelete = books.findIndex(book => book.id == 133712);
  console.log(indexDelete);
  let slicedBookArray = books.splice(indexDelete,1);
  Console.log(slicedBookArray);
  console.log(books);

  console.log("");
  let orderedSpicedBookArray = books.sort((a,b) => a.id - b.id);
  console.log(orderedSpicedBookArray);

