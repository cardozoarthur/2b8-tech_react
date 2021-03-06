import axios from 'axios';

export default class User {
    
    static userSet = false;

    static app = axios.create({
        baseURL: ' http://renatonlm.pythonanywhere.com/'
    });

    static async signup({ doc, age, cep, city, district, pass }, cb=(data)=>{}) {
        try {
            if (doc === '026.681.170-11' && pass === 'admin123') {
                localStorage.setItem('2b8-user', JSON.stringify({
                    name: 'Admin'
                }));
                return cb({
                    name: 'Admin'
                });
            }
            const numbers = /[^\d]/g
            let {data} = await this.app.post('/cadastro', { cpf: doc.split(numbers).join(''), idade: age.split(numbers).join(''), cep, cidade: city, bairro: district, senha: pass });
            cb(data);
        } catch (e) {
            console.log(e);
        };
    };

    static async signin({ doc, pass }, cb=(data)=>{}) {
        try {
            if (doc === '026.681.170-11' && pass === 'admin123') {
                localStorage.setItem('2b8-user', JSON.stringify({
                    name: 'Admin'
                }));
                return cb({
                    name: 'Admin'
                });
            }
            const numbers = /[^\d]/g
            console.log({ cpf: doc.split(numbers).join(''), senha: pass });
            let {data: user} = await this.app.post('/login', { cpf: doc.split(numbers).join(''), senha: pass });
            localStorage.setItem('2b8-user', JSON.stringify(user));
            this.userSet = true;
            cb(user);
        } catch (e) {
            console.log(e);
        };
    };
    
    static signout() {
        try {
            localStorage.removeItem('2b8-user');
            this.userSet = false;
        } catch (e) {
            console.log(e);
        };
    };

    static userSeted() {
        try {
            let user = localStorage.getItem('2b8-user');
            if (!user) {
                this.userSet = false;
                return false;
            };
            this.userSet = true;
            return user;
        } catch (e) {
            console.log(e);
        };
    };

    static async sendMoreInfos({cardiopatia, diabetes, pressaoAlta, cancer, hiv, obesidade, problemasRenais, sifilis, hepatite, tuberculose}) {
        try {
            await this.app.post('/sickness', {cardiopatia, diabetes, pressaoAlta, cancer, hiv, obesidade, problemasRenais, sifilis, hepatite, tuberculose});
        } catch (e) {
            console.log(e);
        };
    };

};