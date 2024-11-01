import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Pega o token do header

    if (!token) return res.sendStatus(401); // Se não houver token, retorna 401

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Se o token não for válido, retorna 403
        req.user = user; // Salva as informações do usuário na requisição
        next(); // Prossegue para o próximo middleware ou rota
    });
};

export default authenticateToken