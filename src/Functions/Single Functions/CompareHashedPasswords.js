import bcrypt from "bcryptjs-react";

// Compares two hashed passwords against each other using bcrypt.compare()
export default async function CompareHashedPasswords(userPassword, dbPassword) {
  try {
    const isMatch = await bcrypt.compare(userPassword, dbPassword);
    return isMatch;
  } catch (err) {
    console.error("Error comparing passwords:", err);
    return false;
  }
}
