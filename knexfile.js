//set the development config for knex to connect to pgsql 
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : 'ec2-174-129-210-249.compute-1.amazonaws.com',
      user : 'tnphmmzrfobexl',
      password : 'b85f3f0396037f7be2fe6eb8fae516bc40141b94141c60c329f3e9d20d379217',
      database : 'd1i9odaam8du7m',
      charset: 'utf8', 
      ssl: true
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },
  staging: {
    client: 'pg',
    connection: {
      host : 'ec2-174-129-210-249.compute-1.amazonaws.com',
      user : 'tnphmmzrfobexl',
      password : 'b85f3f0396037f7be2fe6eb8fae516bc40141b94141c60c329f3e9d20d379217',
      database : 'd1i9odaam8du7m',
      charset: 'utf8', 
      ssl: true
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },

  production:{
    client: 'pg',
    connection: {
      host : 'ec2-174-129-210-249.compute-1.amazonaws.com',
      user : 'tnphmmzrfobexl',
      password : 'b85f3f0396037f7be2fe6eb8fae516bc40141b94141c60c329f3e9d20d379217',
      database : 'd1i9odaam8du7m',
      charset: 'utf8', 
      ssl: true
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },
};
