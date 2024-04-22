const pool = require("../Config/DB");

async function InserirFeedBack(name, comentario, rate, res) {
    console.log(name, comentario, rate);
    try {
        const query = "INSERT INTO feedback (name, feedback, nota, date) VALUES ($1, $2, $3, CURRENT_DATE)";
        await pool.query(query, [sanitizeInput(name), sanitizeInput(comentario), parseFloat(rate)]);
        res.status(200).json({ message: "Feedback inserido com sucesso!" });
    } catch (error) {
        console.error("Erro ao inserir feedback:", error);
        res.status(500).json({ error: "Erro ao inserir feedback no banco de dados" });
    }
}

function sanitizeInput(input) {
    const sanitizedInput = input.replace(/[;'"\\]/g, ''); 
    return sanitizedInput;
}

module.exports = InserirFeedBack;
