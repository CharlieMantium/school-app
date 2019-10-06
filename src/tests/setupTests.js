import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv'; // eslint-disable-line import/no-extraneous-dependencies

DotEnv.config({ path: '.env.test' });

Enzyme.configure({
  adapter: new Adapter(),
});
