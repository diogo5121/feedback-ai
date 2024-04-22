const pool = require("../Config/DB");

async function ConsultarFeedbacks(res) {
    try {
        const query = "SELECT * FROM feedback";
        const result = await pool.query(query);
        res.status(200).json({ feedbacks: result.rows });
    } catch (error) {
        console.error("Erro ao consultar feedbacks:", error);
        res.status(500).json({ error: "Erro ao consultar feedbacks no banco de dados" });
    }
}

module.exports = ConsultarFeedbacks;
