import fetch from 'node-fetch';

interface ZohoTokenResponse {
  access_token?: string;
  refresh_token?: string;
  error?: string;
}

export async function getInitialToken(code: string): Promise<ZohoTokenResponse> {
  const params = new URLSearchParams({
    code,
    grant_type: 'authorization_code',
    client_id: process.env.ZOHO_CLIENT_ID!,
    client_secret: process.env.ZOHO_CLIENT_SECRET!,
    redirect_uri: process.env.ZOHO_REDIRECT_URI!
  });

  const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  });

  const data = await response.json() as ZohoTokenResponse;
  console.log('Token response:', data);
  return data;
}