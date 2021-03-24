module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb://msvlogs:msvlogs@cluster0-shard-00-00.mu1xm.mongodb.net:27017,cluster0-shard-00-01.mu1xm.mongodb.net:27017,cluster0-shard-00-02.mu1xm.mongodb.net:27017/msvlogs?ssl=true&replicaSet=atlas-udimwp-shard-0&authSource=admin&retryWrites=true&w=majority',
      },
      options: {
        ssl: true,
      },
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         srv: env.bool('DATABASE_SRV', false),
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME', 'msvlogs'),
//         username: env('DATABASE_USERNAME', null),
//         password: env('DATABASE_PASSWORD', null),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//     },
//   },
// });

//mongodb://msvlogs:<password>@cluster0-shard-00-00.mu1xm.mongodb.net:27017,cluster0-shard-00-01.mu1xm.mongodb.net:27017,cluster0-shard-00-02.mu1xm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-udimwp-shard-0&authSource=admin&retryWrites=true&w=majority