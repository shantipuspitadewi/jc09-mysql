const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            type:'OAuth2',
            user:'shantipdewi@gmail.com',
            clientId:'83977392530-bcjp1errmfhpa6s78k7seiakot1l0o04.apps.googleusercontent.com',
            clientSecret:'BiK-ijR7qL2MoxgNCfY_PVJ4',
            refreshToken:'1/X-lR9aZkKs220Ef-dYcr4eFAjR-v3wFbxev1Aw4OexE'
        }
    }
)
const mail= {
    from:'Shanti Puspita Dewi <shantipdewi@gmail.com>',
    to : email,
    subject: 'Hello from the other side',
    html: `<h1>HELLO ${name}, ITS MEH</h1>
    <a href='http://localhost:2019/verify?uname=${username}' >Klik untuk verifikasi</a>`
}

transporter.sendMail(mail, (err, result) => {
    if(err) return console.log(err.message)
    console.log('Alhamdulillah ya berhasil')
})

module.exports = mailVerify