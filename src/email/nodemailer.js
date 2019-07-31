const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'alvinrochafi26@gmail.com',
            clientId: '907020553938-n3nqesh8v93030j1kp2uq3gosbru9lu7.apps.googleusercontent.com',
            clientSecret: 'nBsnMi2MngRjQaYA6OaetKo4',
            refreshToken: '1/lEUJkOKl9Tv1p0iV69SJ187xrYiu-M2cnK6jjJ2tTHw'
        }
    }
)

const mailVerify = (user) => {
    var {name, username, email} = user

    const mail = {
        from: 'Alvin Rochafi <alvinrochafi@gmail.com>',
        to: email,
        subject: 'Hello from the other side',
        html: `<h1>HELLO ${name}, ITS MEH</h1>
        <a href='http://localhost:2019/verify?uname=${username}' >Klik untuk verifikasi</a>`
    }

    transporter.sendMail(mail, (err, result) => {
        if(err) return console.log(err.message)

        console.log('Alhamdulillah ya berhasil')
    })
}

module.exports = mailVerify