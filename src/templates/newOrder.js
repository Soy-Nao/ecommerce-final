const orderTemplate = (username, cartTotalPrice, orderTotalPrice) => `
  <!DOCTYPE html>
<html lang="en" xmlns="https://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
  <style>
    table,
    td,
    div,
    h1,
    p {
      font-family: SF Pro Display, sans-serif;
    }
  </style>
</head>

<body style="padding: 0; margin: 0; width: 100%">
  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation"
          style="width:100%;max-width:640px;border-collapse:collapse;border-spacing:0;text-align:left;background:#f9f8fa;">
          <tr>
            <td style="padding:4%;">
              <!--Header-->
              <table role="presentation" style="width:100%;border-collapse:collapse;border-spacing:0;text-align:left;">
                <tr>
                  <td style="padding:0">
                    <table role="presentation" style="width:100%;border-collapse:collapse;border-spacing:0;">
                    </table>
                  </td>
                </tr>
                <!-- Spacer 25px-->
                <tr>
                  <td style="padding:13px 0;"></td>
                </tr>
                <!-- Main content-->
                <tr style="border-radius:10px">
                  <td style="background:#ffffff;border-radius:10px;padding:24px 4%;">
                    <table>
                      <tr>
                        <td>
                          <h5 style="font-weight: 700;font-size: 20px;line-height: 150%;">
                            Bienvenido a mi Ecommerce
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p
                            style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                            Hola <b>${username}</b>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p
                            style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                            Haz realizado la compra de ${cartTotalPrice} productos por un total de $${orderTotalPrice} COP.
                            
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p
                            style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                          <p>Atentamente, <br />Mi Ecommerce</p>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:15.5px 0;">
                      </tr>
                      
                    </table>
                  </td>
                </tr>
                <!--Spacer -->
                <tr>
                  <td style="padding:16px 0;"></td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td>
                    <p>
                      Te esperamos pronto!
                    </p>
                  </td>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>

</html>`;

module.exports = orderTemplate;