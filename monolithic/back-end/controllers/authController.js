async function register(req, res) {
    console.log(req.body);
    res.json(req.body);
}

async function login(req, res) {

}

export default {
    register,
    login
}