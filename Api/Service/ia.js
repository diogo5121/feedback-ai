const axios = require('axios');

async function FazerIA(prompt, res) {
    try {
        const data = JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "Analise os feedbacks da minha empresa e retorne todos os problemas e soluções que a empresa deve adotar. Identifique todos os problemas e soluções. Segue os feedsbacks: " + JSON.stringify(prompt)
                },
            ]
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.openai.com/v1/chat/completions',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer {AUTORIZAÇÃO DA SUA IA}',
                'Cookie': '_cfuvid=jF747yBnUvJIyFV1QamBBsfd6ok3kT9AsVClHWPwPo0-1712862218845-0.0.1.1-604800000; __cf_bm=VxCA.3RvhrvYTbSU5f5ly_4UFP0.IWSORaRV4FW_Y8Y-1712863987-1.0.1.1-.NllDu30gXXYQG06OW6nFiSISCPmwBCNSECC258ixlmuQA2ogncCDQvoHrNf4Z6XnxXU3CqbRplaho3XRgubOw; _cfuvid=rYI.Uj3IOhxAiOqfLyMtO6Avpis85.qdOnUzT1.kLUY-1712864396743-0.0.1.1-604800000'
            },
            data: data
        };

        const response = await axios.request(config);
        const message = response.data.choices[0].message.content;

        res.status(200).json({ message });
    } catch (error) {
        console.error(error);
        res.status(500)
    }
}

module.exports = FazerIA;
