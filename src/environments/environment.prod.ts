import * as npm  from '../../package.json';

export const environment = {
  production: true,
  VERSION: npm.version,
  dataServiceUrl: 'https://localhost:4200',
};