//fs.readdirSync('./').filter(f => f.match(/.*(?=\.jpg)/)).forEach(f => exec(`echo "import ${f.match(/.*(?=(\.jpg))/)[0]} from './${f}'" >> ./index.js`))


//let filenameVariables = fs.readFileSync('./index.js').toString().split('\n').filter(l => l.match(/^[^\/\/]/)).map(l => l.match(/(?<=import ).*(?= from)/));
//exec(`echo "export default { ${filenameVariables.join(', ')} }" >> index.js`);

import lahavas1 from './lahavas1.jpg'
import lahavas2 from './lahavas2.jpg'
import lahavas3 from './lahavas3.jpg'
import lahavas4 from './lahavas4.jpg'
import misch1 from './misch1.jpg'
import misch2 from './misch2.jpg'
import misch3 from './misch3.jpg'
import misch4 from './misch4.jpg'
import paak1 from './paak1.jpg'
import paak2 from './paak2.jpg'
import paak3 from './paak3.jpg'
import paak4 from './paak4.jpg'
import pinegrove1 from './pinegrove1.jpg'
import pinegrove2 from './pinegrove2.jpg'
import pinegrove3 from './pinegrove3.jpg'
import pinegrove4 from './pinegrove4.jpg'


export default { lahavas1, lahavas2, lahavas3, lahavas4, misch1, misch2, misch3, misch4, paak1, paak2, paak3, paak4, pinegrove1, pinegrove2, pinegrove3, pinegrove4 }
