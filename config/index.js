 const config ={
    baseUrl: process.env.NEXT_APP_BASE_URL || 'http://localhost:7077/api/v1',
    imageUrl: process.env.NEXT_APP_URL_IMAGE || 'http://localhost:7077',
    clientKeyMidtrans: process.env.NEXT_APP_CLIENT_MIDTRANS
}
export {config}