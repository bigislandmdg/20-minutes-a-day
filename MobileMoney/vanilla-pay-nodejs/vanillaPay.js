const crypto = require("crypto");
const axios = require("axios");

function encrypt3DES(data, key) {
    let des_iv = Buffer.from("0000000000000000", 'hex');
    let cipher = crypto.createCipheriv('des-ede3-cbc', Buffer.from(key.substr(0, 24)), des_iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
}

function decrypt3DES(data, key) {
    let des_iv = Buffer.from("0000000000000000", 'hex');
    let encryptedText = Buffer.from(data, 'hex');
    let decipher = crypto.createDecipheriv('des-ede3-cbc', Buffer.from(key.substr(0, 24)), des_iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

async function getAccessToken() {
    const param = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'client_credentials'
    };
    const res = await axios.post("https://pro.ariarynet.com/oauth/v2/token", param);
    return res.data.access_token;
}

async function initPayment(paymentData) {
    const token = await getAccessToken();
    const encryptedParams = encrypt3DES(JSON.stringify(paymentData), process.env.PUBLIC_KEY);

    const res = await axios.post("https://pro.ariarynet.com/api/paiements", {
        site_url: process.env.SITE_URL,
        params: encryptedParams
    }, {
        headers: { Authorization: "Bearer " + token }
    });

    const paymentId = decrypt3DES(res.data, process.env.PRIVATE_KEY);
    return paymentId;
}

async function getPaymentStatus(id) {
    const token = await getAccessToken();
    const res = await axios.get(`https://moncompte.ariarynet.com/api/v2/status/${id}`, {
        headers: { Authorization: "Bearer " + token }
    });
    return res.data;
}

module.exports = { encrypt3DES, decrypt3DES, initPayment, getPaymentStatus };
