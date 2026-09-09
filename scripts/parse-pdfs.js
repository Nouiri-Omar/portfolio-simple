const { PdfReader } = require('pdfreader');
const fs = require('fs');
const path = require('path');

const pdfDir = path.join(__dirname, '..', 'pdfs');
const pdfFiles = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));

async function parsePDFs() {
  console.log('Parsing PDFs...\n');

  const allProjects = [];

  for (const pdfFile of pdfFiles) {
    const filePath = path.join(pdfDir, pdfFile);
    
    console.log(`\n=== ${pdfFile} ===\n`);
    
    const items = [];
    
    new PdfReader().parseFileItems(filePath, (err, item) => {
      if (err) {
        console.error('Error:', err);
      } else if (!item) {
        // Done parsing
        console.log('Done with', pdfFile);
      } else if (item.text) {
        items.push(item.text.trim());
      }
    });
    
    // Wait for parsing to complete
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Process items
    const relevantLines = items.filter(line => 
      line.length > 20 && (
        line.match(/Project|Experience|Position|Company|Next\.js|React|Python|FastAPI|TypeScript|Node|PostgreSQL|Docker|AWS|API|Data|AI|ML|Value Lab|Care Intent|Ops Copilot|Doc Factory/gi)
      )
    );
    
    console.log('Relevant content found:');
    console.log(relevantLines.slice(0, 30).join('\n'));
  }

  console.log('\n--- Parsing complete! ---');
}

parsePDFs();
