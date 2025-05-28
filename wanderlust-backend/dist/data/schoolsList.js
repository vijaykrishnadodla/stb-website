import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let schools = [];
try {
    const filePath = path.join(__dirname, '../../../public/lovable-uploads/school_names.json');
    console.log('📚 Loading schools from:', filePath);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const schoolNames = JSON.parse(fileContent);
    schools = schoolNames.map((name, index) => ({
        code: String(index + 1).padStart(6, '0'),
        name: name
    }));
    console.log('📚 Loaded schools:', schools.length);
}
catch (error) {
    console.error('❌ Error loading schools:', error);
    schools = [];
}
export { schools };
