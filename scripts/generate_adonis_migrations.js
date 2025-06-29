const fs = require('fs');
const path = require('path');

const schemaPath = path.join(__dirname, '../db/schema.rb');
const schema = fs.readFileSync(schemaPath, 'utf8').split('\n');

const migrationsDir = path.join(__dirname, '../adonis/database/migrations');
const modelsDir = path.join(__dirname, '../adonis/app/Models');
fs.mkdirSync(migrationsDir, { recursive: true });
fs.mkdirSync(modelsDir, { recursive: true });

function pascalCase(str) {
  return str
    .split('_')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function mapType(type) {
  switch (type) {
    case 'string': return 'string';
    case 'bigint': return 'bigInteger';
    case 'integer': return 'integer';
    case 'text': return 'text';
    case 'boolean': return 'boolean';
    case 'datetime': return 'timestamp';
    case 'jsonb': return 'jsonb';
    case 'float': return 'float';
    case 'decimal': return 'decimal';
    default: return 'string';
  }
}

let i = 0;
let index = 1;
while (i < schema.length) {
  const line = schema[i];
  const match = line.match(/create_table \"([\w_]+)\"/);
  if (match) {
    const tableName = match[1];
    const columns = [];
    i++;
    while (i < schema.length && !schema[i].startsWith('  end')) {
      const colMatch = schema[i].match(/t\.([\w]+) \"([\w_]+)\"/);
      if (colMatch) {
        columns.push({ type: colMatch[1], name: colMatch[2] });
      }
      i++;
    }
    const timestamp = `${Date.now()}${index}`;
    const migrationFile = path.join(migrationsDir, `${timestamp}_${tableName}.ts`);
    const upLines = [];
    upLines.push("import BaseSchema from '@ioc:Adonis/Lucid/Schema'");
    upLines.push('');
    upLines.push(`export default class ${pascalCase(tableName)} extends BaseSchema {`);
    upLines.push('  protected tableName = \'' + tableName + '\';');
    upLines.push('');
    upLines.push('  public async up () {');
    upLines.push('    this.schema.createTable(this.tableName, (table) => {');
    upLines.push("      table.increments('id')");
    columns.forEach(c => {
      const colType = mapType(c.type);
      upLines.push(`      table.${colType}('${c.name}')`);
    });
    upLines.push('    })');
    upLines.push('  }');
    upLines.push('');
    upLines.push('  public async down () {');
    upLines.push('    this.schema.dropTable(this.tableName)');
    upLines.push('  }');
    upLines.push('}');
    fs.writeFileSync(migrationFile, upLines.join('\n'));

    const modelFile = path.join(modelsDir, `${pascalCase(tableName)}.ts`);
    const modelLines = [];
    modelLines.push("import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'");
    modelLines.push('');
    modelLines.push(`export default class ${pascalCase(tableName)} extends BaseModel {`);
    modelLines.push('  public static table = \'' + tableName + '\';');
    modelLines.push('');
    modelLines.push('  @column({ isPrimary: true })');
    modelLines.push('  public id: number');
    modelLines.push('}');
    fs.writeFileSync(modelFile, modelLines.join('\n'));
    index++;
  }
  i++;
}
