import app from './app'
import { startConnection } from './datebase'

async function main(){
    startConnection();
    await app.listen(app.get('port'));
    console.log('Serer on port', app.get('port'));
}

main();