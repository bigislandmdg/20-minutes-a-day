// server.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const { initPayment, decrypt3DES, getPaymentStatus } = require("./vanillaPay");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Fichier de sauvegarde des paiements
const paymentsFile = path.join(__dirname, "payments.json");

// Fonction utilitaire pour sauvegarder un paiement
function savePayment(paymentData) {
  let payments = [];

  // Charger l'existant
  if (fs.existsSync(paymentsFile)) {
    try {
      const raw = fs.readFileSync(paymentsFile, "utf-8");
      payments = JSON.parse(raw);
    } catch (err) {
      console.error("⚠️ Erreur lecture payments.json, recréation du fichier:", err.message);
    }
  }

  // Ajouter le nouveau paiement
  payments.push({
    ...paymentData,
    savedAt: new Date().toISOString(),
  });

  // Sauvegarder
  fs.writeFileSync(paymentsFile, JSON.stringify(payments, null, 2), "utf-8");
  console.log("💾 Paiement sauvegardé dans payments.json");
}

// Configuration
const {
  PUBLIC_KEY,
  PRIVATE_KEY,
  CLIENT_ID,
  CLIENT_SECRET,
  API_URL,
  SITE_URL,
} = process.env;

// Vérification des variables d'environnement
if (!PUBLIC_KEY || !PRIVATE_KEY || !CLIENT_ID || !CLIENT_SECRET || !API_URL || !SITE_URL) {
  console.error("❌ Erreur: Variables d'environnement manquantes!");
  process.exit(1);
}

// Endpoint de création de paiement
app.post("/create-payment", async (req, res) => {
  try {
    const requiredFields = ["nom", "montant", "unitemonetaire", "reference"];
    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: "Champs obligatoires manquants",
        missingFields,
      });
    }

    const paymentData = {
      unitemonetaire: req.body.unitemonetaire.trim(),
      adresseip: req.ip || "127.0.0.1",
      idpanier: req.body.idpanier || `CMD_${Date.now()}`,
      montant: parseFloat(req.body.montant),
      nom: req.body.nom.trim(),
      email: req.body.email?.trim() || "",
      reference: req.body.reference.trim(),
      telephone: req.body.telephone?.trim() || "",
      description: req.body.description?.trim() || "",
      timestamp: new Date().toISOString(),
    };

    // ✅ Appel vers Vanilla Pay
    const idPaiement = await initPayment(paymentData);

    res.json({
      success: true,
      paymentUrl: `https://moncompte.ariarynet.com/payer/${idPaiement}`,
      reference: paymentData.reference,
    });
  } catch (error) {
    console.error("❌ Erreur création paiement:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Endpoint pour les notifications (callback VanillaPay)
app.post("/payment-notification", (req, res) => {
  try {
    if (!req.body.params) {
      return res.status(400).json({ success: false, error: "Paramètres manquants" });
    }

    const paymentResult = decrypt3DES(req.body.params, PRIVATE_KEY);
    console.log("📩 Notification reçue:", paymentResult);

    // 🔥 Sauvegarde automatique dans un fichier local JSON
    savePayment(paymentResult);

    res.json({ success: true });
  } catch (error) {
    console.error("❌ Erreur traitement notification:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ Nouveau endpoint : statut du paiement
app.get("/payment-status/:id", async (req, res) => {
  try {
    const idPaiement = req.params.id;
    if (!idPaiement) {
      return res.status(400).json({ success: false, error: "ID paiement manquant" });
    }

    const status = await getPaymentStatus(idPaiement);

    res.json({
      success: true,
      paymentId: idPaiement,
      status,
    });
  } catch (error) {
    console.error("❌ Erreur récupération statut:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Test du serveur
app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Serveur Vanilla Pay opérationnel",
  });
});

// Démarrage
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
