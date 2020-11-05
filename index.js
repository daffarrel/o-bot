const qrcode = require('qrcode-terminal');
var request = require('request');
const {
	Client
} = require('whatsapp-web.js');
const client = new Client({
	puppeteer: {
		headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-accelerated-2d-canvas', '--no-first-run', '--no-zygote', '--single-process', // <- this one doesn't works in Windows
        '--disable-gpu'
        ]
    }
});
function formatNumber(num) {
    return (
      num.toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    ) 
}
client.on('qr', qr => {
	qrcode.generate(qr, {
		small: true
	});
});
client.on('ready', async () => {
	console.log('Client is ready!');
});
client.on('disconnected', (reason) => {
	console.log('Client was logged out', reason);
});
client.on('message', async msg => {
	const chat = await msg.getChat();
	var msg_body = msg.body.toLowerCase();
	switch(msg_body) {
		case "!corona":
		request({
			url: "https://api.alim.my.id/corona",
		}, function(error, response, body) {
			var json = JSON.parse(body);
			client.sendMessage(msg.from, `*Info corona ${json.country}*

Terkonfirmasi: *${formatNumber(json.confirmed)}*
Positif: *${formatNumber(json.active)}*

Meninggal: *${formatNumber(json.deaths)}*
Sembuh: *${formatNumber(json.recovered)}*

Last update ${json.last_update}`)
		});
		break;
		case "!group info":
		var description = typeof chat.description !== 'undefined' ? chat.description : "Tidak ada deskripsi";
		if (chat.isGroup) {
			msg.reply(`*Group Details*
Name: ${chat.name}
Description: ${description}
Created By: ${chat.owner.user}
Participant count: ${chat.participants.length}`);
		} else {
			msg.reply('This command can only be used in a group!');
		}
		break;
		default:
		var body_split = msg_body.split(" ")
		switch(body_split[0]) {
			case "!quran":
			var number_check = /^\d+$/;
			if(typeof body_split[1] !== 'undefined'){
				if (!number_check.test(body_split[1])) {
					client.sendMessage(msg.from, `Huft, aku tidak menemukan yang kamu cari`)
					return false
				}
				if (typeof body_split[2] !== 'undefined') {
					if (!number_check.test(body_split[2])) {
						client.sendMessage(msg.from, `Huft, aku tidak menemukan yang kamu cari`)
						return false
					}
					request({
						url: "https://api.alim.my.id/quran/surat/" + body_split[1] + "/" + body_split[2],
					}, function(error, response, body) {
						var json = JSON.parse(body);
						if (json.status == 'ok') {

							client.sendMessage(msg.from, `${json.surat}

${json.baca}

${json.arti}`);
						}else if (json.status == 'error') {
							client.sendMessage(msg.from, json.message)
						}
					});
				}else {
					if (body_split[1] < 115) {
						request({
							url: "https://api.alim.my.id/quran/surat/" + body_split[1],
						}, function(error, response, body) {
							var json = JSON.parse(body);
							client.sendMessage(msg.from, `${json.nama}
├ Ayat: ${json.ayat}
└ Arti: ${json.arti}

Keterangan: ${json.keterangan}
								`);
						});
					}else{
						client.sendMessage(msg.from, `Huft, aku tidak menemukan surat ke-${body_split[1]}`)
					}
				}
			}else{
				request({
					url: "https://api.alim.my.id/quran/surat",
				}, function(error, response, body) {
					console.log(body)
					var json = JSON.parse(body);
					var surat = [];
					surat.push("📖 *Seluruh surat di dalam Al-Qur'an* 📖")
					for(var no in json.results){
						surat.push(`*${json.results[no].nomor}*. ${json.results[no].nama} | ${json.results[no].asma}
├ Arti: ${json.results[no].arti}
└ Jumlah ayat: ${json.results[no].ayat}`
							)}
						client.sendMessage(msg.from, surat.join("\n\n"));
					});
			}
			break
		}
		break;

	}
});
client.initialize();