import { spawn } from 'child_process';

function installDependencies(_, config) {
  return new Promise((resolve, reject) => {
    const process = spawn('pnpm', ['install'], {
      cwd: config.path,
      shell: true,
      stdio: 'inherit',
    });

    process.on('close', (code) => {
      `${code}` === '0'
        ? resolve('Installed packages.')
        : reject(`Failed to install packages. Exited with ${code}.`);
    });
  });
}

export default function (plop) {
  plop.setDefaultInclude({ actionTypes: true });
  plop.setActionType('installDependencies', installDependencies);
}