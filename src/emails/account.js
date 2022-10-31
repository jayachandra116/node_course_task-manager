const sgMail = require("@sendgrid/mail");
//const sendgridAPIKey = "";


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "jc",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let us know how you get along with the app`,
  });
};

const sendCancelationMail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'jc',
        subject:'Sorry to see you go!',
        text:`Goodbye, ${name}. I hope to see you somtime soon.`
    })
}

module.exports = {
  sendWelcomeMail,
  sendCancelationMail
};
