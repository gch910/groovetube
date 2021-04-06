// const fs = require("fs")
//const {exec} = require("child_process")
//exec does command line things from node terminal const {exec} = require("child_process")


//fs.readdirSync('./').filter(f => f.match(/.*(?=\.gif)/)).forEach(f => exec(`echo "import ${f.match(/.*(?=(\.gif))/)[0]} from './${f}'" >> ./index.js`))

//fs.readFileSync('./index.js').toString().split('\n').filter(l => l.match(/^[^\/\/]/)).forEach(l => exec(`echo "export ${l.match(/(?<=import ).*(?= from)/)[0]}" >> ./index.js`))

//let filenameVariables = fs.readFileSync('./index.js').toString().split('\n').filter(l => l.match(/^[^\/\/]/)).map(l => l.match(/(?<=import ).*(?= from)/));
//exec(`echo "export default { ${filenameVariables.join(', ')} }" >> index.js`);


import lahavas1 from './lahavas1.gif'
import lahavas2 from './lahavas2.gif'
import lahavas3 from './lahavas3.gif'
import lahavas4 from './lahavas4.gif'
import misch1 from './misch1.gif'
import misch2 from './misch2.gif'
import misch3 from './misch3.gif'
import misch4 from './misch4.gif'
import paak1 from './paak1.gif'
import paak2 from './paak2.gif'
import paak3 from './paak3.gif'
import paak4 from './paak4.gif'
import pinegrove1 from './pinegrove1.gif'
import pinegrove2 from './pinegrove2.gif'
import pinegrove3 from './pinegrove3.gif'
import pinegrove4 from './pinegrove4.gif'


export default { lahavas1, lahavas2, lahavas3, lahavas4, misch1, misch2, misch3, misch4, paak1, paak2, paak3, paak4, pinegrove1, pinegrove2, pinegrove3, pinegrove4 }
