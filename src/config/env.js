export function env(key, fallback = null) {
    const value = process.env[`REACT_APP_${key}`];
    return value ?? fallback;
}