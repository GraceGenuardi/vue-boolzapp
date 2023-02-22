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
                name: 'Deny',
                image: 'img/image1.jpg',
                lastMessage: 'Ci sei per dare fuoco a qualcosa più tardi?'
              },
              {
                id: 2,
                name: 'Cesira',
                image: 'img/image2.jpg',
                lastMessage: 'Personalmente, sceglierò la violenza..'
              },
              {
                id: 3,
                name: 'Jonny',
                image: 'img/image3.jpg',
                lastMessage: 'Guarda, io non so nulla.'
              },
              {
                id: 4,
                name: 'Jonny',
                image: 'img/image3.jpg',
                lastMessage: '....'
              },
              {
                id: 5,
                name: 'bu',
                image: 'img/image3.jpg',
                lastMessage: '...'
              },
              {
                id: 6,
                name: 'bu',
                image: 'img/image3.jpg',
                lastMessage: '...'
              },
              {
                id: 7,
                name: 'Bu',
                image: 'img/image3.jpg',
                lastMessage: '...'
              },
              {
                id: 8,
                name: 'Bu',
                image: 'img/image3.jpg',
                lastMessage: '...'
              }


            ],
            messages: [
              {
                id: 1,
                text: 'Buongiorno cara, caffettino più tardi?🌻',
                isSentByUser: true
              },
              {
                id: 2,
                text: 'Buongiorno a te',
                isSentByUser: false
              },
              {
                id: 3,
                text: 'Caffè? Non è meglio na birretta?🍻',
                isSentByUser: false
              }
            ],
            newMessageText: ''
          }
        },

        methods: {
            sendMessage() {
              if (this.newMessageText) {
                this.messages.push({
                  id: this.messages.length + 1,
                  text: this.newMessageText,
                  isSentByUser: true
                });
                this.newMessageText = '';
              }
            }
          }
      
      });       



      app.mount('#app');
    


