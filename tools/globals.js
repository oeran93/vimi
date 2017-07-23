const env = process.env

module.exports = {

  sale_tax: .10679,

  credit_card_fixed_rate: .30,

  credit_card_percentage: .03,

  app_name: "Vimi",

  twilio_accountsid: env.VIMI_TWILIO_ACCOUNTSID,

  twilio_authtoken: env.VIMI_TWILIO_AUTHTOKEN,

  twilio_phone: '+19412571316',

  stripe_apikey: env.VIMI_STRIPE_APIKEY,

  order_date_format: "MM-DD-YYYY HH:mm",

  day_date_format: "MM-DD-YYYY",

  info_email: "info@vimifood.com",

  user_port: env.USER_PORT,

  admin_port: env.ADMIN_PORT,

  curator_port: env.CURATOR_PORT,

  test_port: env.TEST_PORT

}
