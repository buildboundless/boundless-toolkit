import bcrypt from "bcryptjs";

/**
 * Hash password
 * @param password
 */
export async function generateHashedPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

/**
 * Check if password matches hash
 * @param password
 * @param hash
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
