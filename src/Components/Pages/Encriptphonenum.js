import crypto from "crypto";
import { toast } from "react-toastify";

const DATAENCRYPTIONKEY = "sdkfrdamsnd#fjevnjdsfc1egB8q6M1f";
const IV_LENGTH = 16;

export const EncryptInformation = (normalText) => {
  try {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from(DATAENCRYPTIONKEY),
      iv
    );
    let encrypted = cipher.update(normalText);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString("hex") + ":" + encrypted.toString("hex");
  } catch (e) {
    toast.error(e?.message);
  }
};
export const DecryptInformation = (text) => {
  try {
    const textParts = text.split(":").slice(0, IV_LENGTH);
    const iv = Buffer.from(textParts.shift(), "hex");
    const encryptedText = Buffer.from(textParts.join(":"), "hex");
    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      Buffer.from(DATAENCRYPTIONKEY),
      iv
    );
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  } catch (e) {
    // console.log(e);
    toast.error(e?.message);
  }
};
