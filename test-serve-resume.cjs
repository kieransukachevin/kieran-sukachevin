const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
	const browser = await puppeteer.launch(
		// { headless: 'new' }
		{
			headless: false
		}
	); // Use 'new' headless mode
	const page = await browser.newPage();

	// Resolve the absolute path to your local HTML file
	const localFilePath = 'file://' + path.resolve(__dirname, 'static', 'resume.html');

	await page.goto(localFilePath, { waitUntil: 'networkidle0' });
	const htmlContent = await page.content(); // Get the fully rendered HTML including JS results

	console.log(htmlContent);

	// await browser.close();
})();
