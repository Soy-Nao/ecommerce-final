const welcomeTemplate = (username) => `
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
                      <tr>
                        <td style="padding:0;width:50%;" align="left">
                          <h4>Mi Ecommerce</h4>
                        </td>
                        <td style="padding: 0; width: 50%" align="right">
                        </td>
                      </tr>
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
                            Gracias por registrarte a ahora pasa y compra solo con un par de clicks.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p
                            style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:15.5px 0;">
                      </tr>
                      <tr>
                        <td>
                          <table style="width:100%">
                            <tr>
                              <td
                                style="width:60%;text-align:center;background:#E5625E;padding:20px 25px 20px 25px;border-radius:20px;">
                                <a href="#"
                                  style="text-decoration: none;color:#ffffff;font-weight: 800;font-size: 24px;">Ir a
                                  mi ecommerce</a>
                              </td>
                              <td style="width:30%;">
                              </td>
                            </tr>
                          </table>
                        </td>
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
                      Te esperamos!
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>

</html>`;

module.exports = welcomeTemplate;
