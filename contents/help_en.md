# :mdi-gamepad-variant-outline: Code Editor
This is a space where you can test the Linux shell or write and execute programs directly.
## Tip
- Press the F1 key to open the Command Palette.
- Press the F4 key to search for and select a language.
- Press the F9 key to execute the code immediately.
- Press Ctrl+Enter to send the current line or selected content to the terminal.
- Press Alt+C to enable Column Selection.
- You can configure additional parameters for the selected language in the settings.
- Click the :mdi-plus: button to add a file tab and save multiple sources in the browser storage.
- You can view image files or download them by using the imshow command in the terminal.
- Drag and drop a file into the terminal to upload it.
## :mdi-bash: Language Select
- Click the :mdi-bash: icon to select the Linux shell or various programming languages.
- The syntax highlighting in the code editor will also adjust according to the selected language.
- Use the shortcut keys F2 and Shift+F2 for additional functionality.
## :mdi-lan-connect: Connect
- Establishes a connection to the Linux server.
- If already connected, the previous session will be terminated, and a reconnection will be made.
## :mdi-lan-disconnect: Disconnect
- Disconnects from the server connection.
## :mdi-code-greater-than: REPL Environment
- Executes REPL commands.
- In the REPL environment, only the "Send to Terminal" (Ctrl+Enter) command is available.
## :mdi-play: Run
- Sends the entire code to the terminal for execution.
- Not available in the REPL environment.
- Shortcut: `F9`
## :mdi-playlist-play: Send to Terminal
- Sends the selected content to the terminal.
- If no content is selected, sends the current line.
- Shortcut: Ctrl+Enter
## :mdi-flash: Command Palette
- Select the command you want to execute from the list.
- When you type a command, related commands will be displayed (try typing Python).
- Shortcut: `F1`, `Ctrl+Shift+P`
## :mdi-folder-open-outline: Load Source
- Loads the source code for the currently selected language from the local browser storage.
## :mdi-content-save-outline: Save Source
- Saves the source code for the currently selected language to the local browser storage.
- Shortcut: `Ctrl+S`
## :mdi-share-variant-outline: Share Source
- You can **share** the **source code** within the editor with friends.
- It is automatically copied to the clipboard.
- The maximum size of the source code is `1MB`.
- It is deleted periodically, so use it only for **temporary sharing**.
## :mdi-import: Import source
- Imports a source file from your local PC.
- Shortcut: `Ctrl+O`
## :mdi-export: Export source
- Downloads the source from the screen.
## :mdi-tools: Options
- Opens the options window.
- You can configure additional arguments, tabs, font size, and more for the current language.
# :mdi-gamepad-variant-outline: **Terminal/Output Tab**
This is a space for performing various tests in the server's terminal environment.
## :mdi-chevron-down: Decrease panel size
- Decreases the panel size.
## :mdi-chevron-up: Increase panel size
- Increases the panel size.
## :mdi-fullscreen: Maximize/Restore Panel Size
- Maximizes the panel size.
- If it is already at the maximum size, it will return to its original size.
## :mdi-image: Output Tab
- You can display server images or html files in the Output tab using the imshow command in the terminal.
- Selecting HTML5, Markdown, or PHP and executing the content in the editor will display it in the Output tab.
- The displayed image or HTML page can be removed by clicking the :mdi-image-off-outline: icon.

## :mdi-file-upload: **File Upload**
- File uploads are only possible when you are in a state where `Linux shell commands` can be executed.
- Drag and drop files into the terminal area.
- You can upload files up to **10 MB** in size.

## :mdi-alert-circle-outline: Notice
- All written content will be lost upon disconnection.
- The connection will be automatically terminated if CPU usage is high.
