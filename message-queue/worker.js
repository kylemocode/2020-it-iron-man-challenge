const amqp = require('amqplib');
const mailservice = require('./models/nodemailer');

async function connect() {
	try {
		const connection = await amqp.connect('amqp://localhost:5672');
		const channel = await connection.createChannel();
		await channel.assertQueue("email-service");

		channel.prefetch(1);

		channel.consume("email-service", async (message) => {
			const transporter = await mailservice();
			const targetEmail = message.content.toString();
			let mailOptions = {
				from: 'kylemo860617@gmail.com',
				to: targetEmail,
				subject: 'Email sample from Kyle Mo',
				text: 'Hello world!!!!!'
			  };

			transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
			});
			console.log('Recieved job message: ', message.content.toString())

			// 確認接收並 dequeue
			channel.ack(message);

		})

		console.log("I am waiting for jobs to do....")
	} catch (err) {
		console.log(err);
	}
}

connect();