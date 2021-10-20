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
    
    Login: async (user, password) => {
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

    Cadastro: async (nome, telefone, password) => {
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
}