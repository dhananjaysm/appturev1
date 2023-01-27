import Airtable from 'airtable';

const base = new Airtable({
  apiKey: 'keyS73bET9Jydr6q9',
  // 'patQWJUSh1fdnCZSE.ab20e16add63b6672d1dc980df880434dca4d20e59c904af27439dd62fef2872',
}).base('appn3m0UxkJkRTKY9');

// const tableName ="appture-careers"
export async function getAllRecords(tableName: string) {
  try {
    const records = await base(tableName).select().all();
    // console.log(records);
    return records;
  } catch (err) {
    console.error(err);
    return err;
  }
}
// getAllRecords('careers');
