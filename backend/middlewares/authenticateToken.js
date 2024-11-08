import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    console.log('Cabeçalho Authorization:', authHeader);  // Verifique se o cabeçalho está chegando
    const token = authHeader && authHeader.split(' ')[1]; // Extrai o token do header

    if (!token) {
        return res.status(401).json({ success: false, message: 'Token não fornecido.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('Erro na verificação do token:', err);  // Log do erro
            return res.status(403).json({ success: false, message: 'Token inválido.' });
        }

        console.log('Token validado, usuário:', user);  // Log do payload do token

        req.user = user; // Salva as informações do usuário na requisição
        next(); // Prossegue para o próximo middleware ou rota
    });
};

export default authenticateToken;
