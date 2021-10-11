import Gridinfo from 'facade/gridinfo';

const map = M.map({
  container: 'mapjs',
});

const mp = new Gridinfo();

map.addPlugin(mp);
