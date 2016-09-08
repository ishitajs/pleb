# Pleb
![pleb](http://i.imgur.com/dYcWGTC.png)

A really simple Discord bot available for free.  Add me: <https://discordapp.com/oauth2/authorize?client_id=218227587166502923&scope=bot&permissions=3165184>.

## Development
All commands are prefixed with an @mention of the bot.  The first word after gets interpolated and calls a function as defined in `const commands` in `index.js`, passing in the Discord.js client, the message, and any arguments of the command (defined as text after the command word).

## Usage
Command prefix: **`@mention`** *(`mention` being the bot.  Obviously.  Geez.)*

Available commands:

- `play [YouTube video URL]` - plays a YouTube video (accepts both youtube.com and youtu.be URLs)
- `play [YouTube playlist URL]` - plays a YouTube playlist in sequential order
- `play [SoundCloud sound URL]` - plays a SoundCloud track
- `play [SoundCloud set URL]` - plays a SoundCloud set in sequential order
- `play [search]` - plays the first YouTube video from a search query
- `shuffle` - shuffles a playlist, then restarts
- `shuffle [YouTube playlist URL]` - shuffles a YouTube playlist, then plays
- `shuffle [SoundCloud set URL]` - shuffles a SoundCloud set, then plays
- `pause` - pauses playback
- `resume` - resumes playback
- `stfu` - stops playback and disconnects Pleb from the voice channel