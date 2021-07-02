const pg = require('pg');
const database = 'pokemon'; // postgresの接続先db名
const user = 'postgres'; // postgresの接続に使用するユーザー名
const password = 'postgres'; // postgresの接続に使用するユーザーのパスワード
const host = 'localhost'; // postgresのhost名
const port = 5432; // postgresのport

exports.conection = function() {
    return new pg.Pool({
        database: database,
        user: user, //ユーザー名はデフォルト以外を利用している人は適宜変更してください。
        password: password, //PASSWORDにはPostgreSQLをインストールした際に設定したパスワードを記述。
        host: host,
        port: port,
      });
};
