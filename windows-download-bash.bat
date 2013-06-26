start "Downloading Bonjour Print Services" "powershell.exe" "(new-object System.Net.WebClient).DownloadFile( 'http://support.apple.com/downloads/DL999/en_US/BonjourPSSetup.exe', 'C:\Windows\Temp\BonjourPSSetup.exe')"
start "Installing Bonjour" "C:\temp\BonjourPSSetup.exe"
start "Downloading Cygwin" "powershell.exe" "(new-object System.Net.WebClient).DownloadFile( 'http://www.cygwin.com/setup.exe', 'C:\Windows\temp\setup.exe')"
start "Installing Cygwin" "C:\temp\setup.exe"
