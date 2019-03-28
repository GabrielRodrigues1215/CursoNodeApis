let env = process.env.NODE_ENV || 'prod';
console.log(`ambiente -> ${env.toUpperCase()}`);
const config = () => {
    switch(env){ 

        case 'dev':
        return {
            bd_string: 'mongodb+srv://usuario_admin:Luzinete1215@clusterapi-wwrlh.mongodb.net/test?retryWrites=true',
            jwt_pass: 'Luzinete1215',
            jwt_expires_in: '7d'
        }   

        case  'hml':
        return { 
            bd_string: 'mongodb+srv://usuario_admin:Luzinete1215@clusterapi-wwrlh.mongodb.net/test?retryWrites=true'

        }

        case 'prod':
        return {
            bd_string: 'mongodb+srv://usuario_admin:Luzinete1215@clusterapi-wwrlh.mongodb.net/test?retryWrites=true'

        }

    }

}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();