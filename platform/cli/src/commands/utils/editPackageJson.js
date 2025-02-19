import fs from 'fs';
import path from 'path';

async function editPackageJson(options) {
  const { name, version, description, author, license, targetDir } = options;

  // read package.json from targetDir
  const dependenciesPath = path.join(targetDir, 'dependencies.json');
  const rawData = fs.readFileSync(dependenciesPath, 'utf8');
  const packageJson = JSON.parse(rawData);

  // edit package.json
  const mergedObj = Object.assign(
    {
      name,
      version,
      description,
      author,
      license,
      files: ['dist', 'README.md'],
    },
    packageJson
  );

  // write package.json back to targetDir
  const writePath = path.join(targetDir, 'package.json');
  fs.writeFileSync(writePath, JSON.stringify(mergedObj, null, 2));

  // remove the dependencies.json file
  fs.unlinkSync(dependenciesPath);
}

export default editPackageJson;
