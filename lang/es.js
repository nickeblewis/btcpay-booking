export default {
  profile: 'Perfil',
  // components/merchantServiceSelector.vue
  offers: 'Ofertas que puedes reservar',
  // components/serviceBookingForm.vue
  buyerDate: 'Fecha',
  buyerTime: 'Horario',
  selectDateFirst: 'Primero seleciona una fecha',
  from: 'Desde',
  to: 'hasta',
  buyerExtras: 'Extras',
  buyerName: 'Nombre',
  buyerEmail: 'Correo',
  buyerFingerprint: 'Huella digital de la clave pública PGP',
  buyerPGP: 'Clave pública PGP',
  fingerprintOnServer: 'Asegúrese de que la clave pública esté presente en keys.openpgp.org',
  buyerDetails: 'Detalles',
  buyerLanguage: 'Idioma',
  buyerService: 'Servicio',
  buyerGateway: 'Tipo de pago',
  bookEvent: 'Reservar',
  clearSelection: 'Quitar selección',
  in: 'en',
  getDiscount: 'Obtén un descuento {premium}% pagando en bitcoins.',
  approximatePrice: 'El precio en moneda tradicional es aproximado. El precio final se establece al finalizar la compra.',
  fiatNotAvailable: 'Métodos de pago en monedas tradicionales no disponibles en este momento.',
  changeCurrency: 'Cambiar moneda',
  // components/invoice/invoiceProfile.vue
  invoice: 'Factura',
  booking: 'Reserva',
  and: 'y',
  notProvided: 'No proporcionado',
  // components/invoice/bitcoin/invoiceBitcoinNew.vue
  invoiceNew: 'Nueva factura',
  invoiceId: 'ID de la factura',
  oderId: 'ID del pedido',
  viewDetails: 'Ver detalles',
  hideDetails: 'Ocultar detalles',
  totalPrice: 'Precio total',
  totalFiat: 'Fiat total',
  exchangeRate: 'Tarifa de cambio',
  amountDue: 'Cantidad debida',
  recommendedFee: 'Tarifa recomendada',
  payWith: 'Pagar con',
  bitcoin: 'Bitcoin',
  lnurl: 'Lnurl',
  lightning: 'Lightning',
  address: 'Dirección',
  invoice: 'Factura',
  amount: 'Monto',
  payInWallet: 'Pagar con billetera',
  destinationCopied: 'Destino copiado',
  amountCopied: 'Monto copiado',
  // components/invoice/bitcoin/invoiceBitcoinExpired.vue
  invoiceExpired: 'Factura vencida',
  invoiceValidity: 'Una factura en bitcoin solo es válida por {minutes} minutos',
  payWithBitcoin: 'Pagar en Bitcoin',
  // components/invoice/bitcoin/invoiceBitcoinReceived.vue
  invoicePaid: 'Factura pagada',
  invoiceReceived: 'han sido pagados',
  printReceipt: 'Imprimir el recibo',
  // components/invoice/fiat/invoiceFiatSelector.vue
  selectPaymentMethod: 'Seleccionar un método de pago',
  // component/invoice/fiat/invoiceFiat.vue
  bitcoinPurchaseWarning: 'Solo aceptamos bitcoins como método de pago final.\n\nAhora le permitiremos comprar bitcoins con {paymentMethod} de un vendedor amigable y luego enviárnoslos.\n\n\No se preocupe, haremos que el proceso sea fácil y sin complicaciones para usted con solo unos pocos clics.\n\nLe notificaremos sobre sus detalles de pago tan pronto como estén disponibles.\n\nTambién mostraremos los detalles de pago y cualquier comunicación adicional en esta página. Por favor, añade esta página a tus favoritos.',
  sellerPaymentDetails: "Detalles de pago",
  method: 'Método',
  reference: 'Motivo',
  phone: 'Teléfono',
  beneficiary: 'Beneficiario',
  accountNumber: 'Número de cuenta',
  userName: 'Nombre de usuario',
  ukBankAccount: 'Número de cuenta UK',
  ukSortCode: 'Código sort UK',
  email: 'Correo',
  iban: 'IBAN',
  bic: 'BIC',
  newChatMessage: 'Nuevo mensaje',
  postChatMessage: 'Envia',
  // components/invoice/fiat/invoiceFiatSepaDetails.vue
  // amount: 'Monto',
  // currency: 'Divisa',
  // iban: 'IBAN',
  // bic: 'BIC',
  // reference: 'Referencia',
  // recipient: 'Destino',
  // recipientAddress: 'Dirección de destino',
  // component/layoutFooter.vue
  lastBuiltAt: 'Último commit en bloque',
  merchantDashboard: 'Panel de control del comerciante',
  // pages/dashboard/index.vue
  underConstruction: 'En construcción',
  // error.vue
  pageNotFound: 'Esta página no se pudo encontrar',
  unauthorized: 'No autorizado',
  somethingWentWrong: 'Algo salió mal',
  backToTheHomePage: 'Volver a la página de inicio',
  // plugins/validateCustomRules.js
  // Custom rules which name starts with an underscore
  // are not automatically imported in vee validate generateMessage
  // but returned directly within the custom rule function
  customRules: {
    arrayLengthBetween: 'Puede reservar entre 0:{min} y 1:{max} espacios para cada día',
    validateIban: 'Formato IBAN no válido',
    validateBic: 'BIC del banco no válido',
    _isOnServer: 'No encontramos una clave pública en el servidor\nkeys.openpgp.org\nasociado con la huella digital proporcionada',
    _isAssociatedWithEmail: 'La clave pública con huella digital propociondada\nno está asociada con el correo electrónico {target}'
  }
}
