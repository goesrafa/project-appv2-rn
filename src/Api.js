import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_API = 'http://10.0.2.2:8080';

export default {
    checkToken:async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await  req.json();
        return json;
    },
    
    signIn: async (user, password) => {
        
        const req = await fetch(`${BASE_API}/auth/login`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: user, password: password})
        });
        const json = await req.json();
        
        return json;
    },

    signUp: async (nome, telefone, password) => {
        const req = await fetch(`${BASE_API}/user`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: nome, phone_number: telefone, password: password})
        });
        const json = await req.json();
        return json;
    },
    

    getHospital : async (lat=null, lng=null, address=null) => {
        const token = await AsyncStorage.getItem('token');

        /**mostrar a longitude e a latitude sendo nula ou enviada pelo usuário */

        console.log("LAT", lat);
        console.log("LNG", lng);
        console.log("ADDRESS", address) 

        const req = await fetch(`${BASE_API}/hospital?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
        const json = await req.json();
        return json;
    }
}