const { PdfReader } = require('pdfreader');
const fs = require('fs');
const path = require('path');

const pdfDir = path.join(__dirname, '..', 'pdfs');

async function extractFullText() {
  console.log('Extracting full text from key PDFs...\n');

  const keyFiles = [
    'Omar_Nouiri_CV_Senior_DataScientist_EN.pdf',
    'Omar_Nouiri_Resume_ATS_Master.pdf',
    '209022 CV_FR_Omar NOUIRI.pdf'
  ];

  for (const pdfFile of keyFiles) {
    const filePath = path.join(pdfDir, pdfFile);
    if (!fs.existsSync(filePath)) continue;

    console.log(`\n=== ${pdfFile} ===\n`);
    
    const items = [];
    
    await new Promise((resolve) => {
      new PdfReader().parseFileItems(filePath, (err, item) => {
        if (err) {
          console.error('Error:', err);
        } else if (!item) {
          resolve();
        } else if (item.text) {
          items.push(item.text.trim());
        }
      });
    });

    console.log('Total items found:', items.length);
    console.log('\nFull text content:');
    console.log('---');
    console.log(items.join(' ').substring(0, 3000));
    console.log('---\n');
  }
}

extractFullText();
