//fs.readdirSync('./').filter(f => f.match(/.*(?=\.jpg)/)).forEach(f => exec(`echo "import ${f.match(/.*(?=(\.jpg))/)[0]} from './${f}'" >> ./index.js`))


//let filenameVariables = fs.readFileSync('./index.js').toString().split('\n').filter(l => l.match(/^[^\/\/]/)).map(l => l.match(/(?<=import ).*(?= from)/));
//exec(`echo "export default { ${filenameVariables.join(', ')} }" >> index.js`);


import dive1 from './dive1.jpg'
import dive2 from './dive2.jpg'
import dive3 from './dive3.jpg'
import dive4 from './dive4.jpg'
import haywyre1 from './haywyre1.jpg'
import haywyre2 from './haywyre2.jpg'
import haywyre3 from './haywyre3.jpg'
import haywyre4 from './haywyre4.jpg'
import hozier1 from './hozier1.jpg'
import hozier2 from './hozier2.jpg'
import hozier3 from './hozier3.jpg'
import hozier4 from './hozier4.jpg'
import lahavas1 from './lahavas1.jpg'
import lahavas2 from './lahavas2.jpg'
import lahavas3 from './lahavas3.jpg'
import lahavas4 from './lahavas4.jpg'
import misch1 from './misch1.jpg'
import misch2 from './misch2.jpg'
import misch3 from './misch3.jpg'
import misch4 from './misch4.jpg'
import noname1 from './noname1.jpg'
import noname2 from './noname2.jpg'
import noname3 from './noname3.jpg'
import noname4 from './noname4.jpg'
import paak1 from './paak1.jpg'
import paak2 from './paak2.jpg'
import paak3 from './paak3.jpg'
import paak4 from './paak4.jpg'
import pinegrove1 from './pinegrove1.jpg'
import pinegrove2 from './pinegrove2.jpg'
import pinegrove3 from './pinegrove3.jpg'
import pinegrove4 from './pinegrove4.jpg'
import stone1 from './stone1.jpg'
import stone2 from './stone2.jpg'
import stone3 from './stone3.jpg'
import stone4 from './stone4.jpg'
export default { dive1, dive2, dive3, dive4, haywyre1, haywyre2, haywyre3, haywyre4, hozier1, hozier2, hozier3, hozier4, lahavas1, lahavas2, lahavas3, lahavas4, misch1, misch2, misch3, misch4, noname1, noname2, noname3, noname4, paak1, paak2, paak3, paak4, pinegrove1, pinegrove2, pinegrove3, pinegrove4, stone1, stone2, stone3, stone4 }
