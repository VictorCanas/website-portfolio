import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), '/src/json');
  //Read the json data file projects.json
  const projectsData = await fs.readFile(jsonDirectory + '/projects.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(JSON.parse(projectsData));
}
