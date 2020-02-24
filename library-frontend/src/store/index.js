import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/* almacenamiento donde se almacenan las varibalse que van a ser utilizadas
   por varios componentes de forma que estos puedan comunicarse
   Si agrego un socio por medio de un componente, que se actualice en todos los demás */

export default new Vuex.Store({
  /* estado: representa las variables que van a ser compartidas */
  state: {
    partners: [],
    books: [],
    loans: [],
    name: "",
  },
  /* mutaciones: estas funciones son las encargadas de alterar el contenido de un estado */
  mutations: {
    setPartners(state, objPartners) {
      state.partners = objPartners;
    },
    setBooks(state, objBooks) {
      state.books = objBooks;
    },
    setLoans(state, objLoans) {
      state.loans = objLoans;
    },
    setName(state, objName) {
      state.name = objName;
    },
  },
  /* acciones: son funciones que tienen asociada una operacion, cuando ocurre un cambio de estado, es como trigger que ejecuta
     la operacion y se la envia a la mutacion para que efectue el cambio */
  actions: {
    getPartners(context) {
      axios.get('http://localhost:8080/usuarios')
        .then(data => {
          context.commit('setPartners', data.data);
        })
        .catch(e => {
          console.log(e)
        })
    },
    getBooks(context) {
      axios.get('http://localhost:8080/libros')
        .then(data => {
          context.commit('setBooks', data.data);
        })
        .catch(e => {
          console.log(e)
        })
    },
    // cada vez que se modifica un prestamo eliminacion modificacion, se lanza esta accion para actualizar los datos de la store
    getLoans(context) {
      axios.get('http://localhost:8080/prestamos')
        .then(data => {
          context.commit('setLoans', data.data);
        })
        .catch(e => {
          console.log(e)
        })
    },
    getName(context) {
      axios.post('http://localhost:8080/login')
        .then(data => {
          context.commit('setName', data.data.username);
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
})
