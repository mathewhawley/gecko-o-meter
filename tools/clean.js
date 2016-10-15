import del from 'del';
import mkdirp from 'mkdirp';

const makeDir = (path) => {
  return new Promise((resolve, reject) => {
    mkdirp(path, (err) => err ? reject(err) : resolve());
  });
};

async function clean () {
  await del(['build']);
  await makeDir('build');
}

export default clean;
