const nodemailer = require("nodemailer")

function createMailer() {
  return nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  })
}

function generateEmailContent(url) {
  return `
  <div>
    <h2>Nuevo lugar para registar: </h2>
    <a href=${url}>Ver su facebook</a>
  <div>
  `
}

exports.handler = async function (event) {
  if (event.httpMethod.toUpperCase() !== "POST") {
    return {
      statusCode: 400,
      body: JSON.stringify({ type: "error", message: "METHOD_NOT_ALLOWED" }),
    }
  }

  try {
    const body = JSON.parse(event.body)

    if (body.name || !body.url) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          type: "error",
          message: "Ups! Hubo un problema, intenta de nuevo [CODE: 3312]",
        }),
      }
    }

    const mailer = createMailer()

    await mailer.sendMail({
      from: "La Carlota <la_carlota@example.com>",
      to: "bar@example.com",
      subject: "Nuevo Lugar ✔",
      html: generateEmailContent(body.url),
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        type: "success",
        message: "Gracias por contribuir a la Carlota!",
      }),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ type: "error", message: "Error desconocido!" }),
    }
  }
}
