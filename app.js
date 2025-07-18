const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));

// Handle Mintlify routing
app.get('*', (req, res) => {
  const filePath = req.path;
  
  // Check if it's a direct file request
  if (filePath.includes('.')) {
    return res.sendFile(path.join(__dirname, filePath));
  }
  
  // Try to find corresponding MDX file
  const mdxPath = path.join(__dirname, filePath + '.mdx');
  const indexMdxPath = path.join(__dirname, filePath, 'index.mdx');
  
  if (fs.existsSync(mdxPath)) {
    return res.sendFile(mdxPath);
  }
  
  if (fs.existsSync(indexMdxPath)) {
    return res.sendFile(indexMdxPath);
  }
  
  // Fallback to index.html
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
