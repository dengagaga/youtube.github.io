import { defineStore } from 'pinia'
import axios from 'axios'

export  const useAutorizationStore = defineStore('AutorizationStore', () => {

    const person = ref([])
    const router = useRouter();
    const getPerson = (login, password) => {
        axios.post('https://41b866c117497632.mokky.dev/auth', {
            login:login,
            password:password,
          })
          .then(function (response) {
            person.value = response.data.data
            const token = response.data.token
            localStorage.setItem('person', JSON.stringify(person.value))
            localStorage.setItem('personToken', JSON.stringify(token))
            router.push('/')
          })
          .catch(function (error) {
            console.log(error);
          });
      
    }
    const registrationPerson = (login, password, fullName, age, email, number, img) => {
      axios.post('https://41b866c117497632.mokky.dev/register', {
          login:login,
          password:password,
          fullName:fullName,
          age:age,
          email:email,
          number:number,
          img:img,
        })
        .then(function (response) {
          person.value = response.data.data
          const token = response.data.token
          localStorage.setItem('person', JSON.stringify(person.value))
          localStorage.setItem('personToken', JSON.stringify(token))
          router.push('/')
        })
        .catch(function (error) {
          console.log(error);
        });

    }
    return {  getPerson,  registrationPerson,   person}
})