/*
   ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ███╗   ███╗██████╗ 
  ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ████╗ ████║██╔══██╗
  ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██╔████╔██║██║  ██║
  ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║   
  ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║      ██║ ╚═╝ ██║██████╔╝   
   ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝   
  
══════════════════════════════════════════════════════════════════════════
                            ( OWNER  DETAILS )
══════════════════════════════════════════════════════════════════════════
✅ Queen Multi-device Whatsapp Bot
✅ Coded By DarkWinzo 
══════════════════════════════════════════════════════════════════════════
                              ( CONTACT ME )
══════════════════════════════════════════════════════════════════════════
✅ Telegram: https://t.me/DarkWinzo
✅ Whatsapp: https://wa.link/jw9ki6
✅ Instagram:https://msng.link/o/?darkwinzo=ig
✅ Youtube: https://youtube.com/c/DarkWinzo                                                                                                      
══════════════════════════════════════════════════════════════════════════
                             ( PROJECT DETAILS )
══════════════════════════════════════════════════════════════════════════
✅ @project_name Queen-MD [WA Multi-device]
✅ @author DarkWinzo <https://github.com/DarkWinzo>
✅ @description A WhatsApp based 3ʳᵈ party application that provide many 
   services with a real-time automated conversational experience
✅ @link <https://github.com/DarkWinzo/Queen-MD>
✅ @version 0.0.1
══════════════════════════════════════════════════════════════════════════
                             ( PROJECT RULES )
══════════════════════════════════════════════════════════════════════════
✅ If you want to recode, reupload
   or copy the codes/script,
   please Contact me;
✅ If the recoded/reupload or copy script? "i will take action immediately"
✅ © 2022 Queen Bot Inc.Technical Hacker Team
✅ God Bless You, Family and Myself
══════════════════════════════════════════════════════════════════════════
*/

const fs = require('fs');
const { Writer } = require('steno');
class TextFile {
    constructor(filename) {
        this.filename = filename;
        this.writer = new Writer(filename);
    }
    async read() {
        let data;
        try {
            data = await fs.promises.readFile(this.filename, 'utf-8');
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
        return data;
    }
    write(str) {
        return this.writer.write(str);
    }
}
module.exports = { TextFile };
