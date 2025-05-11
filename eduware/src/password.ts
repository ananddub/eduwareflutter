import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10); // optional: 10 rounds
    return bcrypt.hash(password, salt);
}

export async function checkPassword(password: string, compare: string) {
    return bcrypt.compare(password, compare);
}
