const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow
function createWindow()
{
	mainWindow = new BrowserWindow({width: 800, height: 600, icon: 'resources/aitext3.png'})

	mainWindow.loadURL(`file:${__dirname}/index.html`)
	//mainWindow.webContents.openDevTools()
	mainWindow.on('closed',function()
		{
			mainWindow = null
		})
}

app.on('ready', createWindow)

app.on('window-all-closed', function()
{
	if(process.platform !== 'darwin')
	{
		app.quit()
	}
})

app.on('active',function()
{
	if(mainWindow === null)
		createWindow()
})