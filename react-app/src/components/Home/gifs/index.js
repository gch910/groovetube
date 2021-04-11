// const fs = require("fs")
//const {exec} = require("child_process")
//exec does command line things from node terminal const {exec} = require("child_process")


//fs.readdirSync('./').filter(f => f.match(/.*(?=\.gif)/)).forEach(f => exec(`echo "import ${f.match(/.*(?=(\.gif))/)[0]} from './${f}'" >> ./index.js`))

//fs.readFileSync('./index.js').toString().split('\n').filter(l => l.match(/^[^\/\/]/)).forEach(l => exec(`echo "export ${l.match(/(?<=import ).*(?= from)/)[0]}" >> ./index.js`))

//let filenameVariables = fs.readFileSync('./index.js').toString().split('\n').filter(l => l.match(/^[^\/\/]/)).map(l => l.match(/(?<=import ).*(?= from)/));
//exec(`echo "export default { ${filenameVariables.join(', ')} }" >> index.js`);



import dive1 from './dive1.gif'
import dive2 from './dive2.gif'
import dive3 from './dive3.gif'
import dive4 from './dive4.gif'
import haywyre1 from './haywyre1.gif'
import haywyre2 from './haywyre2.gif'
import haywyre3 from './haywyre3.gif'
import haywyre4 from './haywyre4.gif'
import hozier1 from './hozier1.gif'
import hozier2 from './hozier2.gif'
import hozier3 from './hozier3.gif'
import hozier4 from './hozier4.gif'
import lahavas1 from './lahavas1.gif'
import lahavas2 from './lahavas2.gif'
import lahavas3 from './lahavas3.gif'
import lahavas4 from './lahavas4.gif'
import misch1 from './misch1.gif'
import misch2 from './misch2.gif'
import misch3 from './misch3.gif'
import misch4 from './misch4.gif'
import noname1 from './noname1.gif'
import noname2 from './noname2.gif'
import noname3 from './noname3.gif'
import noname4 from './noname4.gif'
import paak1 from './paak1.gif'
import paak2 from './paak2.gif'
import paak3 from './paak3.gif'
import paak4 from './paak4.gif'
import pinegrove1 from './pinegrove1.gif'
import pinegrove2 from './pinegrove2.gif'
import pinegrove3 from './pinegrove3.gif'
import pinegrove4 from './pinegrove4.gif'
import stone1 from './stone1.gif'
import stone2 from './stone2.gif'
import stone3 from './stone3.gif'
import stone4 from './stone4.gif'
import haim1 from './haim1.gif'
import haim2 from './haim2.gif'
import haim3 from './haim3.gif'
import haim4 from './haim4.gif'
import bridges1 from './bridges1.gif'
import bridges2 from './bridges2.gif'
import bridges3 from './bridges3.gif'
import bridges4 from './bridges4.gif'


export default { dive1, dive2, dive3, dive4, haywyre1, haywyre2, haywyre3, haywyre4, hozier1, hozier2, hozier3, hozier4, lahavas1, lahavas2, lahavas3, lahavas4, misch1, misch2, misch3, misch4, noname1, noname2, noname3, noname4, paak1, paak2, paak3, paak4, pinegrove1, pinegrove2, pinegrove3, pinegrove4, stone1, stone2, stone3, stone4, haim1, haim2, haim3, haim4, bridges1, bridges2, bridges3, bridges4}
