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

export declare class TicTacToe {
    /* X PlayerName */
    playerX: string;
    /* Y PlayerName */
    playerY: string;
    /* X if true, Y if false */
    _currentTurn: boolean;
    _x: number;
    _y: number;
    _turns: number;
    constructor(playerX: string, playerY: string);
    get board(): number;
    turn(player, index: number): boolean;
    turn(player, x: number, y: number): boolean;
}
