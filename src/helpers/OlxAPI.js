import Cookies from "js-cookie";
import QueryString from "qs";

const BASEAPI = 'http://alunos.b7web.com.br:501';

const apiFetchPost = async (endpoint, body) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }

    const response = await fetch(BASEAPI + endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const json = await response.json();

    if (json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchGet = async (endpoint, body = []) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }

    const response = await fetch(`${(BASEAPI + endpoint)}?${QueryString.stringify(body)}`);
    const json = await response.json();

    if (json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}


const OlxAPI = {
    login: async (email, passaword) => {
        const json = await apiFetchPost(
            '/user/signin',
            { email, passaword }
        );
        return json;
    },

    register: async (name, email, passaword, stateLoc) => {
        const json = await apiFetchPost(
            '/user/signup',
            { name, email, passaword, state: stateLoc }
        );
        return json;
    },

    getStates: async () => {
        const json = await apiFetchGet(
            '/states'
        );
        return json.states;
    }
};

export default () => OlxAPI;

//http://alunos.b7web.com.br:501