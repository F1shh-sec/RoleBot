
let text_colors = {
    server_color: `\x1b[35m`,
    id_color: `\x1b[31m`,
    name_color: `\x1b[34m`,
    channel_color: `\x1b[32m`,
    textc_color: `\x1b[36m`,
    voicec_color: `\x1b[32m`,
    category_color: `\x1b[33m`,
    bright_hex: `\x1b[1m`,
    rst_hex: '\x1b[0m'
};
function printLogo() {

    const lc = `\x1b[0m\x1b[2m\x1b[33m`;
    const bc = `\x1b[0m\x1b[1m\x1b[36m`;

    console.log(`      ${lc}█████${bc}▒${lc}██${bc}▓  ${lc}██████  ${lc}██${bc}░ ${lc}██  ██${bc}░ ${lc}██    ${bc}▓${lc}█████▄  ██▀███   ▄▄▄     ▄▄▄█████${bc}▓
    ▓${lc}██   ${bc}▒▓${lc}██${bc}▒▒${lc}██    ${bc}▒ ▓${lc}██${bc}░ ${lc}██${bc}▒▓${lc}██${bc}░ ${lc}██${bc}▒   ▒${lc}██▀ ██▌${bc}▓${lc}██ ${bc}▒ ${lc}██${bc}▒▒${lc}████▄   ${bc}▓  ${lc}██${bc}▒ ▓▒
    ▒${lc}████ ${bc}░▒${lc}██${bc}▒░ ▓${lc}██▄   ${bc}▒${lc}██▀▀██${bc}░▒${lc}██▀▀██${bc}░   ░${lc}██   █▌${bc}▓${lc}██ ${bc}░${lc}▄█ ${bc}▒▒${lc}██  ▀█▄ ${bc}▒ ▓${lc}██${bc}░ ▒░
    ░▓${lc}█${bc}▒  ░░${lc}██${bc}░  ▒   ${lc}██${bc}▒░▓${lc}█ ${bc}░${lc}██ ${bc}░▓${lc}█ ${bc}░${lc}██    ${bc}░▓${lc}█▄   ▌${bc}▒${lc}██▀▀█▄  ${bc}░${lc}██▄▄▄▄██${bc}░ ▓${lc}██${bc}▓ ░ 
    ░▒${lc}█${bc}░   ░${lc}██${bc}░▒${lc}██████${bc}▒▒░▓${lc}█${bc}▒░${lc}██${bc}▓░▓${lc}█${bc}▒░${lc}██${bc}▓   ░▒${lc}████${bc}▓ ░${lc}██${bc}▓ ▒${lc}██${bc}▒ ▓${lc}█   ▓${lc}██${bc}▒ ▒${lc}██${bc}▒ ░ 
     ▒ ░   ░▓  ▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒ ▒ ░░▒░▒    ▒▒▓  ▒ ░ ▒▓ ░▒▓░ ▒▒   ▓▒${lc}█${bc}░ ▒ ░░   
     ░      ▒ ░░ ░▒  ░ ░ ▒ ░▒░ ░ ▒ ░▒░ ░    ░ ▒  ▒   ░▒ ░ ▒░  ▒   ▒▒ ░   ░    
     ░ ░    ▒ ░░  ░  ░   ░  ░░ ░ ░  ░░ ░    ░ ░  ░   ░░   ░   ░   ▒    ░      
            ░        ░   ░  ░  ░ ░  ░  ░      ░       ░           ░  ░        
                                            ░                                 \x1b[0m`);
}

module.exports = {
    text_colors, printLogo
};