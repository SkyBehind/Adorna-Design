import Papa from 'papaparse';

export async function loadEarrings() {
  try {
    // Load CSV data
    const csvResponse = await fetch('/src/data/earring_attributes.csv');
    const csvText = await csvResponse.text();
    
    // Parse CSV
    const csvData = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true
    });

    // Load descriptions
    const txtResponse = await fetch('/src/data/earring_descriptions.txt');
    const txtText = await txtResponse.text();
    
    // Parse descriptions (assuming format: filename: description)
    const descriptions = {};
    txtText.split('\n').forEach(line => {
      const [filename, ...descParts] = line.split(':');
      if (filename && descParts.length > 0) {
        descriptions[filename.trim()] = descParts.join(':').trim();
      }
    });

    // Merge data
    const earrings = csvData.data.map(row => ({
      filename: row.filename || '',
      name: row.name || row.style || 'Untitled Piece',
      color: row.color || 'Mixed',
      material: row.material || 'Mixed Materials',
      length: row.length || 'Standard',
      description: descriptions[row.filename] || 'A beautiful handcrafted piece made with love and attention to detail.',
      image: `/public/images/${row.filename}.jpg` // Assuming jpg format
    }));

    return earrings.filter(earring => earring.filename); // Filter out empty rows
  } catch (error) {
    console.error('Error loading earring data:', error);
    throw error;
  }
}
