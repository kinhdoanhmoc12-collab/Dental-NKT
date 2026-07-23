import crypto from 'crypto';

/**
 * Verifies HS256 signed JWT tokens using native Node.js crypto module.
 * Compatible with NestJS JwtService signed tokens.
 */
export function verifyJwt(token: string, secret: string): any | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [headerB64, payloadB64, signatureB64] = parts;
    
    // Recreate HS256 HMAC signature
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(`${headerB64}.${payloadB64}`);
    
    const expectedSignature = hmac.digest('base64url');
    
    if (signatureB64 !== expectedSignature) {
      const expectedSignatureAlt = hmac.digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
        
      if (signatureB64 !== expectedSignatureAlt) {
        return null;
      }
    }

    // Decode and parse payload
    const payloadJson = Buffer.from(payloadB64, 'base64').toString('utf8');
    const payload = JSON.parse(payloadJson);
    
    // Check expiration time (payload.exp is in seconds)
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      return null;
    }
    
    return payload;
  } catch (err) {
    return null;
  }
}
