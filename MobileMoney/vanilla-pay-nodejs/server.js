require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { initPayment, getPaymentStatus } = require("./vanillaPay");

const app = express();
app.use(bodyParser.json());

// 🚀 Créer un paiement
app.post("/create-payment", async (req, res) => {
    try {
        const paymentId = await initPayment(req.body);
        res.json({ paymentId, paymentUrl: `https://moncompte.ariarynet.com/payer/${paymentId}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur lors de l'initialisation du paiement" });
    }
});

// 📢 Webhook de notification (paiement)
app.post("/payment-notification", (req, res) => {
    console.log("Notification reçue:", req.body);
    // 🔹 Décrypter les données ici si nécessaire
    res.sendStatus(200);
});

// 📊 Vérifier le statut
app.get("/payment-status/:id", async (req, res) => {
    try {
        const status = await getPaymentStatus(req.params.id);
        res.json(status);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur lors de la récupération du statut" });
    }
});

app.listen(3000, () => console.log("✅ Serveur démarré sur http://localhost:3000"));
