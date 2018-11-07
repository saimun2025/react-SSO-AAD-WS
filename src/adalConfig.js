import { AuthenticationContext } from 'react-adal';
const adalConfig = {
 tenant: '775ec8ba-cbfb-4a8a-8bef-37f471aa7869',
 clientId: '84081efa-c552-4648-9ed9-938e701af7e7',
 endpoints: {
   api: 'https://login.microsoftonline.com/84081efa-c552-4648-9ed9-938e701af7e7/saml2'
 },
 postLogoutRedirectUri: window.location.origin,
 redirectUri: 'https://localhost:3000',
 cacheLocation: 'sessionStorage'
};
export const authContext = new AuthenticationContext(adalConfig);
export const getToken = () => {
 return authContext.getCachedToken(authContext.config.clientId);
};