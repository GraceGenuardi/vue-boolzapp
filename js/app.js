

     


    
     //const app = Vue.createApp({
       //MILSTONE 1 parte grafica + v for nomi e contatti 
       const app = Vue.createApp({
        data() {
          return {
            contacts: [
              {
                id: 1,
                name: 'Daeny',
                image: 'img/image1.jpg',
                lastMessage: 'Ci sei per dare fuoco a qualcosa più tardi?🐉',
                isActive: true, // nuova proprietà per gestire lo stato di Daeny
                
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
                name: 'Tyrion',
                image: 'img/image4.jpg',
                lastMessage: 'Beviamo qualcosa stasera?🍷'
              },
              {
                id: 5,
                name: 'Sansina Mia',
                image: 'img/image5.jpg',
                lastMessage: 'Arya mi sta facendo perdere la pazienza!'
              },
              {
                id: 6,
                name: 'Margeryna',
                image: 'img/image6.jpg',
                lastMessage: 'Domani andiamo a fare shopping, ho bisogno di scarpe nuove🌹'
              },
              {
                id: 7,
                name: 'Arya',
                image: 'img/image7.jpg',
                lastMessage: 'Ho litigato con Sansa'
              },
              {
                id: 8,
                name: 'Brandon',
                image: 'img/image8.jpg',
                lastMessage: 'Passeggiata?'
              },
              {
                id: 9,
                name: 'Stannis',
                image: 'img/image9.jpg',
                lastMessage: 'No.'
              },

              
            ],
            messages: [
              {
                id: 1,
                text: 'Buongiorno cara, come stai oggi?🔔',
                isSentByUser: true
              },
              {
                id: 2,
                text: 'Buongiorno a te',
                isSentByUser: false
              },
              {
                id: 3,
                text: 'Ci sei per dare fuoco a qualcosa più tardi?🐉',
                isSentByUser: false
              }
            ],
            newMessageText: ''
          }

          //MILSTONE 3: Messaggio send + risposta
          return {
            messages: [],
            newMessageText: '',
          };
        },

        methods: {

              

            sendMessage() {
                if (!this.newMessageText) {
                    return;
                  }
                  const newMessage = {
                    text: this.newMessageText,
                    isSentByUser: true,
                    timestamp: Date.now(),
                  };
                  this.messages.push(newMessage);
                  this.newMessageText = '';
                  setTimeout(() => {
                    const responseMessage = {
                      text: 'Okay, va bene!',
                      isSentByUser: false,
                      timestamp: Date.now(),
                    };
                    this.messages.push(responseMessage);
                  }, 1000);
            },

            getActiveContact() {
              return this.contacts.find(contact => contact.isActive);
          },//MILSTONE 2 : RECUPERO CONTATTO ACTIVED

          showConversation(index) {
            this.contacts.forEach((contact, i) => {
              contact.isActive = i === index;
            });
          }

          }
      
      });       



      app.mount('#app');
  