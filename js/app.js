//Milestone 1
  //● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
      //dall’interlocutore (bianco) assegnando due classi CSS diverse
  //● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
     //nome e immagine di ogni contatto


     //const app = Vue.createApp({
        
     const app = Vue.createApp({
        data() {
          return {
            contacts: [
              {
                id: 1,
                name: 'John Doe',
                image: 'img/image1.jpg',
                lastMessage: 'Hello there!'
              },
              {
                id: 2,
                name: 'Jane Smith',
                image: 'img/image2.jpg',
                lastMessage: 'How are you?'
              },
              {
                id: 3,
                name: 'Bob Johnson',
                image: 'img/image3.jpg',
                lastMessage: 'See you later!'
              },
              {
                id: 4,
                name: 'Bob Johnson',
                image: 'img/image3.jpg',
                lastMessage: 'See you later!'
              },
              {
                id: 5,
                name: 'Bob Johnson',
                image: 'img/image3.jpg',
                lastMessage: 'See you later!'
              },
              {
                id: 6,
                name: 'Bob Johnson',
                image: 'img/image3.jpg',
                lastMessage: 'See you later!'
              },
              {
                id: 7,
                name: 'Bob Johnson',
                image: 'img/image3.jpg',
                lastMessage: 'See you later!'
              },
              {
                id: 8,
                name: 'Bob Johnson',
                image: 'img/image3.jpg',
                lastMessage: 'See you later!'
              }


            ],
            messages: [
              {
                id: 1,
                text: 'Hello there!',
                isSentByUser: true
              },
              {
                id: 2,
                text: 'Hi!',
                isSentByUser: false
              },
              {
                id: 3,
                text: 'How are you?',
                isSentByUser: false
              }
            ],
            newMessageText: ''
          }
        },
      
      });       



      app.mount('#app');
    


